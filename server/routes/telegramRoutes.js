import { Router } from "express";
import dotenv from "dotenv";
import { Telegraf } from "telegraf";
import { bold } from "telegraf/format";
import { retry } from "../controllers/retry.js"; // Import the retry function
import { Group, User } from "../database/schema.js";
import { sendBotMessage } from "../controllers/sendBotMessage.js";
import {
  generatePaymentLink,
  generateTelegramInviteLink,
} from "../controllers/generatePaymentLink.js";
import { paidMemberCheck } from "../controllers/paidMemberCheck.js";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN, { polling: true });
// const websiteUrl = process.env.WEBSITE_URL;
const websiteUrl = process.env.WEBSITE_URL;

// Start command with interactive buttons
// Start command with interactive buttons

bot.start(async (ctx) => {
  const message = ctx.message.text;
  const token = ctx.payload;
  
  const telegramId = ctx.from?.id;
  const telegramUsername = ctx.from?.first_name;

  try {
    { token && ctx.reply(`This is the payload sent to the telgram bot ${token}`)}
    // Check if the user is already connected in the database
    const user = await User.findOne({ telegramId: telegramId });

    if (user && user.telegramConnected) {
      // If user is already connected, show them the dashboard menu
      ctx.reply(
        `👋 Welcome back, ${telegramUsername}! 🎉\n\n` +
          "You are already connected to GroupShepherd. What would you like to do next?",
        {
          reply_markup: {
            inline_keyboard: [
              [
                { text: "📂 Manage My Groups", callback_data: "manage_groups" },
                {
                  text: "💳Upgrade and pricing",
                  callback_data: "generate_link",
                },
              ],
              [
                {
                  text: "❓ How it works",
                  callback_data: "generate_link",
                },
                {
                  text: "📊 My Members and stats",
                  callback_data: "generate_link",
                },
              ],
            ],
          },
        }
      );
    } else {
      // If user is not connected, ask for User ID or provide registration link
      ctx.reply(
        `👋 Welcome to GroupShepherd! 🎉\n\n` +
          "GroupShepherd helps you effortlessly collect recurring payments💸🤑 from members of your groups. It protects your groups from spammers, unwanted messages, and abuse. So you can focus on growing your community and growing your revenue. " +
          "\n\nPlease enter your User ID to continue" +
          "\n\nIf you don't have your user ID, click the button below to register on our site and get your ID for FREE!",
        {
          reply_markup: {
            inline_keyboard: [
              [{ text: "🌐 Go to Website", url: `${websiteUrl}` }],
            ],
          },
        }
      );
    }
  } catch (error) {
    console.error("Error during /start command:", error);
    ctx.reply(
      "❌ There was an error fetching your information. Please try again later."
    );
  }
});

// Handle "Manage My Groups" button click
bot.action("manage_groups", (ctx) => {
  ctx.reply(
    "📂 **Manage My Groups**\n\n" +
      "To start managing a group, add me as an admin to your group. Once I’m added, I can help with:\n\n" +
      "- 💸 Subscription management\n\n" +
      "- 🛡️ Protecting your group from spammers\n\n" +
      "- 🔄 Automating group tasks\n\n" +
      "Click the button below to add me to your group.",
    {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "➕ Add Me to a Group",
              url: "https://t.me/Groupshepherd_bot?startgroup=true",
            },
          ],
          [
            {
              text: " 🔗🛒 Generate payment Group invite link",
              callback_data: "generate_link",
            },
          ],
        ],
      },
    }
  );
});

bot.action("generate_link", (ctx) => {});

bot.on("new_chat_members", async (ctx) => {
  const adminId = ctx.from.id;
  const number = await ctx.telegram.getChatMembersCount(ctx.chat.id); 

  const groupId = ctx.chat?.id; // ID of the group
  const groupName = ctx.chat?.title; // Name of the group
  const userId = ctx.from?.id;
  const newMembers = ctx.message.new_chat_members; // New members object
 


  const groupDescription = ctx.chat?.description || ""; // Description of the group

  if (!groupId || !userId || !groupName) {
    console.log("Group or User ID is undefined.");
    return; // Exit early if any required data is missing
  }

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ telegramId: userId });

    if (user) {
      // Check if the group already exists in the database
      let group = await Group.findOne({ groupId });

      if (!group) {
        // If group does not exist, create a new entry
        group = new Group({
          groupName: groupName,
          groupId: groupId,
          groupDescription: groupDescription,
          admin: user._id,
          participants: [],
          membersCount: number,
        });

        // Save the group to the database
        await group.save();

        // Optionally: Add the group to the user's `groups` array in the database
        user.groups.push(group._id);
        await user.save();

        // Send a welcome message to the group
        await ctx.reply(
          "👋 Hi everyone! I'm **GroupShepherd**, your group assistant. My role is to help manage subscriptions, enforce group rules, and ensure that no spammers make their way into your community. 🤖💪\n\n" +
            "I’m here to keep your group running smoothly and make sure that everyone is respected. If you have any questions or need assistance, feel free to reach out to the group admin!\n\n" +
            "Let's keep things fun and friendly for everyone! 😄"
        );

        await ctx.telegram.sendMessage(
          adminId,
          `Group Shepherd has been added to the group: ${groupName}🎉. If you want to set the amount of money you want to be paid for access to your group click the button below to access our website: ${websiteUrl}`
        );

        // Iterate through new members and check if the bot is one of them
        newMembers.forEach((member) => {
          // Pass the correct memberId to the function
          if (member.id !== ctx.botInfo.id) {
            // Call the payment check function for real users
            paidMemberCheck(ctx, member.id, groupId, adminId);
          }
        });
      } else {
        console.log("Group already exists in the database.");
      }
    } else {
      console.log("User not found in the database.");
    }
  } catch (error) {
    console.error("Error handling new chat member:", error);
  }
});

// Handle message with User ID
bot.on("message", async (ctx) => {
  if (ctx.message && ctx.message.text) {
    const userInput = ctx.message.text.trim(); // Get the user input
    const message = ctx.message.text;
    const userId = ctx.from.id; // Get the Telegram ID of the user sending the message

    // Check if the user is already connected to the platform
    const user = await User.findOne({ telegramId: userId });

    if (user && user.telegramConnected) {
      // If the user is already connected, inform them and let the bot handle other messages
      ctx.reply("🔗 Your Telegram account is already connected!");

      // Now proceed with checking if the message is "hi"
      if (message === "hi") {
        ctx.reply("Hey there!");
        return;
      }
    } else {
      // If the user is not connected, proceed to validate their UID
      // Regex to validate user ID format (starts with 'kp_' followed by 32 alphanumeric characters)
      const userIdRegex = /^kp_[a-fA-F0-9]{32}$/;

      // Check if the input matches the UID format
      if (userIdRegex.test(userInput)) {
        // User ID is valid, proceed with querying the database
        try {
          const user = await User.findOne({ uid: userInput });

          if (user) {
            // If user exists, update their Telegram details
            await user.updateOne({
              telegramId: ctx.from.id,
              telegramUsername: ctx.from.first_name,
              telegramConnected: true,
            });

            ctx.reply(
              "✅ You have successfully linked your Telegram account to our platform. You can now start managing your groups!"
            );
          } else {
            // If user does not exist
            ctx.reply(
              "❌ Sorry, we couldn't find a user with that ID. Please check your User ID and try again."
            );
          }
        } catch (error) {
          console.error("Error updating user:", error);
          ctx.reply(
            "❌ Something went wrong while linking your account. Please try again."
          );
        }
      } else {
        // If the UID format is invalid
        ctx.reply(
          "❓ The ID you entered is invalid. Please ensure it is in the correct format (e.g., kp_243a4068b74547d698f07f4df9e33667)."
        );
      }
    }
  } else {
    console.log("Message is not a text message.");
  }
});

bot.hears("hi", (ctx) => ctx.reply("Hey there"));

// Express router setup for webhook
const router = Router();

router.post("/telegram/webhook", (req, res) => {
  bot.handleUpdate(req.body, res);
});

router;

router.get("/api/telegram/user-groups", async (req, res) => {
  const { uid } = req.query;

  if (!uid) {
    return res.status(400).json({ message: "User ID is required." });
  }

  try {
    const user = await User.findOne({ uid });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const groups = await Group.find({ admin: user._id });
    if (!groups.length) {
      return res
        .status(404)
        .json({ message: "User hasn't added the bot to any group." });
    }

    res.status(200).json({ groups });
  } catch (error) {
    console.error("Error fetching user groups:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

router.post("/api/telegram/set-rules", async (request, response) => {
  const {
    userId,
    name,
    currency,
    isPaidGroup,
    pricingType,
    oneTimePrice,
    yearlyPrice,
    monthlyPrice,
  } = request.body;

  if (!userId) {
    return response.status(400).json({ message: "User ID is required." });
  }

  if (!name) {
    return response.status(400).json({ message: "Group name is required." });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return response.status(404).json({ message: "User not found." });
    }

    const group = await Group.findOne({
      admin: user._id,
      groupName: name,
    });

    if (!group) {
      return response.status(404).json({ message: "Group not found" });
    }

    if (group.paymentType && !isPaidGroup) {
      return response.status(400).json({
        message: "You cannot switch a paid group to a free group.",
      });
    }

    if (isPaidGroup) {
      if (oneTimePrice && monthlyPrice && yearlyPrice) {
        return response.status(400).json({
          message:
            "You cannot set both one-time and recurring payments for the same group.",
        });
      }

      if (pricingType === "recurring") {
        if (!monthlyPrice && !yearlyPrice) {
          return response.status(400).json({
            message: "Please provide either a monthly or yearly price.",
          });
        }

        if (monthlyPrice && isNaN(parseFloat(monthlyPrice))) {
          return response
            .status(400)
            .json({ message: "Invalid monthly price." });
        }

        if (yearlyPrice && isNaN(parseFloat(yearlyPrice))) {
          return response
            .status(400)
            .json({ message: "Invalid yearly price." });
        }

        if (monthlyPrice) {
          group.monthlyPrice = parseFloat(monthlyPrice);
        }
        if (yearlyPrice) {
          group.yearlyPrice = parseFloat(yearlyPrice);
        }
      }

      if (pricingType === "one-time" && oneTimePrice) {
        if (isNaN(parseFloat(oneTimePrice))) {
          return response.status(400).json({
            message:
              "One-time price is required if you want a one-time payment group",
          });
        }
        group.oneTimePrice = parseFloat(oneTimePrice);
      }

      group.paymentType = pricingType;
      group.currency = currency;
      group.isPaidGroup = isPaidGroup;

      await group.save();
      console.log("This is the new group details: ", group);
    }

    // Generate payment link based on group pricing details
    let paymentLink;
    if (group.paymentType === "recurring") {
      // Offer the user a choice between monthly or yearly payments
      if (monthlyPrice && yearlyPrice) {
        // You might want to present both options to the user and let them choose
        paymentLink = await generatePaymentLink(
          monthlyPrice,
          group._id,
          group.currency
        );
      } else if (monthlyPrice) {
        paymentLink = await generatePaymentLink(
          monthlyPrice,
          group._id,
          group.currency
        );
      } else if (yearlyPrice) {
        paymentLink = await generatePaymentLink(
          yearlyPrice,
          group._id,
          group.currency
        );
      }
    } else if (group.paymentType === "one-time") {
      paymentLink = await generatePaymentLink(
        group.oneTimePrice,
        group._id,
        group.currency
      );
    }

    // Generate Telegram invite link using Telegraf
    const inviteLink = await generateTelegramInviteLink(group?.groupId); // Assuming you have a function to do this

    // Message to send to the user
    const message =
      `✅ Group Payment rules set successfully\n\n` +
      `${group.groupName} new payment rules are as follows:\n` +
      `💸The payment type is ${group.paymentType}\n` +
      `💱The currency is ${group.currency}\n` +
      `${pricingType === "one-time" && oneTimePrice ? `The one-time price is ${group.oneTimePrice}` : ""}\n` +
      `💵📅The monthly price is ${group.currency}${group.monthlyPrice}\n` +
      `💎The yearly price is${group.currency} ${group.yearlyPrice}\n\n` +
      `This is your group payment link: ${paymentLink}\n\n` +
      `Send this link to members who want to join your community using this invite link: ${paymentLink}`;

    await sendBotMessage(user?.telegramId, message);
    

    return response
      .status(200)
      .json({ message: "Group rules set successfully." });
  } catch (error) {
    console.error("Error setting group rules: ", error.message);

    const errorMessage = error?.message || "Internal server error.";
    return response.status(500).json({ message: errorMessage });
  }
});

// Retry launching the bot
retry(() => bot.launch(), 5, 3000)
  .then(() => console.log("Bot launched successfully!"))
  .catch((err) => {
    console.error("Failed to launch bot after multiple retries:", err.message);
    process.exit(1); // Exit the app if retries are exhausted
  });

// Export bot and router
export { bot };
export default router;

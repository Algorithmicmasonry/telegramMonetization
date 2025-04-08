import { Member } from "../database/schema.js";
export const paidMemberCheck = async (ctx, memberId, groupId, adminId) => {
  const userId = ctx.message.new_chat_member.id;
  const firstName = ctx.message.new_chat_member.first_name;
  const username = ctx.message.new_chat_member.username;

  if (!memberId || !userId || !firstName || !username) {
    console.log("Error: Invalid parameters passed to paidMemberCheck function");
    return;
  }

  try {
    const member = await Member.findOne({ telegramId: memberId });

    // Check if member is either not found or not a paid member
    if (!member || member.paid === false) {
      await ctx.telegram.kickChatMember(ctx.chat.id, memberId);
      const message = `🚨 User ${firstName} (${username}) has been removed for not being a paid member.`;

      // Send message to the group
      await ctx.reply(message);

      // Send the same message to the admin
      await ctx.telegram.sendMessage(adminId, message);

      console.log("Error: Member not found or not paid");
      return;
    }

    // If member is a paid member
    const welcomeMessage = `
🎉 **Welcome, ${firstName} (@${username})!** 🎉

You’ve just joined a vibrant community of like-minded individuals. We’re thrilled to have you here and can’t wait to see your contributions. 🚀

Feel free to explore, interact, and make the most of your membership. If you have any questions, don't hesitate to reach out to the admins! 💬

Let’s make this experience unforgettable! 🌟

**Enjoy your time here!** 🤗
`;

    // Send welcome message to the group
    await ctx.reply(welcomeMessage);

    // Optionally send a message to the admin (you can customize this if needed)
    await ctx.telegram.sendMessage(
      adminId,
      `🚀 **${firstName} (@${username})** has successfully joined the group as a paid member. Welcome aboard! 🎉`
    );
  } catch (error) {
    console.error("Error checking paid status: ", error);
  }
};

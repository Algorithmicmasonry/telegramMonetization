import { Context } from "telegraf";
import { Member } from "../database/schema.js";

export const paidMemberCheck = async (
  ctx,
  memberId,
  groupId,
  adminId,

) => {
  const userId = ctx.message.new_chat_member.id;
  const firstName = ctx.message.new_chat_member.first_name;
  const username = ctx.message.new_chat_member.username;
  if (!memberId || !groupId || !adminId || !userId || !firstName || !username) {
    console.log("Error: Invalid parameters passed to paidMemberCheck function");
    return;
  }

  try {
    const member = await Member.findOne({ telegramId: memberId });

    if (!member) {
      await ctx.telegram.kickChatMember(ctx.chat.id, memberId);
      await ctx.reply(
        `🚨 User ${firstName} (${username}) has been removed for not being a paid member.`
      );
      console.log("Error: Member not found in database");
      return;
    }

    if (member.paid === false) {
      await ctx.telegram.kickChatMember(ctx.chat.id, memberId);
      await ctx.reply(
        `🚨 User ${firstName} (${username}) has been removed for not being a paid member.`
      );
      console.log("Error: Member not found in database");
      return;
    }

    if (member.paid === true) {
      await ctx.reply(`Welcome ${firstName} (${username}) to the community!`);
    }
  } catch (error) {
    console.error("Error checking paid status: ", error);
  }
};

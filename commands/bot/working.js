import { log } from "../../modules/logger.js";
export function run(client, message, args) {
  message.reply('Bot is functioning.');
  message.react('✅');
  log(`${message.author.tag}'s working command was answered! `, "cmd");
}

export const name = "working";
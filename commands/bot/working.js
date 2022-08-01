const logger = require("../../modules/logger.js");
exports.run = (client, message, args) => {
  message.reply('Bot is functioning.');
  message.react('✅');
  logger.log(`${message.author.tag}'s working command was answered! `, "cmd");
}

exports.name = "working";
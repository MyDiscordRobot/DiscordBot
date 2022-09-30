const logger = require("../../modules/logger.js");
exports.run = (message) => {
  try{
  message.reply('Bot is functioning.');
  message.react('✅');
  logger.log(`${message.author.tag}'s working command was answered! `, "cmd");
  } catch (err) {
    logger.log(err, "error");
  }
};

exports.name = "working";
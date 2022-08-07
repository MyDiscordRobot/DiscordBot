const logger = require("../../modules/logger.js");
exports.run = (client, message) => {
  const member = message.mentions.members.first();
  if (message.member.permissions.has("BAN_MEMBERS") || message.author.id == process.env.SuperUserID) {
    if (!member) {
      message.reply("You need to @mention a user/bot to kick from the voice channel.")
      message.react("❌");
      logger.log(`${message.author.tag}'s ban command failed because he didn't mention anyone! `, "cmd");
    } else {
      try{
      member.ban();
      message.reply("Banned user/bot from guild.");
      message.react("✅");
      logger.log(`${message.author.tag}'s banned ${member}! `, "cmd");
      } catch (err) {
        logger.log(err, "error");
      }
    }
  } else {
    message.reply("You do not have permissions to ban.");
    message.react("❌");
    logger.log(`${message.author.tag}'s failed the permission to ban ${member}! `, "cmd");
  }
};

exports.name = "ban";
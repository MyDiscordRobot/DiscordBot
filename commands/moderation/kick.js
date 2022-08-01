const logger = require("../../modules/logger.js");
exports.run = (client, message, args) => {
const member = message.mentions.members.first();
if (message.member.permissions.has("KICK_MEMBERS") || message.author.id == process.env.SuperUserID){
if (!member){ 
  message.reply("You need to @mention a user/bot to kick from the voice channel.")
  message.react("❌");
  logger.log(`${message.author.tag}'s kick command failed because he didn't mention anyone! `, "cmd");
  } else {
  member.kick();
  message.reply("Kicked user/bot from guild.");
  message.react("✅");
  logger.log(`${message.author.tag} kicked ${member}! `, "cmd");
  }
  } else {
  message.reply("You do not have permissions to kick.");
  message.react("❌");
  logger.log(`${message.author.tag}'s failed the permission to kick ${member}! `, "cmd");
  }
}

exports.name = "kick";
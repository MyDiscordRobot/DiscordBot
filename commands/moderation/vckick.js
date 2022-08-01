const logger = require("../../modules/logger.js");
exports.run = (client, message, args) => {
const member = message.mentions.members.first();
if (message.member.permissions.has("MOVE_MEMBERS") || message.author.id == process.env.SuperUserID){
if (!member){ 
  message.reply("You need to @mention a user/bot to kick from the voice channel.")
  message.react("❌");
  logger.log(`${message.author.tag}'s vckick command failed because he didn't mention anyone! `, "cmd");
  } else {
  user.setVoiceChannel(null);
  message.reply("Kicked user/bot from voice channel.");
  message.react("✅");
  logger.log(`${message.author.tag} vckicked ${member}! `, "cmd");
  }
  } else {
  message.reply("You do not have permissions to vckick.");
  message.react("❌");
  logger.log(`${message.author.tag}'s failed the permission to vckick ${member}! `, "cmd");
  }
}

exports.name = "vckick";
const logger = require("../../modules/logger.js");
exports.run = (client, message) => {
  const member = message.mentions.members.first();
  if (!message.member.permissions.has("KICK_MEMBERS") || message.author.id == process.env.SuperUserID) return message.reply("You do not have permissions to vckick.");
if (!member) return message.reply("You need to @mention a user/bot to vckick.");
try{
  user.setVoiceChannel(null);
  message.reply("Kicked user/bot from vc.");
      logger.log(`${message.author.tag}'s vckicked ${member}! `, "cmd");
      } catch (err) {
        logger.log(err, "error");
      }
};

exports.name = "ban";
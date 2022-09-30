const logger = require("../../modules/logger.js");
exports.run = (client, message) => {
  const member = message.mentions.members.first();
  if (!message.member.permissions.has("BAN_MEMBERS") || message.author.id == process.env.SuperUserID) return message.reply("You do not have permissions to ban.");
if (!member) return message.reply("You need to @mention a user/bot to kick from the voice channel.");
try{
  member.ban();
  message.reply("Banned user/bot from guild.");
      logger.log(`${message.author.tag}'s banned ${member}! `, "cmd");
      } catch (err) {
        logger.log(err, "error");
      }
};

exports.name = "ban";
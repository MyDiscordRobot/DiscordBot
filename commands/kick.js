exports.run = (client, message, args) => {
const member = message.mentions.members.first();
if (message.member.permissions.has("KICK_MEMBERS") || message.author.id == process.env.SuperUserID){
if (!member){ 
  message.reply("You need to @mention a user/bot to kick them from the guild.")
  message.react("❌");
  } else {
  member.voice.setChannel(null);
  message.reply("Kicked user/bot from guild.");
  message.react("✅");
  }
  } else {
  message.reply("You do not have permissions to kick.");
  message.react("❌");
  }
}

exports.name = "kick";
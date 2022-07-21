exports.run = (client, message, args) => {
const member = message.mentions.members.first();
if (message.member.permissions.has("BAN_MEMBERS") || message.author.id == process.env.SuperUserID){
if (!member){ 
  message.reply("You need to @mention a user/bot to kick from the voice channel.")
  message.react("❌");
  } else {
  member.ban();
  message.reply("Banned user/bot from guild.");
  message.react("✅");
  }
  } else {
  message.reply("You do not have permissions to ban.");
  message.react("❌");
  }
}

exports.name = "ban";
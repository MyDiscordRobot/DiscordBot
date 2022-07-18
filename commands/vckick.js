const { Permissions } = require("discord.js");

exports.run = (client, message, args) => {
const member = message.mentions.members.first();
if (message.member.permissions.has("MOVE_MEMBERS") || message.author.id == process.env.SuperUserID){
if (!member){ message.reply("You need to @mention a user/bot to kick from the voice channel.")
} else {
if (!member.voice.channel){  
   message.reply("That user/bot isn't in a voice channel.");
} else {
  member.voice.setChannel(null);
  message.reply("Kicked user/bot from voice channel.");
  message.react("✅");
  }
}
} else {
message.reply("You do not have permissions to vckick.");
message.react("❌");
  }
}

exports.name = "vckick";
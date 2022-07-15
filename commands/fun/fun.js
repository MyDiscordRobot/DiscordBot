const Discord = require("discord.js");
const Database = require("@replit/database");
//message checks
client.on('messageCreate', (message) => {

  //returns false if message is sent by bot
  if (message.author.bot || !message.content.startsWith("$") || !message.guild) return;

  //working
  if (message.content.startsWith("$working")){
    message.reply("Bot is functioning.");
    console.log("Bot = functioning.");
  }
  //ban
  if (message.content.startsWith("$ban ")) {
    if (message.member.permissions.has("BAN_MEMBERS")){
      if (message.member.mentions.first()) {
        try {
          const user = message.mentions.member.first();
          user.ban();
          message.reply(user + " was banned.");
            }catch{
            message.reply("I do not have permissions to ban" + user());
            }
          }else{
        message.reply("You do not have permissions to ban" + user());
      }
    }
  }
});
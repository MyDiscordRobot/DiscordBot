//import needed libraries
const Discord = require("discord.js");
const Database = require("@replit/database");
//create the client
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"] 
})
//token is hidden
const mySecret = process.env['TOKEN'];

//log to console when the client is loaded in
client.on('ready', () => {
  console.log("Bot is ready!");
  client.user.setActivity('yaydy#8787', { type: 'PLAYING' });
});

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

//login to discord
client.login(process.env.TOKEN);
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
  client.user.setActivity('for $commands', { type: 'WATCHING' });
});

//login to discord
client.login(process.env.TOKEN);
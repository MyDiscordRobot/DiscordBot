//import needed libraries
const Discord = require("discord.js");
const Database = require("@replit/database");
//import FunctioningCheck from "./commands/fun/fun.js";
//create the client
const client = new Discord.Client({
  intents: ["GUILDS","GUILD_MESSAGES","GUILD_MEMBERS","GUILD_MESSAGE_REACTIONS","GUILD_WEBHOOKS","GUILD_VOICE_STATES","GUILD_INVITES","GUILD_BANS"]
})
//token is hidden
const mySecret = process.env['TOKEN'];
const mySecret = process.env['prefix']
const mySecret = process.env['SuperUserID']

//log to console when the client is loaded in
client.on('ready', () => {
  console.log("Bot is ready!");
  client.user.setActivity('for $ commands', { type: 'WATCHING' });
  //.log(FunctioningCheck);
});


//login to discord
client.login(process.env.TOKEN);
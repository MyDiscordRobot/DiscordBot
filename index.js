//import needed libraries
const Discord = require("discord.js");
const Database = require("@replit/database");
import FunctioningCheck from "./commands/fun/fun.js";
//create the client
const client = new Discord.Client({
  intents: [ 
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_PRESENCES,
  ] 
})
//token is hidden
const mySecret = process.env['TOKEN'];

//log to console when the client is loaded in
client.on('ready', () => {
  console.log("Bot is ready!");
  client.user.setActivity('for $ commands', { type: 'WATCHING' });
  console.log(FunctioningCheck);
});


//login to discord
client.login(process.env.TOKEN);
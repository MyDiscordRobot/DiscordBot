const Discord = require("discord.js");
const Database = require("@replit/database");
import { prefix, BGPcheck } from "../commands/commands.js";
let FunctioningCheck = client.on('messageCreate', (message) => {

  //returns false if message is sent by bot
  BGPcheck();

  //working
  if (message.content.startsWith(prefix + "working")){
    message.reply("Bot is functioning.");
    console.log("Bot = functioning.");
  }
});
client.on('messageCreate', (message) => {

  //returns false if message is sent by bot
  BGPcheck();

  //working
  if (message.content.startsWith(prefix + "working")){
    message.reply("Bot is functioning.");
    console.log("Bot = functioning.");
  }
});
export { FunctioningCheck };
const { Client, Collection } = require("discord.js");
const fs = require("fs");
const client = new Client({
  intents:
  [
  "GUILDS", 
  "GUILD_MESSAGES",
  "GUILD_MEMBERS",
  "GUILD_MESSAGE_REACTIONS",
  "GUILD_VOICE_STATES",
  "GUILD_BANS"
  ]
})
client.commands = new Collection();

const events = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of events){
  const eventName = file.split(".")[0];
  const event = require(`./events/${file}`);
  client.on(eventName, event.bind(null, client));
}

const commandsBot = fs.readdirSync("./commands/bot").filter(file => file.endsWith(".js"));
for (const file of commandsBot){
  const commandName = file.split(".")[0];
  const command = require(`./commands/bot/${file}`);
  console.log(`Attempting to load command ${commandName}`);
  client.commands.set(commandName, command);
}
const commandsModeration = fs.readdirSync("./commands/moderation").filter(file => file.endsWith(".js"));
for (const file of commandsModeration){
  const commandName = file.split(".")[0];
  const command = require(`./commands/moderation/${file}`);
  console.log(`Attempting to load command ${commandName}`);
  client.commands.set(commandName, command);
}
const commandsOwner = fs.readdirSync("./commands/owner").filter(file => file.endsWith(".js"));
for (const file of commandsOwner){
  const commandName = file.split(".")[0];
  const command = require(`./commands/owner/${file}`);
  console.log(`Attempting to load command ${commandName}`);
  client.commands.set(commandName, command);
}
const commandsRandom = fs.readdirSync("./commands/random").filter(file => file.endsWith(".js"));
for (const file of commandsRandom){
  const commandName = file.split(".")[0];
  const command = require(`./commands/random/${file}`);
  console.log(`Attempting to load command ${commandName}`);
  client.commands.set(commandName, command);
}

client.login(process.env.TOKEN);
const express = require('express')
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('<h1>Bot is online.</h1>')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
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

const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commands){
  const commandName = file.split(".")[0];
  const command = require(`./commands/${file}`);
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
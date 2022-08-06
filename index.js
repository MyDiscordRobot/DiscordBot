import { Client, Collection } from "discord.js";
import { readdirSync } from "fs";
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
import { log } from "./modules/logger.js";
client.commands = new Collection();
const events = readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of events) {
  const eventName = file.split(".")[0];
  const event = require(`./events/${file}`);
  client.on(eventName, event.bind(null, client));
}
const commandsBot = readdirSync("./commands/bot").filter(file => file.endsWith(".js"));
for (const file of commandsBot) {
  const commandName = file.split(".")[0];
  const command = require(`./commands/bot/${file}`);
  log(`Attempting to load command ${commandName}`, "log");
  client.commands.set(commandName, command);
}
const commandsModeration = readdirSync("./commands/moderation").filter(file => file.endsWith(".js"));
for (const file of commandsModeration) {
  const commandName = file.split(".")[0];
  const command = require(`./commands/moderation/${file}`);
  log(`Attempting to load command ${commandName}`, "log");
  client.commands.set(commandName, command);
}
const commandsOwner = readdirSync("./commands/owner").filter(file => file.endsWith(".js"));
for (const file of commandsOwner) {
  const commandName = file.split(".")[0];
  const command = require(`./commands/owner/${file}`);
  log(`Attempting to load command ${commandName}`, "log");
  client.commands.set(commandName, command);
}
const commandsRandom = readdirSync("./commands/random").filter(file => file.endsWith(".js"));
for (const file of commandsRandom) {
  const commandName = file.split(".")[0];
  const command = require(`./commands/random/${file}`);
  log(`Attempting to load command ${commandName}`, "log");
  client.commands.set(commandName, command);
}

client.login(process.env.TOKEN);
//only for replit
import express from 'express';
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('<h1>Bot is online.</h1>')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const { Client, Intents, Collection } = require("discord.js");
const Database = require("@replit/database");
const fs = require("fs");
const client = new Client({
  intents:
    ["GUILDS", 
     "GUILD_MESSAGES",
     "GUILD_MEMBERS",
     "GUILD_MESSAGE_REACTIONS",
     "GUILD_WEBHOOKS",
     "GUILD_VOICE_STATES",
     "GUILD_INVITES",
     "GUILD_BANS"]
})

const config = require("./config.json");
client.config = config;
client.commands = new Collection();

const events = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of events) {
  const eventName = file.split(".")[0];
  const event = require(`./events/${file}`);
  client.on(eventName, event.bind(null, client));
}

const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commands) {
  const commandName = file.split(".")[0];
  const command = require(`./commands/${file}`);

  console.log(`Attempting to load command ${commandName}`);
  client.commands.set(commandName, command);
}

//login to discord
client.login(process.env.TOKEN);

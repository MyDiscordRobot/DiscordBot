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
const logger = require("./modules/logger.js");
client.commands = new Collection();
const events = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of events) {
  const eventName = file.split(".")[0];
  const event = require(`./events/${file}`);
  client.on(eventName, event.bind(null, client));
}
const commands = fs.readdirSync("./commands/bot" && "./commands/moderation" && "./commands/owner" && "./commands/random").filter(file => file.endsWith(".js"));
for (const file of commands) {
  const commandName = file.split(".")[0];
  const command = require(`./commands/bot/${file}` && `./commands/moderation/${file}` && `./commands/owner/${file}` && `./commands/random/${file}`);
  logger.log(`Attempting to load command ${commandName}`, "log");
  client.commands.set(commandName, command);
}

client.login(process.env.TOKEN);

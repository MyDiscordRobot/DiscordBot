const { version } = require("discord.js");
const { codeBlock } = require("@discordjs/builders");
const { DurationFormatter } = require("@sapphire/time-utilities");
const durationFormatter = new DurationFormatter();
const logger = require("../../modules/logger.js");

exports.run = (client, message, args, level) => { 
  const duration = durationFormatter.format(client.uptime);
  const stats = codeBlock("asciidoc", `= STATISTICS =
  • Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
  • Uptime     :: ${duration}
  • Discord.js :: v${version}
  • Node       :: ${process.version}`); 
  message.reply(stats);
  message.react("✅");
  logger.log(`${message.author.tag}'s stats command was answered! `, "cmd");
};

exports.name = "stats";
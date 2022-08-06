import { version } from "discord.js";
import { codeBlock } from "@discordjs/builders";
import { DurationFormatter } from "@sapphire/time-utilities";
const durationFormatter = new DurationFormatter();
import { log } from "../../modules/logger.js";

export function run(client, message, args) {
  const duration = durationFormatter.format(client.uptime);
  const stats = codeBlock("asciidoc", `= STATISTICS =
  • Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
  • Uptime     :: ${duration}
  • Discord.js :: v${version}
  • Node       :: ${process.version}`);
  message.reply(stats);
  message.react("✅");
  log(`${message.author.tag}'s stats command was answered! `, "cmd");
}

export const name = "stats";
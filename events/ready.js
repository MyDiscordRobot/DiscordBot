import { log } from "../modules/logger.js";
export default async client => {
  log(`${client.user.tag}, ready to serve ${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)} users in ${client.guilds.cache.size} servers.`, "ready");
  log(`Prefix for client is ${process.env.prefix}`, "log");

  client.user.setActivity("for $help.", { type: "WATCHING" });
};
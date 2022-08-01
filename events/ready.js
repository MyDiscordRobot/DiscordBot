const logger = require("../modules/logger.js");
module.exports = async client => {
  logger.log(`${client.user.tag}, ready to serve ${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)} users in ${client.guilds.cache.size} servers.`, "ready");
  logger.log(`Prefix for client is ${process.env.prefix}`, "log");

  client.user.setActivity("for $help.", { type: "WATCHING" });
};
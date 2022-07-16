module.exports = async client => {
console.log(`${client.user.tag}, ready to serve ${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)} users in ${client.guilds.cache.size} servers.`, "ready");
  client.user.setActivity("for $ commands.", { type: "WATCHING" });
};
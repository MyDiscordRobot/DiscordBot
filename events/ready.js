module.exports = async client => {
  console.log(client.user.tag + ", ready to serve " + client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b) + " users in " + client.guilds.cache.size +  " server(/s).");
  console.log("Prefix for client is " + process.env.prefix + ".");
  client.user.setActivity("for $help.", {type: "WATCHING"});
};
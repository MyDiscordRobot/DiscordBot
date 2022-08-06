const logger = require("../../modules/logger.js");
exports.run = (client, message) => {
  let personping = new Date().getTime() - message.createdTimestamp;
  let botping = client.ws.ping;
  message.reply("Your latency is " + personping + "ms. Bot latency is " + botping + "ms.");
  message.react("✅");
  logger.log(`${message.author.tag}'s ping command was answered! ${message.author.tag}'s ping is ${personping} and my ping is ${botping}.`, "cmd");
}

exports.name = "ping";
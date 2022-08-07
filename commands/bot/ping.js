const logger = require("../../modules/logger.js");
exports.run = (client, message) => {
  let personping = new Date().getTime() - message.createdTimestamp;
  let botping = client.ws.ping;
  try{
  message.reply("Your latency is " + personping + "ms. Bot latency is " + botping + "ms.");
  logger.log(`${message.author.tag}'s ping command was answered! ${message.author.tag}'s ping is ${personping} and my ping is ${botping}.`, "cmd");
  } catch (err) {
    logger.log(err, "error")
  }
};

exports.name = "ping";
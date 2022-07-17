exports.run = (client, message, args) => {
  message.channel.reply("Bot latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms");
}

exports.name = "ping";
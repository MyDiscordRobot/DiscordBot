exports.run = (client, message, args) => {
let personping = new Date().getTime() - message.createdTimestamp;
let botping = client.ws.ping;
message.reply("Your latency is " + personping + "ms. Bot latency is " + botping + "ms.");
message.react("✅");
}

exports.name = "ping";  
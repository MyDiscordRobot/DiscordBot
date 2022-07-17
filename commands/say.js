exports.run = (client, message, args) => {
  const ana = " - Anonymous"
  let text = args.join(" " + ana);
  message.delete();
  message.channel.send(text);
}

exports.name = "say";
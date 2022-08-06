exports.run = (client, message, args) => {
  if (message.author.id == process.env.SuperUserID) {
    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
  } else {
    return;
  }
}

exports.name = "say";
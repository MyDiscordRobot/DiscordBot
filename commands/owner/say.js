exports.run = (client, message, args) => {
  if (message.author.id == process.env.SuperUserID) {
    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
  } else {
    message.reply("That command does not exist. Use $help for a list of existing commands.");
  }
}

exports.name = "say";
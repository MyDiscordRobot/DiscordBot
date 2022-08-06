exports.run = (client, messages, args) => {
    const member = message.mentions.members.first();
    if (!member) {
        message.reply("You need to @mention a user/bot to get their id.")
        message.react("❌");
        logger.log(`${message.author.tag}'s ban command failed because he didn't mention anyone! `, "cmd");
      } else {
        
}
}

exports.name = "id";
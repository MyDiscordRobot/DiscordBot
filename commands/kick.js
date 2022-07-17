exports.run = (client, message, args) => {
let mention = message.mentions.users.first();
if (message.member.permissions.has("KICK_MEMBERS") || message.author.id == process.env.SuperUserID) {
    if (mention){
        try {
            mention.kick();
            message.reply("Kicked @" + mention + ".")
        } catch {
            message.reply("I do not have permissions to kick @" + mention + ".");
        }
    } else {
        message.reply("You do not have permissions to kick @" + mention + ".");
    }
  }
}

exports.name = "kick";
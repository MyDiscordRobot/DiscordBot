exports.run = (client, message, args) => {
var user = msg.members.mentions.first();
if (msg.member.hasPermission("BAN_MEMBERS") || message.author.id == config.ownerID) {
    if (msg.members.mentions.first()) {
        try {
            user.ban();
        } catch {
            msg.reply("I do not have permissions to ban" + msg.members.mentions.first());
        }
    } else {
        msg.reply("You do not have permissions to ban" + msg.members.mentions.first());
    }
  }
}

exports.name = "ban";
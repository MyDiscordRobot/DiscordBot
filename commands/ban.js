exports.run = (client, message, args) => {
let mention = message.mentions.users.first();
if (message.member.permissions.has("BAN_MEMBERS") || message.author.id == process.env.SuperUserID){
  if (mention){
  try{
  mention.ban();
  message.reply("Banned @" + mention + ".")

  } catch {
  message.reply("I do not have permissions to ban @" + mention + ".");
    }
  } else {
  message.reply("You do not have permissions to ban @" + mention + ".");
    }
  }
}

exports.name = "ban";
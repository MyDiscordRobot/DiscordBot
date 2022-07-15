//ban
  if (message.content.startsWith("$ban ")) {
    if (message.member.permissions.has("BAN_MEMBERS")){
      if (message.member.mentions.first()) {
        try {
          const user = message.mentions.member.first();
          user.ban();
          message.reply(user + " was banned.");
            }catch{
            message.reply("I do not have permissions to ban" + user());
            }
          }else{
        message.reply("You do not have permissions to ban" + user());
      }
    }
  }
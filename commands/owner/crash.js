exports.run = (message) => {
  if(message.author.id == process.env.SuperUserID){
    message.react("🏠");
    message.react("🚗");
    console.log("Process was killed by owner.");
    process.exit(0);
  } else {
    message.reply("You cannot do this!");
  }
}

exports.name = "crash";
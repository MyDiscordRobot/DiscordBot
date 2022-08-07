const logger = require("../../modules/logger.js");
exports.run = (message) => {
  if(message.author.id == process.env.SuperUserID){
    try{
    message.react("🏠");
    message.react("🚗");
    console.log("Process was killed by owner.");
    process.exit(0);
    } catch (err) {
      logger.log(err, "error")
    }
  } else {
    message.reply("You cannot do this!");
  }
}

exports.name = "crash";
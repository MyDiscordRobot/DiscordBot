const logger = require("../../modules/logger.js");
exports.run = (message) => {
  if(message.author == process.env.SuperUserID){
    try{
    message.react("🏠");
    message.react("🚗");
    console.log("Process was killed by owner.");
    } catch (err) {
      logger.log(err, "error")
    }
  } else {
    message.reply("That command does not exist. Use $help for a list of existing commands.");
  }
}

exports.name = "crash";
const commandlist = require("../index.js");
exports.run = (client, message, args) => {
message.reply(commandlist);
}

exports.name = "help";
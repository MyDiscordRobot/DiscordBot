const { codeBlock } = require("@discordjs/builders");
exports.run = (client, message, args) => {
const commandlist = codeBlock("asciidoc", `= Commands =
• Ban: Ban a guild member.         
• Kick: Kick a guild member.       
• Help: Tell all commands.         
• Ping: Tell user and bot latency. 
• Stats: Statistics for the bot.   
• Working: Tell if bot works.`);

message.reply(commandlist);
}

exports.name = "help";
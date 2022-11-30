const { codeBlock } = require("@discordjs/builders");
const logger = require("../../modules/logger.js");
exports.run = (message) => {
const commandlist = codeBlock("asciidoc", `= Commands =
My website is https://yaydy.github.io/DiscordBot/

= MODERATION =
• Ban: Ban a guild member.         
• Kick: Kick a guild member.     
• VCkick: Kick a guild member from voice chat.

= BOT =
• Help: Tell all commands.         
• Ping: Tell user and bot latency. 
• Stats: Statistics for the bot.   
• Working: Tell if bot works.

= Random =
• Frog: Send a random frog image.
• ComputerFact: Send a random computer fact.
• Cat: Send a random cat image.
• Dog: Send a random dog image.
• Meme: Send a random meme image.`);
try{
  message.reply(commandlist);
  logger.log(`${message.author.tag}'s help command was answered!`, "cmd");
} catch (err) {
  logger.log(err, "error")
}
};

exports.name = "help";
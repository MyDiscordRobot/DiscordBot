const config = require("../config.json");
module.exports = (client, message) => {
  if (message.author.bot) return;

const prefix = "$";

  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);

  if (!cmd){
    message.reply("That command does not exist.");
  }
  
  // Run the command
  cmd.run(client, message, args);
};
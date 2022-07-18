const talkedRecently = new Set();

module.exports = (client, message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(process.env.prefix) !== 0) return;
  if (talkedRecently.has(message.author.id)) return message.reply("Don't spam commands!");
  talkedRecently.add(message.author.id);
  setTimeout(() => {
  talkedRecently.delete(message.author.id);
  }, 2000);
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command);
if (!cmd){
    message.reply("That command does not exist. Use $help for a list of existing commands.");
  } else {  
  cmd.run(client, message, args);
  }
};
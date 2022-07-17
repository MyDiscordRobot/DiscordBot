exports.run = (client, message, args) => {
const embed = new Discord.MessageEmbed()
  .setTitle("This is your title, it can hold 256 characters")
  .setImage("http://i.imgur.com/yVpymuV.png")
message.channel.send({ embeds: [embed] });
}
exports.name = "frog";
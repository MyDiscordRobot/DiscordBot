exports.run = (client, message, args) => {
const embed = new Discord.MessageEmbed()
  .setTitle("Frog!")
  .setImage("http://i.imgur.com/yVpymuV.png")
message.channel.send({ embeds: [embed] });
}

exports.name = "frog";
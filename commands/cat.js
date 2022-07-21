const randomCat = require('random-cat-img');
const { MessageEmbed } = require('discord.js');
exports.run = async (client, message, args) => {
  const res = await randomCat();
  const embed = new MessageEmbed()
    .setTitle("Cat!")
    .setImage(res.data.message)
await message.reply({ embeds: [embed] }) && message.react("✅");
}

exports.name = "cat";
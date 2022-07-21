const randomPuppy = require('random-puppy');
const { MessageEmbed } = require('discord.js');
exports.run = async (client, message, args) => {
randomPuppy()
console.log(randomPuppy.url)
 const embed = new MessageEmbed()
    .setTitle("Dog!")
    .setImage(randomPuppy.url)
await message.reply({ embeds: [embed] }) && message.react("✅");
}

exports.name = "dog";
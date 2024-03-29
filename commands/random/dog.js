const logger = require("../../modules/logger.js");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
  const url = await fetch("https://www.reddit.com/r/dog/random/.json?include_over_18=off");
  const random = await url.json();
  
  const embed = new MessageEmbed()
    .setTitle("Dog!")
    .setImage(random[0].data.children[0].data.url)

  await message.channel.send({ embeds: [embed] }) 
  logger.log(`${message.author.tag}'s got sent a dog picture (${random[0].data.children[0].data.url})! `, "cmd");
}

exports.name = "dog";
import { log } from "../../modules/logger.js";
import { MessageEmbed } from "discord.js";
import fetch from "node-fetch";

export async function run(client, message, args) {
  const url = await fetch("https://www.reddit.com/r/frog/random/.json?include_over_18=off");
  const random = await url.json();

  const embed = new MessageEmbed()
    .setTitle("Frog!")
    .setImage(random[0].data.children[0].data.url)

  await message.channel.send({ embeds: [embed] });
  log(`${message.author.tag}'s got sent a frog picture (${random[0].data.children[0].data.url})! `, "cmd");
}

export const name = "frog";
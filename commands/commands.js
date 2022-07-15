const Discord = require("discord.js");
const Database = require("@replit/database");
var prefix = "$";
var BGPcheck = if (message.author.bot || !message.content.startsWith(prefix) || !message.guild) return;
export { prefix, BGPcheck };
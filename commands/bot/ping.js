import { log } from "../../modules/logger.js";
export function run(client, message, args) {
  let personping = new Date().getTime() - message.createdTimestamp;
  let botping = client.ws.ping;
  message.reply("Your latency is " + personping + "ms. Bot latency is " + botping + "ms.");
  message.react("✅");
  log(`${message.author.tag}'s ping command was answered! ${message.author.tag}'s ping is ${personping} and my ping is ${botping}.`, "cmd");
}

export const name = "ping";
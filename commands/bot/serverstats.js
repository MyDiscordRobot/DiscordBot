import logger from "../../modules/logger.js";
import { codeBlock } from "@discordjs/builders";
const membercount = message.guild.memberCount;
export function run(client, message, args) {
const stats = codeBlock("asciidoc", `= SERVER STATISTICS =
Users in server = ${membercount}
                                                    `)
}

export const name = ("serverstats");
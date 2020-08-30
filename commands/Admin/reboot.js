const Discord = require("discord.js");
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");

exports.run = async (client, message, args) => {
let giveIDs = ["667354950321569792", "262410813254402048"]
if (!giveIDs.includes(message.author.id)) return

message.channel.send(new Discord.MessageEmbed().setAuthor("Restarting...").setColor("GREEN").setDescription("I am now restarting...")).then(() => {
client.shard.broadcastEval("process.exit()")
});
}

exports.help = {
  name: "reboot",
  description: "Reboots GoogleBot to apply new updates, or just to reboot it in general.",
  usage: "reboot",
  category: "Administrator"
}

exports.aliases = ["restart"]

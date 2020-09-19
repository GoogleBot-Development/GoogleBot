const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");

exports.run = async (client, message, args) => {
  const results = await client.shard.fetchClientValues('guilds.cache.size')

  let shardCount = []
  results.forEach((result, r) => shardCount.push(`**Shard ${r + 1}**: ${result.toString()} Servers`))
  let fish = message.guild.shard.id + 1
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor("GoogleBot's Severcount", message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`**Total Shards**: ${results.length}\n**Your Shard ID:** ${fish}\n\n${shardCount.join("\n")}\n\n**${results.reduce((prev, guildCount) => prev + guildCount, 0).toString()}** total servers!`)
  message.channel.send(embed)
}

exports.help = {
  name: "servercount",
  description: "I will show my servercount here, as well as how many servers are on each shard.",
  usage: "servercount",
  category: "Utility"
}

exports.aliases = ["sc", "servers"]

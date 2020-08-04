const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");

exports.run = (client, message, args) => {
client.shard.fetchClientValues('guilds.cache.size')
    .then(result => {
      message.channel.send(`Total Shards: 3\nTotal Servers per Shard:\n${result}`)
    })
    client.shard.fetchClientValues('guilds.cache.size')
	.then(results => {
		message.channel.send(`${results.reduce((prev, guildCount) => prev + guildCount, 0)} total servers!`);
	})
	.catch(console.error);
}

exports.help = {
  name: "servercount",
  description: "I will show my servercount here, as well as how many servers are on each shard.",
  usage: "servercount",
  category: "Utility"
}

exports.aliases = ["sc", "servers"]

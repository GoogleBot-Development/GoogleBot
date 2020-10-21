const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");

exports.run = (client, message, args) => {
  let newEmbed = new Discord.MessageEmbed()
  .setAuthor("GoogleBot Updates", message.author.displayAvatarURL({dynamic: true}))
  .setColor("RANDOM")
  .setDescription("Click [here](https://googlebot-updates.glitch.me) to see my updates page!")
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( {format: "png"} ))
  .setTimestamp()
  message.channel.send(newEmbed) 
}

exports.help = {
  name: "new",
  description: "Displays a link to a site where all of my updates are dislpayed!",
  usage: "new",
  category: "Important"
}

exports.aliases = ["news", "updates"]

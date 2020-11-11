const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");

exports.run = (client, message, args) => {
  let newEmbed = new Discord.MessageEmbed()
  .setAuthor("GoogleBot Updates", message.author.displayAvatarURL({dynamic: true}))
  .setColor("RANDOM")
  .setTitle("Click Here To See All Of My Updates")
  .setURl("https://jeydin21.github.io/updates/")
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

const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");


exports.run = (client, message, args) => {
  let supportEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("Click [here](https://discord.gg/y6Zxauk) to join the support server! We do Discord Nitro Classic giveaways at every 1000 servers, so join to be included!")
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( {format: "png"} ))
    .setTimestamp()
    message.channel.send(supportEmbed)
}

exports.help = {
  name: "support",
  description: "Gives an invite to the my support server, also my home!",
  usage: "support",
  category: "Important"
}

exports.aliases = ["server"]

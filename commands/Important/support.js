const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");


exports.run = (client, message, args) => {
  let supportEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Click Here To Join The Support Server")
    .setURL("https://discord.gg/y6Zxauk")
    .setDescription("Click on the link above to join the support server for GoogleBot! We do Discord Nitro Classic giveaways at every 1000 servers, so join to be included! You can get my server count using `g!servercount`!")
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

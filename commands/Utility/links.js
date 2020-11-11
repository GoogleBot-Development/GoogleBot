const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");


exports.run = async (client, message, args) => {
let linksEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("GoogleBot Links", message.author.displayAvatarURL({dynamic: true}))
    .setDescription("**[Bot Invite Link](https://discord.com/oauth2/authorize/?permissions=392256&scope=bot&client_id=721215949088358420)**\n\n**[Support Server Invite Link](https://discord.gg/y6Zxauk)**\n\n**[Discord Bot List](https://top.gg/bot/721215949088358420)**\n\n**[Bot Updates](https://jeydin21.github.io/updates/)**\n\n**[Commands List](https://jeydin21.github.io/commands/)**\n\n**[Our Patreon](https://www.patreon.com/discord_googlebot?fan_landing=true)**")
    .setTimestamp()
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( {format: "png"} ))
    message.channel.send(linksEmbed)
}

exports.help = {
  name: "links",
  description: "Gives all the links related to me!",
  usage: "links",
  category: "Utility"
}

exports.aliases = []

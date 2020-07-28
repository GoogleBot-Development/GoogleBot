const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const yoMamma = require('yo-mamma').default

exports.run = (client, message, args) => {
  let insult = yoMamma();
    let mamaEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${insult}`)
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
    .setTimestamp()
    message.channel.send(mamaEmbed)
}

exports.help = {
  name: "yomama",
  description: "Responds with Yo Mama joke",
  usage: "yomama",
  category: "Fun"
}

exports.aliases = ["mama", "yo mom"]

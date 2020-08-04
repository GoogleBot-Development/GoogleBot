const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const TinyURL = require('tinyurl');

exports.run = (client, message, args) => {
    if(!args[0]) return message.reply("you must provide a link to shorten!")
    var mes = message.content.split(" ").slice(1).join(" ");
    var mes = encodeURI(message.content.split(" ").slice(1).join(" "))
    TinyURL.shorten(mes, function(res) {
      let linksEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`<a:verified:739930427950891150> The link was successfully shortened!\n\n**Shorter Link:** ${res}\n**Original Link:** ${mes}`)
      .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( {format: "png"} ))
      .setTimestamp()
    message.channel.send(linksEmbed)
    })
}

exports.help = {
    name: "shorten",
    description: "I can shorten whatever URL you input!",
    usage: "shorten [link]",
    category: "Utility"
  }
  
exports.aliases = ["tiny"]

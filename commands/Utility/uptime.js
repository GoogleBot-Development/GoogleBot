const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");


exports.run = (client, message, args) => {
  let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    let uptime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      let statsEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor("GoogleBot Uptime", message.author.displayAvatarURL({dynamic: true}))
      .addField("⏰ Uptime",uptime)
      .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( {format: "png"} ))
      .setTimestamp()
      message.channel.send(statsEmbed)
}

exports.help = {
  name: "uptime",
  description: "Displays my uptime!",
  usage: "uptime",
  category: "Utility"
}

exports.aliases = ["up", "time"]

const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");

exports.run = (client, message, args) => {
      var ping = Date.now() - message.createdTimestamp + "ms";
let pingEmbed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setTitle("Pong!")
     .setThumbnail('https://cdn.discordapp.com/attachments/719702469654872154/727779104660652052/image0.png')
     .addField("Bot Latency:", `:hourglass_flowing_sand: ${client.ws.ping}ms`, true)
     .addField("Message Ping:", `:hourglass_flowing_sand: ${ping}`, true)
     .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
     .setTimestamp()
     message.channel.send(pingEmbed)
}

exports.help = {
  name: "ping",
  description: "Displays my ping!",
  usage: "ping",
  category: "Utility"
}

exports.aliases = []

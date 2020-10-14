const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");

exports.run = async (client, message, args) => {
  let msg = await message.channel.send("Getting the ping...")
      var ping = msg.createdTimestamp - message.createdTimestamp + "ms";
let pingEmbed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setTitle("Pong!")
     .setThumbnail('https://cdn.discordapp.com/attachments/719702469654872154/727779104660652052/image0.png')
     .addField("API Ping:", `:hourglass_flowing_sand: ${client.ws.ping}ms`)
     .addField("Message Ping:", `:hourglass_flowing_sand: ${ping}`)
     .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
     .setTimestamp()
     msg.edit(' ', pingEmbed)
}

exports.help = {
  name: "ping",
  description: "Displays my ping!",
  usage: "ping",
  category: "Utility"
}

exports.aliases = ["p"]

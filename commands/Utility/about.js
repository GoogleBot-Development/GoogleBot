const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");


exports.run = async (client, message, args) => {
let aboutEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("About Us")
    .setDescription("GoogleBot is a multipurpose Discord bot capable of memes, search, weather, and jokes.\nGoogleBot is powered by Chaotic Destiny Hosting. Chaotic Destiny Hosting offers free Discord Bot Hosting and much more things. They are generous in their efforts to bring us what we all want most: Free Discord Bot Hosting. Click [here](https://discord.gg/qxbhFX8) to join their server for more info!")
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( {format: "png"} ))
    .setTimestamp()
    message.channel.send(aboutEmbed)
}

exports.help = {
  name: "about",
  description: "Gives information about me!",
  usage: "about",
  category: "Utility"
}

exports.aliases = ["ab", "info"]

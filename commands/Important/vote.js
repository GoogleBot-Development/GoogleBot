const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");


exports.run = (client, message, args) => {
  let supportEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Click Here To Vote For The Bot!")
  .setURL(`https://top.gg/bot/721215949088358420/vote`)
  .setDescription("Consider voting for the bot, it helps us in ways you can't imagine!")
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
  .setTimestamp()
  message.channel.send(supportEmbed)
}

exports.help = {
  name: "vote",
  description: "Gives a link to vote for me on Discord Bot List! Please do, it helps us very much, in ways you can't imagine!",
  usage: "vote",
  category: "Important"
}

exports.aliases = ["rep", "dbl"]

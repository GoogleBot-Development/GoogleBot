const guildSchema = require('../../models/guild.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  let guild = message.guild;
  guildSchema.findOne({id: guild.id}, (err, res) => {
  
  let prefix = args.join(" ")
  
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`<a:checkmark:736406591275794583> The prefix for this server has been set to **${prefix}**!`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL({dynamic: true}))
  message.channel.send(moneyEmbed)
  guildSchema.updateOne({id: guild.id}, {'prefix': prefix}, function(err, res) {if (err) console.log(err )})
})
}

exports.help = {
  name: "prefix",
  description: "Changes the prefix for your server!",
  usage: "prefix [prefix]",
  category: "Important"
}

exports.aliases = []

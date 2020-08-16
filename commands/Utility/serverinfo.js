const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const dateformat = require('dateformat')


exports.run = (client, message, args, guild) => {
  let roles = message.guild.roles.cache.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => `<@&${role.id}>`); 
  let pie = message.guild.roles.cache.size
if (roles.length === 0) roles = ["No Roles"]
if (roles.length > 30) roles = ["This server has too many roles for me to display!"]

let emojis = message.guild.emojis.cache.array()
let chicken = message.guild.emojis.cache.size
if (emojis.length === 0) emojis = ["No Emojis"], chicken = ["0"]
if (emojis.length > 70) emojis = ["This server has too many emojis for me to display!"]

let channels = message.guild.channels.cache.size - message.guild.channels.cache.filter(channel => channel.type == "category").size

let bots = message.guild.members.cache.filter(member => member.user.bot).size
let users = message.guild.memberCount - bots
  let serverinfoEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Server Info")
    .setThumbnail(message.guild.iconURL( { format: "png" } ))
    .setAuthor(`${message.guild.name}'s Info`, message.author.displayAvatarURL( { format: "png" } ))
    .addField("Server Name", message.guild.name, true)
    .addField("Server Owner", `<@!${message.guild.owner.id}>`, true)
    .addField("\u200b", "\u200b", true)
    .addField("Server ID", message.guild.id, true)
    .addField("Server Created", require('dateformat')(message.guild.createdAt, "mmmm d, yyyy"), true)
    .addField("\u200b", "\u200b", true)
    .addField(`Member Count - (${message.guild.memberCount})`, `${message.guild.members.cache.filter(member => member.user.bot).size} bots, ${users} users`, true)
    .addField(`Channel Count - (${channels})`, `${message.guild.channels.cache.filter(channel => channel.type == "text").size} text, ${message.guild.channels.cache.filter(channel => channel.type == "voice").size} voice, ${message.guild.channels.cache.filter(channel => channel.type == "news").size} annoucnement, ${message.guild.channels.cache.filter(channel => channel.type == "store").size} store`, true)
    .addField(`Roles - (${pie})`, roles.join(", "))
    .addField(`Emojis - (${chicken})`, emojis.join(", "))
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
    .setTimestamp()
    message.channel.send(serverinfoEmbed)
}

exports.help = {
  name: "serverinfo",
  description: "I can get the serverinfo of the server you use this command in!",
  usage: "serverinfo",
  category: "Utility"
}

exports.aliases = ["si"]

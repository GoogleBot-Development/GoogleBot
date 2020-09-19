const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const dateformat = require('dateformat')


exports.run = (client, message, args, guild) => {
  let roles = message.guild.roles.cache.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => `<@&${role.id}>`); 
  let pie = message.guild.roles.cache.size
  let ahaha = [`This server is on Shard ${message.guild.shard.id + 1}!`]
if (roles.length === 0) roles = ["No Roles"]
if (roles.length > 30) roles = ["This server has too many roles for me to display!"]

let emojis = message.guild.emojis.cache.array()
let chicken = message.guild.emojis.cache.size
if (emojis.length === 0) emojis = ["No Emojis"], chicken = ["0"]
if (emojis.length > 20) emojis = ["This server has too many emojis for me to display!"]

let channels = message.guild.channels.cache.size - message.guild.channels.cache.filter(channel => channel.type == "category").size

let bots = message.guild.members.cache.filter(member => member.user.bot).size
let users = message.guild.memberCount - bots
  let serverinfoEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.guild.iconURL( { dynamic: true} ))
    .setAuthor(`${message.guild.name}'s Info`, message.author.displayAvatarURL( {dynamic: true} ))
    .addField(":card_index: Server Name", message.guild.name, true)
    .addField(":crown: Server Owner", `<@!${message.guild.owner.id}>`, true)
    .addField("\u200b", "\u200b", true)
    .addField(":id: Server ID", message.guild.id, true)
    .addField(":calendar_spiral: Server Created", require('dateformat')(message.guild.createdAt, "mmmm d, yyyy"), true)
    .addField("\u200b", "\u200b", true)
    .addField(`:busts_in_silhouette: Member Count - (${message.guild.memberCount})`, `${message.guild.members.cache.filter(member => member.user.bot).size} bots, ${users} users`, true)
    .addField(`:scroll: Channel Count - (${channels})`, `${message.guild.channels.cache.filter(channel => channel.type == "text").size} text, ${message.guild.channels.cache.filter(channel => channel.type == "voice").size} voice, ${message.guild.channels.cache.filter(channel => channel.type == "news").size} annoucnement, ${message.guild.channels.cache.filter(channel => channel.type == "store").size} store`, true)
    .addField(`:ice_cube: Shard ID`, ahaha)
    .addField(`:page_facing_up: Roles - (${pie})`, roles.join(", "))
    .addField(`:smile: Emojis - (${chicken})`, emojis.join(", "))
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

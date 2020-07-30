const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const dateformat = require('dateformat')


exports.run = (client, message, args, guild) => {
  let roles = message.guild.roles.cache.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => `<@&${role.id}>`); 
if (roles.length === 0) roles = ["No Roles"]
if (roles.length > 30) roles = ["This server has too many roles for me to display!"]
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
    .addField("Member Count", message.guild.memberCount, true)
    .addField("Channel Count", message.guild.channels.cache.size, true)
    .addField("Roles", roles.join(", "))
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

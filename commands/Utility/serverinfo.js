const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");

exports.run = (client, message, args) => {
  let serverinfoEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Server Info")
    .setThumbnail(message.guild.iconURL( { format: "png" } ))
    .setAuthor(`${message.guild.name}'s Info`, message.author.displayAvatarURL( { format: "png" } ))
    .addField("**Server Name:**", message.guild.name)
    .addField("**Server Owner**", `<@!${message.guild.owner.id}>`)
    .addField("**Server ID:**", message.guild.id)
    .addField("**Creation Date:**", message.guild.createdAt)
    .addField("**Member Count:**", message.guild.memberCount)
    .addField("**Role Count:**", message.guild.roles.cache.size)
    .addField("**Channel Count:**", message.guild.channels.cache.size)
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

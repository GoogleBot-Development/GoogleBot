const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");


exports.run = (client, message, args) => {
    let errorEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`**${message.author.username}**, please give me something to search!`)
  if(!args[0]) return message.channel.send(errorEmbed);
  
  let search = args.join('+');
  let query = args.join(' ');
  
  let googleEmbed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle(`Google Search: ${query}`)
      .setURL(`https://www.google.com/search?safe=active&q=${search}`)
      .setDescription('Click on the link above to view your Google Search Results!')
      .setAuthor(`${message.author.username}'s Google Search Results`, message.author.displayAvatarURL({dynamic: true}))
      .setTimestamp()
      .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL({dynamic: true}))
      message.channel.send(googleEmbed)
}

exports.help = {
  name: "google",
  description: "Gives me something to search!",
  usage: "google [query]",
  category: "Search"
}

exports.aliases = ['search']

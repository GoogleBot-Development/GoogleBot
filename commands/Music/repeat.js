const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");

exports.run = async (client, message, args) => {
  let referEmbed = new Discord.MessageEmbed()
  .setColor("RED")
  .setAuthor("Music Has Been Moved to GoogleMusic", message.author.displayAvatarURL({dynamic: true}), "https://top.gg/bot/778028895600377876")
  .setDescription("Hello! We are sad to inform you that the music commands have been moved to our new project, GoogleMusic, which is capable of search YouTube to play music into your server! We have commands that are usually premium-restricted on other bots that are free for everyone to use! You can view GoogleMusic's top.gg's page by clicking on the link above.")
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
  message.channel.send(referEmbed)
}

  exports.help = {
  name: "repeat",
  description: "Music has been moved",
  usage: "repeat [song/queue/off]",
  category: "Music"
}

exports.aliases = []

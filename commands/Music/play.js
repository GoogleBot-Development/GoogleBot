const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  let referEmbed = new Discord.MessageEmbed()
  .setColor("RED")
  .setAuthor("Music Has Been Moved to GoogleMusic", message.author.displayAvatarURL({dynamic: true}), "https://top.gg/bot/778028895600377876")
  .setDescription("Hello! We are sad to inform you that the music commands have been moved to our new project, GoogleMusic, which is capable of search YouTube to play music into your server! We have commands that are usually premium-restricted on other bots that are free for everyone to use! You can view GoogleMusic's top.gg's page by clicking on the link above.")
  .setTimestamp()
  message.channel.send(referEmbed)
}

exports.help = {
  name: "play",
  description: "Music has been moved",
  usage: "play [query]",
  category: "Music"
}

exports.aliases = []

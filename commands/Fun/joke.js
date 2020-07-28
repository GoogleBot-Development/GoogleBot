const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const giveMeAJoke = require('give-me-a-joke')

exports.run = (client, message, args) => {
  giveMeAJoke.getRandomDadJoke(function(joke){
      let jokeEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(joke)
      .setTimestamp()
      .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
      message.channel.send(jokeEmbed)
    })
}

exports.help = {
  name: "joke",
  description: "Responds with a joke!",
  usage: "joke",
  category: "Fun"
}

exports.aliases = []

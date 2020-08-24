const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");


exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || client.users.cache.get(args[0])  
    if(!user) return message.reply('you must mention someone to kill!')
    let killGifs = ["https://i.imgur.com/4krZzOH.gif",
                  "https://media.giphy.com/media/1Bgr0VaRnx3pCZbaJa/giphy.gif",
                  "http://i.imgur.com/MXRoi1L.gif",
                  "https://i.imgur.com/LQknzjF.gif",
                  "https://i.imgur.com/AnDKb7E.gif",
				          "https://media.giphy.com/media/W7o5wwiAGY0lG/giphy.gif",
                  "https://media.giphy.com/media/QAEtKq0Vuu4la/giphy.gif"]
 
      let embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username} killed someone!`, message.author.displayAvatarURL({dynamic: true}))
    .setColor("RANDOM")
    .setDescription('**<@!'+ message.author.id +'> killed <@!'+ user.id +'>!**')
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()
    .setImage(killGifs[Math.floor(Math.random() * killGifs.length)])
    message.channel.send(embed);  
}

exports.help = {
  name: "kill",
  description: "Kills the mentioned user",
  usage: "kill [@user]",
  category: "Actions"
}

exports.aliases = []

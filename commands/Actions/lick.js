const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");


exports.run = (client, message, args) => {
  let lickGifs = ["https://media1.tenor.com/images/6b701503b0e5ea725b0b3fdf6824d390/tenor.gif",
               "https://media1.tenor.com/images/fc0ef2ba03d82af0cbd6c5815c3c83d5/tenor.gif",
               "https://i.imgur.com/YG4i71E.gif",
               "https://media.giphy.com/media/x4P8TaYhGn4FW/giphy.gif",
               "https://i.imgur.com/Pv6QJnJ.gif",
               "https://i.pinimg.com/originals/1f/b5/91/1fb591831adc95978bd8b6529e6e4d66.gif",
              "https://i.kym-cdn.com/photos/images/original/000/995/417/60f.gif",
              "https://media.giphy.com/media/11o44A5ZoR4cZq/giphy.gif",
              "https://thumbs.gfycat.com/MeanInfiniteCottonmouth-size_restricted.gif",
              "https://uploads.disquscdn.com/images/ac6e62bd692ad3ec808cef2821c243518ffcd053450e29777ecc81893aeda703.gif",
              "https://i.chzbgr.com/full/8585898496/hBE85D3CD/",
              "https://thumbs.gfycat.com/PlayfulEvilAsiaticlesserfreshwaterclam-size_restricted.gif",
              "https://media3.giphy.com/media/qWAvh9GmlryEg/giphy.gif",
              "https://i.pinimg.com/originals/6c/d0/68/6cd068418b74ab0808009e692a370d9e.gif",
              "https://media1.tenor.com/images/f0a7f04a7bc32029cc1273d06b93237f/tenor.gif",
              "https://i.gifer.com/3nkA.gif",]
                let user = message.mentions.users.first();  
                if(!user) return message.reply('you must mention someone to lick!')
                let embed = new Discord.MessageEmbed()
                .setAuthor(`${message.author.username} licked someone!`, message.author.displayAvatarURL({format: "png"}))
                .setColor("RANDOM")
                .setDescription('**<@!'+ message.author.id +'> licked <@!'+ user.id +'>!**')
                .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( {format: "png"} ))
                .setTimestamp()
                .setImage(lickGifs[Math.floor(Math.random() * lickGifs.length)])
                message.channel.send(embed); 
}

exports.help = {
  name: "lick",
  description: "Licks the mentioned user",
  usage: "lick [@user]",
  category: "Actions"
}

exports.aliases = []

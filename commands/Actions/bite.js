const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");


exports.run = (client, message, args) => {
  let biteGifs = ["https://media.giphy.com/media/fhkRUj3BWmMnu/giphy.gif",
                "https://thumbs.gfycat.com/UniqueThickGalapagosalbatross-small.gif",
                "https://media1.tenor.com/images/a832fbb94fc69c07c96ea34c61568e76/tenor.gif",
                "https://66.media.tumblr.com/02f5ba904dc9d496c4b8f26b888c600a/tumblr_p9q47d4wNo1xuvoi1o1_400.gif",
                "https://pa1.narvii.com/6206/ede2a18b479c1a4b95bfa444559a1d3b4b3fcb0b_hq.gif",
                "https://66.media.tumblr.com/206dbf12d5a0e790796057d34f2f633c/tumblr_o0lb77IGsn1u9u1mvo1_400.gif",
                "https://i.pinimg.com/originals/95/f2/65/95f26583cf78588b64cb7bb98a6fb69d.gif",
                "https://media1.tenor.com/images/6b42070f19e228d7a4ed76d4b35672cd/tenor.gif",
                "https://gifimage.net/wp-content/uploads/2017/09/anime-bite-gif-4.gif",
                "http://pa1.narvii.com/6045/a9bb6d864ebe7e01ed647b78fc652f15116716c4_hq.gif",
                "http://pa1.narvii.com/6045/403dcd5f8d1d71c32ee4c5427204bc8f00646183_hq.gif",
                "https://i.gifer.com/Bto7.gif",
                "https://media1.tenor.com/images/b917529c89893ca5a281c8d282192248/tenor.gif",
                "https://66.media.tumblr.com/903ab7ed344fc2dc50ec6b89fcdf278b/tumblr_oqb558oc1G1ujwg5zo1_500.gif",
            "https://image.myanimelist.net/ui/4Uqv6c4qu88OmaYh1hBUOfARoB4-wUoSq7QG4TSsvkaO2-NsvLJ-zHHTMUyE7Vz6"
                ]
                let user = message.mentions.users.first();  
                if(!user) return message.reply('you must mention someone to bite!')
                let embed = new Discord.MessageEmbed()
                .setAuthor(`${message.author.username} bited someone!`, message.author.displayAvatarURL({format: "png"}))
                .setColor("RANDOM")
                .setDescription('**<@!'+ message.author.id +'> bited <@!'+ user.id +'>!**')
                .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( {format: "png"} ))
                .setTimestamp()
                .setImage(biteGifs[Math.floor(Math.random() * biteGifs.length)])
                message.channel.send(embed); 
}

exports.help = {
  name: "bite",
  description: "Bites the mentioned user",
  usage: "bite [@user]",
  category: "Actions"
}

exports.aliases = []

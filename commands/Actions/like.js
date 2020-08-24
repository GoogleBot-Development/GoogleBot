const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");


exports.run = (client, message, args) => {
  let likeGifs = ["https://cdn.discordapp.com/attachments/585624709312413696/585646175667879936/1.gif",
                "https://cdn.discordapp.com/attachments/585624709312413696/585646198434562048/2.gif",
                "https://cdn.discordapp.com/attachments/585624709312413696/585646211931963414/3.gif",
                "https://cdn.discordapp.com/attachments/585624709312413696/585646228260388918/4.gif",
                "https://cdn.discordapp.com/attachments/585624709312413696/585646253862551553/5.gif",
                "https://cdn.discordapp.com/attachments/585624709312413696/585646270262149130/6.gif",
                "https://cdn.discordapp.com/attachments/585624709312413696/585646284510199825/7.gif",
                "https://cdn.discordapp.com/attachments/585624709312413696/585646302516346909/8.gif",
                "https://cdn.discordapp.com/attachments/585624709312413696/585646323177488385/9.gif",
                "https://cdn.discordapp.com/attachments/585624709312413696/585646348158763038/10.gif",
                "https://media1.tenor.com/images/9b0d7ce98ac83c415ab15db119a07b9f/tenor.gif",
                ]
                let user = message.mentions.users.first() || client.users.cache.get(args[0])
                if(!user) return message.reply('you must mention someone to like!')
                let embed = new Discord.MessageEmbed()
                .setAuthor(`${message.author.username} liked someone!`, message.author.displayAvatarURL({dynamic: true}))
                .setColor("RANDOM")
                .setDescription('**<@!'+ message.author.id +'> liked <@!'+ user.id +'>!**')
                .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL({dynamic: true}))
                .setTimestamp()
                .setImage(likeGifs[Math.floor(Math.random() * likeGifs.length)])
                message.channel.send(embed); 
}

exports.help = {
  name: "like",
  description: "Gives a like to the mentioned user",
  usage: "like [@user]",
  category: "Actions"
}

exports.aliases = []

const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");


exports.run = (client, message, args) => {
  let user = message.mentions.users.first();  
    if(!user) return message.reply('you must mention someone to punch!')
    let punchGifs = ["https://media.giphy.com/media/3ylkxB18Ihc3u/giphy.gif",
                  "https://media.giphy.com/media/1Bgr0VaRnx3pCZbaJa/giphy.gif",
                  "https://media.giphy.com/media/CUfY9iiyxyx56/giphy.gif",
                  "https://media.giphy.com/media/BKRECiW08vdjG/giphy.gif",
                 "https://thumbs.gfycat.com/ImpeccableAdeptKentrosaurus-small.gif",
                  "https://media1.tenor.com/images/92f4595d3f6ac39b6c175eb3d454fec2/tenor.gif",
                  "https://thumbs.gfycat.com/BitesizedEnragedAfricanaugurbuzzard-size_restricted.gif",
                  "https://i.kym-cdn.com/photos/images/original/000/641/427/824.gif",
                  "https://media1.tenor.com/images/7a582f32ef2ed527c0f113f81a696ae3/tenor.gif",
                  "https://i.pinimg.com/originals/bc/96/17/bc9617a2460e4640fcd9cf474bea2c10.gif",
                  "https://media1.tenor.com/images/0e4dc717bb99433c6ef3089f418dc94a/tenor.gif",
                  "https://media1.tenor.com/images/a413eca2b20907df0c7f5ec62373fd46/tenor.gif",
                  "https://img.memecdn.com/Damn_o_106177.gif",
                  "http://37.media.tumblr.com/9fef5e15bc2a52ec35619016255b3976/tumblr_mr8efms8bn1rjx5cmo1_500.gif",
                  "https://i.pinimg.com/originals/8d/50/60/8d50607e59db86b5afcc21304194ba57.gif",
                  "https://cdn.myanimelist.net/s/common/uploaded_files/1479268388-e026a31596b92834f423c09b5d47faf1.gif",
                  "https://thumbs.gfycat.com/SadUglyDassie-size_restricted.gif",
                  "https://giffiles.alphacoders.com/170/170222.gif",
                  "http://orig11.deviantart.net/9e80/f/2011/345/2/0/lucy_punch_by_zombiegirl01-d4isxbn.gif",
                  "http://nights4saturn.files.wordpress.com/2011/11/dokki_doki_anime_punch.gif",
                  "http://24.media.tumblr.com/79bfa123a9477f5839b946865a88ee75/tumblr_mo0gk4TlKe1qh1al8o1_500.gif",
                  "https://cdn56.picsart.com/170744072000202.gif",
                  "https://www.cinepremiere.com.mx/wp-content/uploads/2019/04/gigante.gif",
                  "https://giffiles.alphacoders.com/128/12871.gif",
                  "https://thumbs.gfycat.com/PoisedOblongKronosaurus-size_restricted.gif",
                  "https://media1.tenor.com/images/cc7827259a000574a368967525605d2d/tenor.gif",
                  "https://data.whicdn.com/images/286613675/original.gif",
                  "http://2.bp.blogspot.com/-tQN1__vqCCU/Vqzw2ewELAI/AAAAAAAAAo4/-oMeUehIjjY/s1600/one%2Bpunch%2Bman%2Bsaitama%2Bvs%2Bvaccine%2Bman1_gifs.gif",
                  "https://media1.tenor.com/images/965fabbfcdc09ee0eb4d697e25509f34/tenor.gif",
                  "https://media.boingboing.net/wp-content/uploads/2015/06/boxing.gif",
                  "https://giffiles.alphacoders.com/128/12879.gif",
                  "https://thumbs.gfycat.com/BeautifulGregariousHare-size_restricted.gif",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST0WRA4V1v8Wgq7yxXQOscXbQjU6gfUbmQj4RGrH2k1nNzjJSU",
                  "https://thumbs.gfycat.com/ConcernedVillainousAnemoneshrimp-small.gif",
                 ]
                 let embed = new Discord.MessageEmbed()
  .setAuthor(`${message.author.username} punched someone!`, message.author.displayAvatarURL({format: "png"}))
  .setColor("RANDOM")
  .setDescription('**<@!'+ message.author.id +'> punched <@!'+ user.id +'>!**')
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( {format: "png"} ))
  .setTimestamp()
  .setImage(punchGifs[Math.floor(Math.random() * punchGifs.length)])
  message.channel.send(embed); 
}

exports.help = {
  name: "punch",
  description: "Punches the mentioned user",
  usage: "punch <user>",
  category: "Actions"
}

exports.aliases = []

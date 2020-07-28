const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");


exports.run = (client, message, args) => {
  let search = args.join('+');
  let query = args.join(' ');
      if(!args[0]) return message.reply("please give me something to search!");
      let youtubeEmbed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle(`YouTube Search: ${query}`)
      .setURL(`https://www.youtube.com/results?search_query=${search}`)
      .setDescription('Click on the link above to view your YouTube Search Results! If you don\'t put anything, then it will not put anything.')
      .setAuthor(`${message.author.username}'s YouTube Search Results`, message.author.displayAvatarURL( { format: "png" } ))
      .setTimestamp()
      .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
      message.channel.send(youtubeEmbed)
}

exports.help = {
  name: "youtube",
  description: "I will search on YouTube for your search.",
  usage: "youtube <query>",
  category: "Google"
}

exports.aliases = ["yt"]

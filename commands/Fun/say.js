const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");

exports.run = (client, message, args) => {
  let query = args.join(' ');
  if(!args[0]) return message.reply("Please put something for me to say!!");
      let sayEmbed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(`${query}`)
      .setAuthor(`${message.author.username} says:`, message.author.displayAvatarURL({dynamic: true}))
      .setTimestamp()
      .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL({dynamic: true}))
      message.channel.send(sayEmbed)
}

exports.help = {
  name: "say",
  description: "Lets the bot say whatever you want",
  usage: "say [text]",
  category: "Fun"
}

exports.aliases = ["speak", "repeat"]

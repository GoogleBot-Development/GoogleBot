const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");


exports.run = async (client, message, args) => {
  if(!args[0]) return message.reply("Please enter a question to make your poll!");
  let query = args.join(' ');
  
      let pollEmbed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(`**${query}**\n\nReact with the emojis to cast your vote!`)
      .setAuthor(`${message.author.username}'s poll:`, message.author.displayAvatarURL({dynamic: true}))
      .setTimestamp()
      .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
      let msg = await message.channel.send(pollEmbed);
      await msg.react('a:upvote:724448478343725108');
      await msg.react('a:downvote:724448462933852191');
      message.delete().catch(O_o=>{});
}

exports.help = {
  name: "poll",
  description: "I can make a quickpoll for you!",
  usage: "poll [question]",
  category: "Utility"
}

exports.aliases = ["quickpoll", "fastpoll"]

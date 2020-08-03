const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");


exports.run = (client, message, args) => {
   if(!args[0]) return message.reply("Please enter a full question!");
  let question = args.join(' ');
   let replies = [ "As I see it, yes.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "It is certain.", "It is decidedly so.", "Most likely.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Outlook good.", "Reply hazy, try again.", "Signs point to yes.", "Very doubtful", "Without a doubt.", "Yes.", "Yes - definitely.", "You may rely on it." ];

   let result = Math.floor((Math.random() * replies.length));

   let ballembed = new Discord.MessageEmbed()

   .setAuthor(`${message.author.username}'s 8ball:`, message.author.displayAvatarURL( { format: "png" } ))
   .setColor("RANDOM")
   .addField("Question", question)
   .addField("Answer", replies[result])
   .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
   .setTimestamp()
   message.channel.send(ballembed)
}

exports.help = {
  name: "8ball",
  description: "Gives a response to a question",
  usage: "8ball [question]",
  category: "Fun"
}

exports.aliases = ["8b"]

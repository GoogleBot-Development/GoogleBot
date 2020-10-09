const Discord = require('discord.js');
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");

exports.run = (client, message, args, funcs) => {
  try {
    let first = args[0];
    if (!first) return funcs.reply('you must enter the first object to ship!')
    let second = args[1];
    if (!second) return funcs.reply('you must enter the second object to ship!')
    let percentage = Math.floor(Math.random() * 100);
    let shipEmbed = new Discord.MessageEmbed()
      shipEmbed.setTimestamp()
      shipEmbed.setAuthor("❤️ Love Calculator ❤️", message.author.displayAvatarURL({dynamic: true}))
      shipEmbed.setDescription(`:heart: \`${first}\` loves \`${second}\`, \`${percentage}\`%! :heart:`)
      shipEmbed.setColor("RANDOM");
      shipEmbed.setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL({dynamic: true}))
    message.channel.send(shipEmbed);
  } catch (e) {
    console.error;
    message.channel.send(`Oh no, an error occurred!\n${e.message}`);
  }
};

exports.help = {
    name: "love",
    description: "Sees how much someone likes the other!",
    usage: "love [person 1] [person 2]",
    category: "Fun"
  }
  
  exports.aliases = ["combine", "rate", "ship"]

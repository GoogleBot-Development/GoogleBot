const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");

exports.run = (client, message, args) => {
    if(!args[0]) return message.reply("what do you want me to green text?")
    let text = args.join(` `);
    let greenEmbed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`\`\`\`css\n${text}\n\`\`\``)
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()
    message.channel.send(greenEmbed)
}

exports.help = {
    name: "greentext",
    description: "Makes whatever you type green!",
    usage: "greentext [text]",
    category: "Fun"
  }
  
  exports.aliases = ["green"]

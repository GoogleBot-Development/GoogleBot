const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");

exports.run = (client, message, args) => {
  let helpembed = new Discord.MessageEmbed()
    .setTitle("Click Me To Invite GoogleBot To Your Server!")
    .setURL(`https://discordapp.com/oauth2/authorize/?permissions=392256&scope=bot&client_id=${client.user.id}`)
    .setDescription("Consider inviting our bot to a server, it helps us in ways you can't imagine!")
    .setTimestamp()
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ));
    message.channel.send(helpembed)
}

exports.help = {
  name: "invite",
  description: "Gives a link to invite me to your server!",
  usage: "invite",
  category: "Important"
}

exports.aliases = ["join"]

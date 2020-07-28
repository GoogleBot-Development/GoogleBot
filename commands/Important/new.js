const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");

exports.run = (client, message, args) => {
  let newEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/719702506791501886/727780775512113211/image0.png')
    .setAuthor("GoogleBot Updates", message.author.displayAvatarURL( { format: "png" } ))
    .setTitle(`${name} ${mainVersion} New Features`)
    .setDescription(`Minor Updates in v${mainVersion}`)
    .addField("Version 2.0.0 Update:", "Added the legendary `g!meme` command | Posts memes from r/memes.")
    .addField("Version 2.0.5 Update:", "Added a new section: `Action Commands`\nAdded `g!kill <@member>` | Kills the mentions member\nAdded `g!waste <@member>` | Wastes the mentioned member\nAdded `g!punch <@member>` | Punches the mentions member\nAdded `g!like <@member>` | Likes the mentioned member\nAdded `g!lick <@member>` | Licks the mentioned member\nAdded `g!bite <@member>` | Bites the mentioned member\nAdded `g!stats` | Shows GoogleBot's stats")
    .addField("Version 2.1 Update:", "Improved the `userinfo` command! You can now ping the selected user to get their userinfo, or just not ping anyone and get your *own* info!")
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
    .setTimestamp()
    message.channel.send(newEmbed)
}

exports.help = {
  name: "new",
  description: "See all of my latest updates I have pushed!",
  usage: "new",
  category: "Important"
}

exports.aliases = ['news', 'updates']

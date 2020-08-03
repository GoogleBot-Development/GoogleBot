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
    .addField("Version 2.5 Update:", "Added `g!math <equation>` | I can do some simple math equations\nAdded `g!rps <rock/paper/scissors>` | You can play Rock Paper Scissors with me!\nAdded `g!greentext <text>` | I can make your text green!/nAdded `g!ship <object 1> <object 2>` | I can ship two things together with a percent\nAdded `g!advice` | I can give you some advice, if you ever need some.")
    .addField("Version 2.6 Update:", "Added `g!morse <text>` | I can now translate your text into Morse Code! Only supports letters and numbers in the English language")
    .addField("Version 2.6.5 Update:", "Updated the `g!morse` command so that you can now input your Morse Code into it, and it will translate back to English! Also added more characters on the keyboard to work with.")
    .addField("Version 2.7 Update:", "Added `g!shorten` | I can shorten your URL into a small one!")
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

 const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json")

exports.run = (client, message, args) => {
  let newEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/719702506791501886/727780775512113211/image0.png')
    .setAuthor("GoogleBot Updates", message.author.displayAvatarURL( { format: "png" } ))
    .setTitle(`${name} ${mainVersion} New Features`)
    .setDescription(`Minor Updates in v${mainVersion}`)
    .addField("**Version 3.0 Update:**", "The Economy Update!\nAdded new section: `Economy`\nAdded `g!balance` | Gets your GoogleCoin balance\nAdded `g!beg` | Beg for GoogleCoins\nAdded `g!daily` | Get your daily bonus of GoogleCoins!\nAdded `g!deposit` | Deposit your GoogleCoins into your bank where it will be safe\nAdded `g!fish` | Go fishing!\nAdded `g!harvest` | Harvest your farm for wheat!\nAdded `g!inventory` | Gets your inventory\nAdded `g!pay` | Pay someone in GoogleCoins!\nAdded `g!roulette` | Bet your GoogleCoins on the Roulette table!\nAdded `g!sell` | Sell your items for GoogleCoins!\nAdded `g!slots` | Take your chances at the slot machiene!\nAdded `g!weekly` | Get your weekly bonus of GoogleCoins!\nAdded `g!withdraw` | Withdraw your GoogleCoins into your wallet where you can spend them!\nAdded `g!work` | Work hard and you'll get some GoogleCoins!")
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

const Discord = require('discord.js')
const db = require('quick.db')
var economy = new db.table('economy')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");

exports.run = async (bot, message, args) => {
    
    let user = message.author;

    if(args[0] == 'fish') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`:x: You don't have any Fish to sell!`)
        .setTimestamp()
        .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

        let fish = await economy.get(`fish_${user.id}`)

        let chickenEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`:x: You can't sell that amount of Fish!`)
        .setTimestamp()
        .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

        if (fish < args[1]) return message.channel.send(chickenEmbed)

        let argsEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(":x: You must put a number of Fish to sell!")
        .setTimestamp()
        .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

        if (!args[1]) return message.channel.send(argsEmbed)
        

        if (fish < 1) return message.channel.send(Embed2)

        if (isNaN(args[1])) {
            let nanEmbed = new Discord.MessageEmbed()
              .setColor("RED")
              .setDescription(":x: That is not a number!")
              .setTimestamp()
              .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
              return message.channel.send(nanEmbed)
          }

        let money = args[1]*100
       
        economy.get(`fish_${user.id}`)
        economy.subtract(`fish_${user.id}`, args[1])

        let Embed3 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<a:checkmark:736406591275794583> You sold **${args[1]}** Fish For **${money}** GoogleCoins!`)
        .setTimestamp()
        .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

        economy.add(`wallet_${user.id}`, money)
        message.channel.send(Embed3)
    } else if(args[0] == 'wheat') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:x: You don't have any Wheat to sell!`)
        .setTimestamp()
        .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

       let wheat = await economy.get(`wheat_${user.id}`)

       let chickenEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`:x: You can't sell that amount of Wheat!`)
        .setTimestamp()
        .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

        if (wheat < args[1]) return message.channel.send(chickenEmbed)

        let argsEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(":x: You must put a number of Wheat to sell!")
        .setTimestamp()
        .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

        if (!args[1]) return message.channel.send(argsEmbed)

       if (isNaN(args[1])) {
        let nanEmbed = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription(":x: That is not a number!")
          .setTimestamp()
          .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
          return message.channel.send(nanEmbed)
      }

       let money = args[1]*10

        if (wheat < 1) return message.channel.send(Embed2)
       
        economy.get(`wheat_${user.id}`)
        economy.subtract(`wheat_${user.id}`, args[1])

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<a:checkmark:736406591275794583> You sold **${args[1]}** Wheat for **${money}** GoogleCoins!`)
        .setTimestamp()
        .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

        economy.add(`wallet_${user.id}`, money)
        message.channel.send(Embed3)
    } let sEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(":x: Please choose a valid option to sell! Sell options are: `fish`, `wheat`.")
    .setTimestamp()
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
    if(!args[0]) return message.channel.send(sEmbed)

}

exports.help = {
    name: "sell",
    description: "Sell your things for GoogleCoins!",
    usage: "sell [object] [# of objects]",
    category: "Economy"
  }
  
exports.aliases = []

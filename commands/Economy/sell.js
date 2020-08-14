const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const userSchema = require('../../models/user.js')

exports.run = async (bot, message, args) => {
    
    let user = message.author;
  userSchema.findOne({id: user.id}, (err, res) => {
    if (!res) res = require('../../functions/start.js')(user);

    if(args[0] == 'fish') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`:x: You don't have any Fish to sell!`)
        .setTimestamp()
        .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

        let fish = res.fish

        let chickenEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`:x: You can't sell that amount of Fish!`)
        .setTimestamp()
        .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

        if (fish < Number(args[1])) return message.channel.send(chickenEmbed)

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
        userSchema.updateOne({id: message.author.id}, {fish: res.fish - Number(args[1]), 'money.wallet': res.money.wallet + money}, function(err, res) {if (err) console.log(err )})


        let Embed3 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<a:checkmark:736406591275794583> You sold **${args[1]}** Fish For **${money}** GoogleCoins!`)
        .setTimestamp()
        .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

        message.channel.send(Embed3)
    } else if(args[0] == 'wheat') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:x: You don't have any Wheat to sell!`)
        .setTimestamp()
        .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

       let wheat = res.wheat

       let chickenEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`:x: You can't sell that amount of Wheat!`)
        .setTimestamp()
        .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

        if (wheat < Number(args[1])) return message.channel.send(chickenEmbed)

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
       
        userSchema.updateOne({id: message.author.id}, {wheat: res.wheat - Number(args[1]), 'money.wallet': res.money.wallet + money}, function(err, res) {if (err) console.log(err )})

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<a:checkmark:736406591275794583> You sold **${args[1]}** Wheat for **${money}** GoogleCoins!`)
        .setTimestamp()
        .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

        message.channel.send(Embed3)
    } let sEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(":x: Please choose a valid option to sell! Sell options are: `fish`, `wheat`.")
    .setTimestamp()
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
    if(!args[0]) return message.channel.send(sEmbed)

});
};

exports.help = {
    name: "sell",
    description: "Sell your things for GoogleCoins!",
    usage: "sell [object] [# of objects]",
    category: "Economy"
  }
  
exports.aliases = []

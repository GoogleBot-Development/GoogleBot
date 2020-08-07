const db = require('quick.db')
var economy = new db.table('economy')
const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {

    let user = message.author;
    let author = await economy.get(`work_${user.id}`)

    let timeout = 600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`:x: You have already worked recently\n\nTry again in **${time.minutes}m ${time.seconds}s**. `)
        .setTimestamp()
        .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
        message.channel.send(timeEmbed)
      } else {

        let replies = ['Programmer','Builder','Cashier','Singer','Chief','Mechanic', "Janitor", "YouTuber", "Teacher", "Doctor", "Bus Driver"]

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 80) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<a:checkmark:736406591275794583> You worked as a **${replies[result]}** and earned **${amount}** GoogleCoins!`)
        .setTimestamp()
        .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
        message.channel.send(embed1)
        
        economy.add(`wallet_${user.id}`, amount)
        economy.set(`work_${user.id}`, Date.now())
    };
}

exports.help = {
    name: "work",
    description: "Work hard, and you'll get some GoogleCoins!",
    usage: "work",
    category: "Economy"
  }
  
  exports.aliases = []

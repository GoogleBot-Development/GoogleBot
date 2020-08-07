const Discord = require("discord.js");
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const db = require("quick.db");
var economy = new db.table('economy')
const ms = require("parse-ms");

exports.run = async (client, message, args) => {

  let user = message.author;

  let member = economy.get(`wallet_${user.id}`)
  let member2 = economy.get(`bank_${user.id}`)

  if (args[0] == 'all') {
    let money = await economy.get(`wallet_${user.id}`)
    
    economy.add(`bank_${user.id}`, money)
    economy.subtract(`wallet_${user.id}`, money)

  let embed5 = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`<a:checkmark:736406591275794583> You have deposited all (**${money}**) your GoogleCoins into your bank!`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
  message.channel.send(embed5)
  
  } else {

    let embed2 = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`:x: Specify an amount of GoogleCoins to deposit!`)
    .setTimestamp()
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

    if (!args[0]) {
      return message.channel.send(embed2)
  }

    let nanEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(":x: That is not a number!")
    .setTimestamp()
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
    if (isNaN(args[0])) return message.channel.send(nanEmbed)

  let embed3 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`:x: You can't deposit negative GoogleCoins!`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`:x: You don't have that many GoogleCoins in your wallet!`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

  if (member < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`<a:checkmark:736406591275794583> You have deposited **${args[0]}** GoogleCoins into your bank!`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

  message.channel.send(embed5)
  economy.add(`bank_${user.id}`, args[0])
  economy.subtract(`wallet_${user.id}`, args[0])
  }
}

exports.help = {
    name: "deposit",
    description: "Deposit your GoogleCoins into your bank where it will be safe.",
    usage: "deposit [all/# of coins]",
    category: "Economy"
  }
  
exports.aliases = ["dep"]

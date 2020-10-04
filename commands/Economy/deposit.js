const Discord = require("discord.js");
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const ms = require("parse-ms");
const userSchema = require('../../models/user.js')


exports.run = async (client, message, args) => {

  let user = message.author;
  userSchema.findOne({id: user.id}, (err, res) => {
    if (!res) res =  require('../../functions/start.js')(user);

  let member = res.money.wallet
  let member2 = res.money.bank

  if (args[0] == 'all') {
    let money = res.money.wallet

    userSchema.updateOne({id: user.id}, {'money.wallet': 0, 'money.bank': money + member2}, function(err, res) {if (err) console.log(err )})

  let embed5 = new Discord.MessageEmbed() 
  .setColor("GREEN")
  .setDescription(`<a:checkmark:736406591275794583> You have deposited all (**${money}**) your GoogleCoins into your bank!`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL({dynamic: true}))
  message.channel.send(embed5)
  
  } else {

    let embed2 = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`:x: Specify an amount of GoogleCoins to deposit!`)
    .setTimestamp()
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL({dynamic: true}))

    if (!args[0]) {
      return message.channel.send(embed2)
  }

    let nanEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(":x: That is not a number!")
    .setTimestamp()
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL({dynamic: true}))
    if (isNaN(args[0])) return message.channel.send(nanEmbed)

  let embed3 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`:x: You can't deposit negative GoogleCoins!`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL({dynamic: true}))

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`:x: You don't have that many GoogleCoins in your wallet!`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL({dynamic: true}))

  if (member < Number(args[0])) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`<a:checkmark:736406591275794583> You have deposited **${args[0]}** GoogleCoins into your bank!`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL({dynamic: true}))

  message.channel.send(embed5)
  userSchema.updateOne({id: user.id}, {'money.wallet': res.money.wallet - Number(args[0]), 'money.wallet': res.money.bank + Number(args[0])}, function(err, res) {if (err) console.log(err )})
  }
});
}

exports.help = {
    name: "deposit",
    description: "Deposit your GoogleCoins into your bank where it will be safe.",
    usage: "deposit [all/amount]",
    category: "Economy"
  }
  
exports.aliases = ["dep"]

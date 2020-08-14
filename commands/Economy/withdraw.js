const Discord = require("discord.js");
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const userSchema = require('../../models/user.js')
const ms = require("parse-ms");

exports.run = async (client, message, args) => {

  let user = message.author;
  userSchema.findOne({id: user.id}, (err, res) => {
    if (!res) res = require('../../functions/start.js')(user);


  let member = res.money.wallet
  let member2 = res.money.bank

  if (args[0] == 'all') {
    let money = res.money.bank
    userSchema.updateOne({id: message.author.id}, {'money.wallet': res.money.wallet + money, 'money.bank': res.money.bank - money}, function(err, res) {if (err) console.log(err )})


  let embed5 = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`<a:checkmark:736406591275794583> You have withdrawn all (**${money}**) your GoogleCoins from your bank`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
  message.channel.send(embed5)
  
  } else {

    let embed2 = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`:x: Specify an amount of GoogleCoins to withdraw!`)
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
  .setDescription(`:x: You can't withdraw negative GoogleCoins!`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`:x: You don't have that many GoogleCoins in your bank!`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

  if (member2 < Number(args[0])) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`<a:checkmark:736406591275794583> You have withdrawn **${args[0]}** GoogleCoins from your bank`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

  message.channel.send(embed5)
  userSchema.updateOne({id: message.author.id}, {'money.wallet': res.money.wallet + Number(args[0]), 'money.bank': res.money.bank - Number(args[0])}, function(err, res) {if (err) console.log(err )})

  }
});
};

exports.help = {
    name: "withdraw",
    description: "Withdraw your GoogleCoins into your wallet where you can spend it.",
    usage: "withdraw [all/# of coins]",
    category: "Economy"
  }
  
exports.aliases = ["with"]

const Discord = require("discord.js")
const ms = require("parse-ms");
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const userSchema = require('../../models/user.js')

exports.run = async (client, message, args) => {

  let user = message.mentions.members.first() || client.users.cache.get(args[0])

  if(!user) {
  let embed1 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`:x: Mention someone to pay!`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
  return message.channel.send(embed1)
  }
  userSchema.findOne({id: message.author.id}, (err, author) => {
    userSchema.findOne({id: user.id}, (err, usr) => {
      if (!author) author = require('../../functions/start.js')(user);
      if (!usr) usr = require('../../functions/start.js')(user);

  let userbal = usr.money.wallet

  let member = author.money.wallet

  if(!args[1]) {
  let embed2 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`:x: Specify an amount to pay!`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
  return message.channel.send(embed2)
  }

  if (user.id === message.author.id) {
  let noEmbed = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(":x: You can't pay yourself!")
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
  return message.channel.send(noEmbed)
  }

  if (isNaN(args[1])) {
  let nanEmbed = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(":x: That is not a number!")
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
  return message.channel.send(nanEmbed)
  }

  if (message.content.includes('-')) { 
    let embed3 = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`:x: You can't pay someone negative money!`)
    .setTimestamp()
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
    return message.channel.send(embed3)
  }

  if (member < Number(args[1])) {
    let embed4 = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`:x: You don't have that much money!`)
    .setTimestamp()
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
    return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`<a:checkmark:736406591275794583> You have sent **${args[1]}** GoogleCoins to **${user.user.username}**!`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

  message.channel.send(embed5)
  userSchema.updateOne({id: user.id}, {'money.wallet': usr.money.wallet + Number(args[1])}, function(err, res) {if (err) console.log(err )})
  userSchema.updateOne({id: message.author.id}, {'money.wallet': author.money.wallet - Number(args[1])}, function(err, res) {if (err) console.log(err )})


});
  });
};

exports.help = {
    name: "pay",
    description: "Pay someone in GoogleCoins!",
    usage: "pay [@user] [amount]",
    category: "Economy"
  }
  
exports.aliases = ["share", "gift", "send"]

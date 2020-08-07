const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const db = require("quick.db");
var economy = new db.table('economy')
const ms = require("parse-ms");

exports.run = async (client, message, args) => {

  let user = message.author;

  let timeout = 86400000;
  let amount = 100;

  let daily = await economy.get(`${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`:x: You've already collected your daily reward\n\nCollect it again in **${time.hours}h ${time.minutes}m ${time.seconds}s**.`)
    .setTimestamp()
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`<a:checkmark:736406591275794583> You've collected your daily reward of **${amount}** GoogleCoins!`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
  message.channel.send(moneyEmbed)
  economy.add(`wallet_${user.id}`, amount)
  economy.set(`daily_${user.id}`, Date.now())


  }
}

exports.help = {
  name: "daily",
  description: "Gets your daily bonus of GoogleCoins!",
  usage: "daily",
  category: "Economy"
}

exports.aliases = []

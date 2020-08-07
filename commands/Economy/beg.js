const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const db = require("quick.db");
var economy = new db.table('economy')
const ms = require("parse-ms");

exports.run = async (client, message, args) => {

  let user = message.author;

  let timeout = 45000;
  let amount = Math.floor(Math.random() * 75)

  let beg = await economy.get(`beg_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`:x: You've already begged recently\n\nYou can beg again in **${time.seconds}s**. `)
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
    .setTimestamp()
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`<a:checkmark:736406591275794583> You've begged and received **${amount}** GoogleCoins!`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
  message.channel.send(moneyEmbed)
  economy.add(`wallet_${user.id}`, amount)
  economy.set(`beg_${user.id}`, Date.now())
  }
}

exports.help = {
    name: "beg",
    description: "Beg for GoogleCoins!",
    usage: "beg",
    category: "Economy"
  }
  
exports.aliases = []

const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const db = require("quick.db");
var economy = new db.table('economy')
const ms = require("parse-ms");

exports.run = async (client, message, args) => {

  let user = message.author

  let timeout = 45000;
  let amount = Math.floor(Math.random() * 5) +1;

  let beg = await economy.get(`fishing_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`:x: You've already went fishing recently\n\nYou can fish again in **${time.seconds}s**. `)
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
    .setTimestamp()
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`<a:checkmark:736406591275794583> You went fishing and received **${amount}** Fish!`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
  message.channel.send(moneyEmbed)
  economy.add(`fish_${user.id}`, parseInt(amount))
  economy.set(`fishing_${user.id}`, Date.now())
  }
}

exports.help = {
    name: "fish",
    description: "Go fishing!",
    usage: "fish",
    category: "Economy"
  }
  
exports.aliases = []

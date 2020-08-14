const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const ms = require("parse-ms");
const userSchema = require('../../models/user.js')

exports.run = async (client, message, args) => {

  let user = message.author
  userSchema.findOne({id: user.id}, (err, res) => {
    if (!res) res = require('../../functions/start.js')(user);

  let timeout = 45000;
  let amount = Math.floor(Math.random() * 50) +1;

  let beg = res.times.wheat

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`:x: You've already harvested your farm recently\n\nYou can harvest again in **${time.seconds}s**. `)
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
    .setTimestamp()
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`<a:checkmark:736406591275794583> You went harvesting and received **${amount}** Wheat!`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
  message.channel.send(moneyEmbed)
  userSchema.updateOne({id: user.id}, {wheat: res.wheat + parseInt(amount), 'times.wheat': Date.now()}, function(err, res) {if (err) console.log(err )})
  }
});
}

exports.help = {
    name: "harvest",
    description: "Harvest your farm for wheat!",
    usage: "harvest",
    category: "Economy"
  }
  
exports.aliases = ["gather", "farm"]

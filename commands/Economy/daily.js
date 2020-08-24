const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const userSchema = require('../../models/user.js')
const ms = require("parse-ms");

exports.run = async (client, message, args) => {

  let user = message.author;
  userSchema.findOne({id: user.id}, (err, res) => {
    if (!res) res = require('../../functions/start.js')(user);

  let timeout = 86400000;
  let amount = 100;

  let daily = res.times.daily

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`:x: You've already collected your daily reward\n\nCollect it again in **${time.hours}h ${time.minutes}m ${time.seconds}s**.`)
    .setTimestamp()
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL({dynamic: true}))
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`<a:checkmark:736406591275794583> You've collected your daily reward of **${amount}** GoogleCoins!`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL({dynamic: true}))
  message.channel.send(moneyEmbed)
  userSchema.updateOne({id: user.id}, {'money.wallet': res.money.wallet + amount, 'times.daily': Date.now()}, function(err, res) {if (err) console.log(err )})
  }
});
}

exports.help = {
  name: "daily",
  description: "Gets your daily bonus of GoogleCoins!",
  usage: "daily",
  category: "Economy"
}

exports.aliases = []

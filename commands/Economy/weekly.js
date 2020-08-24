const Discord = require("discord.js");
const userSchema = require('../../models/user.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {

  let user = message.author;
  userSchema.findOne({id: user.id}, (err, res) => {
    if (!res) res =  require('../../functions/start.js')(user);

  let timeout = 604800000;
  let amount = 500;

  let weekly = res.times.weekly

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`:x: You have already collected your weekly reward\n\nCollect it again in **${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s**.`)
    .setTimestamp()
    .setFooter(`� ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<a:checkmark:736406591275794583> You've collected your weekly reward of **${amount}** GoogleCoins!`)
  .setTimestamp()
  .setFooter(`� ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
  message.channel.send(moneyEmbed)
  userSchema.updateOne({id: message.author.id}, {'money.wallet': res.money.wallet + amount, 'times.weekly': Date.now()}, function(err, res) {if (err) console.log(err )})

  }
});
};

exports.help = {
    name: "weekly",
    description: "Gets your weekly bonus of GoogleCoins!",
    usage: "weekly",
    category: "Economy"
  }
  
exports.aliases = ["week"]

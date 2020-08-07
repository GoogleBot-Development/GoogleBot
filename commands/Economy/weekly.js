const Discord = require("discord.js");
const db = require("quick.db");
var economy = new db.table('economy')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {

  let user = message.author;
  let timeout = 604800000;
  let amount = 500;

  let weekly = await economy.get(`weekly_${user.id}`);

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`:x: You have already collected your weekly reward\n\nCollect it again in **${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s**.`)
    .setTimestamp()
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:Check:618736570337591296> You've collected your weekly reward of **${amount}** GoogleCoins!`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
  message.channel.send(moneyEmbed)
  economy.add(`wallet_${user.id}`, amount)
  economy.set(`weekly_${user.id}`, Date.now())
  }
};

exports.help = {
    name: "weekly",
    description: "Gets your daily bonus of GoogleCoins!",
    usage: "weekly",
    category: "Economy"
  }
  
exports.aliases = ["week"]

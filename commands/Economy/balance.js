const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const db = require("quick.db");
var economy = new db.table('economy')

exports.run = async (client, message, args) => {

  let user = message.mentions.members.first() || message.author;

  let bal = economy.get(`wallet_${user.id}`)
  if (bal === null) bal = 0

  let bank = await economy.get(`bank_${user.id}`)
  if (bank === null) bank = 0

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setColor("RANDOM")
  .setDescription(`**${user}'s GoogleCoin Balance**\n\nWallet: **${bal}**\nBank: **${bank}**`)
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
  .setTimestamp()
  message.channel.send(moneyEmbed)
}

exports.help = {
    name: "balance",
    description: "Gets your balance!",
    usage: "balance <@user>",
    category: "Economy"
  }
  
exports.aliases = ["bal", "b"]

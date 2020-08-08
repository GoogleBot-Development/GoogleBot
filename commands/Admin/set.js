const Discord = require("discord.js");
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const db = require("quick.db");
var economy = new db.table('economy')

exports.run = async (client, message, args) => {

let giveIDs = ["667354950321569792", "262410813254402048"]
if (!giveIDs.includes(message.author.id)) return

  let user = message.mentions.members.first() || message.author

  if (args[1] === "wallet") currency = "GoogleCoins"
  if (args[1] === "bank") currency = "GoogleCoins"
  if (args[1] === "fish") currency = "Fish"
  if (args[1] === "wheat") currency = "Wheat"

    if (isNaN(args[2])) return;
    economy.set(`${args[1]}_${user.id}`, args[2])
    let bal = await economy.get(`${args[1]}_${user.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`<a:checkmark:736406591275794583> Set ${user}'s ${currency} to **${args[2]}** GoogleCoins`)
    .setTimestamp()
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
    message.channel.send(moneyEmbed)

}

exports.help = {
  name: "set",
  description: "Set a currency to a user's balance",
  usage: "set [@user] [currency] [# of currency to set]",
  category: "Administrator"
}

exports.aliases = []

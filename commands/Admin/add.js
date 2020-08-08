const Discord = require("discord.js");
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const db = require("quick.db");
var economy = new db.table('economy')

exports.run = async (client, message, args) => {

let giveIDs = ["667354950321569792", "262410813254402048"]
if (!giveIDs.includes(message.author.id)) return

  let user = message.mentions.members.first() || message.author

  if (args[1] === "wallet") currency = "Wallet"
  if (args[1] === "bank") currency = "Bank"
  if (args[1] === "fish") currency = "Fish"
  if (args[1] === "wheat") currency = "Wheat"

  let nanEmbed = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(":x: That is not a number!")
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
    if (isNaN(args[2])) return message.channel.send(nanEmbed)
    economy.add(`${args[1]}_${user.id}`, args[2])
    let bal = await economy.get(`${args[1]}_${user.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`<a:checkmark:736406591275794583> Added ${args[2]} ${currency} to ${user}\n\nNew Balance: ${bal}`)
    .setTimestamp()
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
    message.channel.send(moneyEmbed)

}

exports.help = {
  name: "add",
  description: "Add a currency to a user's balance",
  usage: "add [@user] [currency] [# of currency to add]",
  category: "Administrator"
}

exports.aliases = []

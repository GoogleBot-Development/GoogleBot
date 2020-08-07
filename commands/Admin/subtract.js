const Discord = require("discord.js");
const db = require("quick.db");
var economy = new db.table('economy')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");

exports.run = async (client, message, args) => {

  let giveIDs = ["667354950321569792", "262410813254402048"]
  if (!giveIDs.includes(message.author.id)) return

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[2])) return;
    economy.subtract(`${args[1]}_${user.id}`, args[2])
    let bal = await economy.get(`${args[1]}_${user.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`<a:checkmark:736406591275794583> Removed **${args[2]}** ${args[1]} from ${user}\n\nNew Balance: ${bal}`)
    .setTimestamp()
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
    message.channel.send(moneyEmbed)

}

exports.help = {
    name: "subtract",
    description: "Remove a currency from a user's balance.",
    usage: "subtract [@user] [currency] [# of currency to subtract]",
    category: "Administrator"
  }
  
exports.aliases = []

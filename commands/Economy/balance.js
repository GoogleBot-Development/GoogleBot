const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const userSchema = require('../../models/user.js')

exports.run = async (client, message, args) => {

  let user = message.mentions.members.first() || client.users.cache.get(args[0]) || message.author;
  userSchema.findOne({id: user.id}, (err, res) => {
  if (!res) res = require('../../functions/start.js')(user);

  let bal 
  let bank 
  if (!res) {
    bal = 0
    bank = 0
  } else {
    bal = res.money.wallet
    bank = res.money.bank
  }

  let moneyEmbed = new Discord.MessageEmbed()
  .setAuthor("Your balance", message.author.displayAvatarURL({dynamic: true}))
  .setColor("RANDOM")
  .setDescription(`**${user}'s GoogleCoin Balance**\n\nWallet: **${bal}**\nBank: **${bank}**`)
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL({dynamic: true}))
  .setTimestamp()
  message.channel.send(moneyEmbed)
  });
}

exports.help = {
    name: "balance",
    description: "Gets your balance!",
    usage: "balance <@user>",
    category: "Economy"
  }
  
exports.aliases = ["bal", "b"]

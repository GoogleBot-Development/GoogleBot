const Discord = require("discord.js");
const ms = require("parse-ms");
const db = require("quick.db");
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
var economy = new db.table('economy')

exports.run = async (client, message, args) => {

  let user = message.author;

  function isOdd(num) { 
	if ((num % 2) == 0) return false;
	else if ((num % 2) == 1) return true;
}
    
let colour = args[0];
let money = parseInt(args[1]);
let balance = await economy.get(`wallet_${user.id}`)

let random = Math.floor(Math.random() * 35);

  let colorbad = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`:x: Specify a color! | Red [1.5x] Black [2x] Green [15x]`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
  if (!colour) return message.channel.send(colorbad)

if (!args[1]) {
  let moneyhelp = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`:x: Specify an amount to gamble!`)
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
  return message.channel.send(moneyhelp)
  }

if (isNaN(args[1])) {
  let nanEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(":x: That is not a number!")
    .setTimestamp()
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
    return message.channel.send(nanEmbed)
}

if (money > balance) {
let moneymore = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`:x: You are betting more than you have!`)
.setTimestamp()
.setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
return message.channel.send(moneymore)
}
    
    if (colour == "b" || colour.includes("black")) colour = 0;
    else if (colour == "r" || colour.includes("red")) colour = 1;
    else if (colour == "g" || colour.includes("green")) colour = 2;
    else return message.channel.send(colorbad);
    
    
    
    if (random == 0 && colour == 2) { // Green
        money *= 15
        economy.add(`wallet_${user.id}`, money)
        let moneyEmbed1 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`:green_circle: You won **${money}** GoogleCoins!\n\nMultiplier: 15x`)
        .setTimestamp()
        .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
        message.channel.send(moneyEmbed1)
        console.log(`${message.author.tag} Won ${money} on green`)
    } else if (isOdd(random) && colour == 1) { // Red
        money = parseInt(money * 1.5)
        economy.add(`wallet_${user.id}`, money)
        let moneyEmbed2 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`:red_circle: You won **${money}** GoogleCoins!\n\nMultiplier: 1.5x`)
        .setTimestamp()
        .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
        message.channel.send(moneyEmbed2)
    } else if (!isOdd(random) && colour == 0) { // Black
        money = parseInt(money * 2)
        economy.add(`wallet_${user.id}`, money)
        let moneyEmbed3 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`:black_circle: You won **${money}** GoogleCoins!\n\nMultiplier: 2x`)
        .setTimestamp()
        .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
        message.channel.send(moneyEmbed3)
    } else { // Wrong
        economy.subtract(`wallet_${user.id}`, money)
        let moneyEmbed4 = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`:x: You lost **${money}** GoogleCoins!\n\nMultiplier: 0x`)
        .setTimestamp()
        .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
        message.channel.send(moneyEmbed4)
    }
}

exports.help = {
    name: "roulette",
    description: "Bet your GoogleCoins on the Roulette Table!",
    usage: "roulette [green/red/black] [# of coins]",
    category: "Economy"
  }
  
exports.aliases = []

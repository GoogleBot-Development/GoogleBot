const slotItems = [":grapes:", ":watermelon:", ":peach:", ":apple:", ":seven:", ":strawberry:", ":cherries:"];
const db = require("quick.db");
var economy = new db.table('economy')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    let user = message.author;
    let moneydb = await economy.get(`wallet_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;

    let nanEmbed = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(":x: That is not a number!")
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
    if (isNaN(args[0])) return message.channel.send(nanEmbed)

    let moneymore = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`:x: You are betting more than you have`)
    .setTimestamp()
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

    let moneyhelp = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`:x: Specify an amount`)
    .setTimestamp()
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

    if (!money) return message.channel.send(moneyhelp);
    if (money > moneydb) return message.channel.send(moneymore);

    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 2
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new Discord.MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nYou won **${money}** GoogleCoins!`)
            .setColor("GREEN")
            .setTimestamp()
            .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
        message.channel.send(slotsEmbed1)
        economy.add(`wallet_${user.id}`, money)
    } else {
        let slotsEmbed = new Discord.MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nYou lost **${money}** GoogleCoins!`)
            .setColor("RED")
            .setTimestamp()
            .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
        message.channel.send(slotsEmbed)
        economy.subtract(`wallet_${user.id}`, money)
    }

}

exports.help = {
    name: "slots",
    description: "Take your chances at the slot machine!",
    usage: "slots [# of coins]",
    category: "Economy"
  }
  
exports.aliases = []

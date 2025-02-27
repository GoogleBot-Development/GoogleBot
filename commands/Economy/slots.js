const slotItems = [":grapes:", ":watermelon:", ":peach:", ":apple:", ":seven:", ":strawberry:", ":cherries:"];
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const Discord = require('discord.js');
const userSchema = require('../../models/user.js')

exports.run = async (client, message, args) => {

    let user = message.author;
    userSchema.findOne({id: user.id}, (err, res) => {
    if (!res) res = require('../../functions/start.js')(user);

    let moneydb = res.money.wallet
    let money = args[0]
    let win = false;

    let moneyhelp = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`:x: Specify an amount!`)
    .setTimestamp()
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))

    if (!money) return message.channel.send(moneyhelp);

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
        userSchema.updateOne({id: message.author.id}, {'money.wallet': res.money.wallet + money}, function(err, res) {if (err) console.log(err )})
    } else {
        let slotsEmbed = new Discord.MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nYou lost **${money}** GoogleCoins!`)
            .setColor("RED")
            .setTimestamp()
            .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
        message.channel.send(slotsEmbed)
        userSchema.updateOne({id: message.author.id}, {'money.wallet': res.money.wallet - money}, function(err, res) {if (err) console.log(err )})
    }
    });
}

exports.help = {
    name: "slots",
    description: "Take your chances at the slot machine!",
    usage: "slots [# of coins]",
    category: "Economy"
  }
  
exports.aliases = []

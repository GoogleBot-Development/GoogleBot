const zxcvbn = require('zxcvbn');
const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");

exports.run = async (client, message, args) => {
    if (!args[0]) return message.reply('You need to give the password! Please do this at your own risk!');
    
    let res = await zxcvbn(args.join(' '));
    let scorefr = '';
    
    if (res.score == 0) scorefr = 'Very Weak';
    if (res.score == 1) scorefr = 'Weak';
    if (res.score == 2) scorefr = 'Medium';
    if (res.score == 3) scorefr = 'Strong';
    if (res.score == 4) scorefr = 'Very Strong';
    
    let online = res.crack_times_display.online_throttling_100_per_hour.toUpperCase() || 'Not Available'
    let meow = res.crack_times_display.online_no_throttling_10_per_second.toUpperCase() || 'Not Available'
    let offline = res.crack_times_display.offline_slow_hashing_1e4_per_second.toUpperCase() || 'Not Available'
    let woof = res.crack_times_display.offline_fast_hashing_1e10_per_second.toUpperCase() || 'Not Available'
    
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Password Strength Calculator`, message.author.displayAvatarURL({dynamic: true}))
    .setTitle("Password Strength")
    .setDescription(`Score: ${res.score} - ${scorefr}`)
    .addField("Throttled Online Attack Crack Time", online)
    .addField("Unthrottled Online Attack Crack Time", meow)
    .addField("Offline Attack, Slow Hash, Many Cores Crack Time", offline)
    .addField("Offline Attack, Fast Hash, Many Cores Crack Time", woof)
    .setTimestamp()
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL({dynamic: true}))
    message.channel.send(embed)
}

exports.help = {
  name: 'passwordstrength',
  category: 'Fun',
  description: 'Returns how long your password will take to crack and the strength score of it.',
  usage: 'passwordstrength <password>'
}

exports.aliases = ["pss", "password"]

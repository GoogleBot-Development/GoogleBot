const req = require('node-superfetch');
const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");

exports.run = async (client, message, args) => {
  try {
    const {
      body
    } = await req.get('http://api.adviceslip.com/advice');
    let adviceEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(JSON.parse(body.toString()).slip.advice)
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()
    
    message.channel.send(adviceEmbed);
  } catch (e) {
    console.log(e);
    message.channel.send(`Oh no, an error occurred!\n${e.message}`);
  }
};

exports.help = {
    name: "advice",
    description: "Gives some advice. Great if you feel bored!",
    usage: "advice",
    category: "Fun"
  }
  
  exports.aliases = []

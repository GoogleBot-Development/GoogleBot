const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const TinyURL = require('tinyurl');

exports.run = (client, message, args) => {
    if(!args[0]) return message.reply("you must provide a link to shorten!")
    var mes = message.content.split(" ").slice(1).join(" ");
    var mes = encodeURI(message.content.split(" ").slice(1).join(" "))
    TinyURL.shorten(mes, function(res) {
    message.channel.send(res)
    })
}

exports.help = {
    name: "shorten",
    description: "I can shorten whatever URL you input!",
    usage: "shorten [link]",
    category: "Utility"
  }
  
  exports.aliases = ["url"]

const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const BitlyAPI = require("node-bitlyapi");
const Bitly = new BitlyAPI({
    client_id: "104ae2d94b9f7e2412e5504dfde6bdb9cdafb8e5",
    client_secret: "4a836886828e16612afab9a40420eebbf5fd8a86"
});

Bitly.setAccessToken("499974b273fa3a8f2e1840da07134d5678a34ce4")

exports.run = (client, message, args) => {
    var inputURL = message.content.split(" ").slice(1).join(" ");
    Bitly.shortenLink(inputURL, function(err, results) {
        bitlink = JSON.parse(results);
        finalURL = bitlink.data.url;
        let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`<a:verified:739930427950891150> The link was successfully shortened!\n\n**Shorter Link:** ${finalURL}\n**Original Link:** ${inputURL}`)
            .setTimestamp()
            .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( {format: "png"} ))
        message.channel.send(embed)
    })
}

exports.help = {
    name: "bitly",
    description: "I can shorten whatever URL you input into a Bitly Link!",
    usage: "bitly [link]",
    category: "Utility"
  }
  
  exports.aliases = []

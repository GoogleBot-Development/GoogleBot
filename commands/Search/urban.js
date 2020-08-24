const Discord = require("discord.js");
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const ud = require("relevant-urban");

exports.run = async (client, message, args) => {
let word = args.join(" ")
let wordEmbed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(":x: Specify something to search on the Urban Dictionary!")
.setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
.setTimestamp()
if(!word) return message.channel.send(`${message.author}`, wordEmbed)
let defin = await ud(args.join(' ')).catch(e => {
    let noneEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(":x: Error: Nothing found")
    .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
    .setTimestamp()
    return message.channel.send(`${message.author}`, noneEmbed)
});

let definition = defin.definition
if(definition.length > 2048) definition = [":x: The definition was too long to be returned as an embed!"]

let example = defin.example
if(example.length > 1024) example = [":x: The example was to long to be returned as an embed!"]

let embed = new Discord.MessageEmbed()
.setTitle(`Definition of ${word}`)
.setURL(defin.urbanURL)
.setDescription(definition)
.addField("**Example:**", example)
.addField("**Author:**", defin.author)
.setColor("RANDOM")
.setFooter(`👍 ${defin.thumbsUp} | 👎 ${defin.thumbsDown}`, message.client.user.displayAvatarURL( { format: "png" } ))
.setTimestamp()
message.channel.send(embed)
}

exports.help = {
    name: "urban",
    description: "I will search the Urban Dictionary for your word",
    usage: "urban [word/phrase]",
    category: "Search"
  }
  
  exports.aliases = ["ud"]

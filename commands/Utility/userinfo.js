const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");

exports.run = (client, message, args) => {
  const dateformat = require('dateformat')
const status = {
   online: 'Online', 
   idle: 'Idle',
   dnd: 'Do Not Disturb',
   offline: 'Offline/Invisible'
 };
let user = message.mentions.users.first() || message.author
let member = message.guild.members.cache.get(user.id)

let presence = member.presence.activities[0] || {name: "Not playing a game"}


let roles = member.roles.cache.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => `<@&${role.id}>`); 
if (roles.length === 0) roles = ["No Roles"]
if (roles.length > 20) roles = ["You have too many roles for me to display!"]
let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${user.username}'s Info`, message.author.displayAvatarURL())
.setThumbnail(user.displayAvatarURL())
.setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
.addField("Username", user.tag, true)
.addField("\u200b", "\u200b", true)
.addField("ID", user.id, true)
.addField("Status", status[member.presence.status], true)
.addField("\u200b", "\u200b", true)
.addField("Playing", `${presence.name}` || "Not playing a game", true)
.addField("Account Created", require('dateformat')(user.createdAt, "mmmm d, yyyy"), true)
.addField("\u200b", "\u200b", true)
.addField(`Joined ${message.guild.name} on`, require('dateformat')(member.joinedAt, "mmmm d, yyyy"), true)
.addField("Roles", roles.join(", "))
message.channel.send(embed)
}

exports.help = {
  name: "userinfo",
  description: "I can get the userinfo of the mentioned person, or if you *don't* mention anyone I will get your userinfo.",
  usage: "userinfo [@user]",
  category: "Utility"
}

exports.aliases = ["ui"]

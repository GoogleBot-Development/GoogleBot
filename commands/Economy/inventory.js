const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const userSchema = require('../../models/user.js')


exports.run = async (client, message, args) => {

  let user = message.mentions.members.first() || client.users.cache.get(args[0]) || message.author;
  userSchema.findOne({id: user.id}, (err, res) => {
    if (!res) res = require('../../functions/start.js')(user);

  let fish = res.fish
  if (fish === null) fish = 0

  let wheat = res.wheat
  if (wheat === null) wheat = 0

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`**${user}'s Inventory**\n\n:tropical_fish:  Fish: **${fish}**\n<:wheat:741395603250217052>  Wheat: **${wheat}**`)
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
  .setTimestamp()
  message.channel.send(moneyEmbed)
});
};

exports.help = {
    name: "inventory",
    description: "Gets your inventory.",
    usage: "inventory",
    category: "Economy"
  }
  
exports.aliases = ["inv"]

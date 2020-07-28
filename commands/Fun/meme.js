const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const snekfetch = require('snekfetch')

exports.run = async (client, message, args) => {
  try {
      const { body } = await snekfetch
          .get('https://www.reddit.com/r/memes.json')
          .query({ limit: 800 });
      const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.under_18);
      if (!allowed.length) return message.channel.send('It seems we are out of fresh memes! Try again later.');
      const randomnumber = Math.floor(Math.random() * allowed.length)
      const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(allowed[randomnumber].data.title)
      .setURL(allowed[randomnumber].data.url)
      .setImage(allowed[randomnumber].data.url)
      .setFooter("👍 " + allowed[randomnumber].data.ups + " | 💬 " + allowed[randomnumber].data.num_comments + "")
      message.channel.send(embed)
    } catch (err) {
      return console.log(err);
    }
}

exports.help = {
  name: "meme",
  description: "Gives you a meme",
  usage: "meme",
  category: "Fun"
}

exports.aliases = []

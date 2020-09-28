const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

exports.run = async (client, message, args) => {

    const subReddits = ["seals"];
        
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setFooter(`Random seal from r/${random}`)

        message.channel.send(embed);
}

exports.help = {
    name: "seal",
    description: "Get some random seals!",
    usage: "seal",
    category: "Animals"
  }
  
  exports.aliases = []

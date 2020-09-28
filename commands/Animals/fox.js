const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

exports.run = async (client, message, args) => {

    const subReddits = ["foxes"];
        
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setFooter(`Random fox from r/${random}`)

        message.channel.send(embed);
}

exports.help = {
    name: "fox",
    description: "Get some random foxes!",
    usage: "fox",
    category: "Animals"
  }
  
  exports.aliases = []

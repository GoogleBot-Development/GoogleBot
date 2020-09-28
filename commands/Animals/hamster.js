const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

exports.run = async (client, message, args) => {

    const subReddits = ["hamsters"];
        
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setFooter(`Random hamster from r/${random}`)

        message.channel.send(embed);
}

exports.help = {
    name: "hamster",
    description: "Get some random hamsters!",
    usage: "hamsters",
    category: "Animals"
  }
  
exports.aliases = []

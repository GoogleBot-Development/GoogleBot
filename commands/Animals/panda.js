const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

exports.run = async (client, message, args) => {

    const subReddits = ["panda"];
        
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setFooter(`Random panda from r/${random}`)

        message.channel.send(embed);
}

exports.help = {
    name: "panda",
    description: "Get some random pandas!",
    usage: "panda",
    category: "Animals"
  }
  
  exports.aliases = []

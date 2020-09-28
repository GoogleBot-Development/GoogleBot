const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

exports.run = async (client, message, args) => {

    const subReddits = ["shiba"];
        
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setFooter(`Random shiba from r/${random}`)

        message.channel.send(embed);
}

exports.help = {
    name: "shiba",
    description: "Get some random shibas!",
    usage: "shiba",
    category: "Animals"
  }
  
  exports.aliases = []

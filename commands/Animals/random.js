const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

exports.run = async (client, message, args) => {

    const subReddits = ["Birb", "catpictures", "dogpictures", "foxes", "hamsters", "koalas", "seals", "panda", "Rabbits"];
        
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setFooter(`Random animal from r/${random}`)

        message.channel.send(embed);
}

exports.help = {
    name: "random",
    description: "Get some random animals!",
    usage: "random",
    category: "Animals"
  }
  
  exports.aliases = []

const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

exports.run = async (client, message, args) => {

    const subReddits = ["dogpictures"];
        
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setFooter(`Random dog from r/${random}`)

        message.channel.send(embed);
}

exports.help = {
    name: "dog",
    description: "Get some random dogs!",
    usage: "dog",
    category: "Animals"
  }
  
  exports.aliases = ["doggy", "puppy"]

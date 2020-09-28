const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

exports.run = async (client, message, args) => {

    const subReddits = ["catpictures"];
        
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setFooter(`Random cat from r/${random}`)

        message.channel.send(embed);
}

exports.help = {
    name: "cat",
    description: "Get some random cats!",
    usage: "cat",
    category: "Animals"
  }
  
  exports.aliases = ["kitty"]

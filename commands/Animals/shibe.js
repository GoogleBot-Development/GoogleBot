const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

exports.run = async (client, message, args) => {
    let msg = await message.channel.send('Generating image...')

    const subReddits = ["shiba"];
        
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setFooter(`Random shibe from r/${random}`)

        msg.edit(" ", embed);
}

exports.help = {
    name: "shibe",
    description: "Get some random shibe!",
    usage: "shibe",
    category: "Animals"
  }
  
  exports.aliases = ["shiba"]

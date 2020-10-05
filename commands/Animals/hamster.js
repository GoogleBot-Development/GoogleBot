const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

exports.run = async (client, message, args) => {
    let msg = await message.channel.send('Generating image...')

    const subReddits = ["hamsters"];
        
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setFooter(`Random hamster from r/${random}`)

        msg.edit(" ", embed);
}

exports.help = {
    name: "hamster",
    description: "Get some random hamsters!",
    usage: "hamsters",
    category: "Animals"
  }
  
exports.aliases = []

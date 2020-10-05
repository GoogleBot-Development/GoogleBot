const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

exports.run = async (client, message, args) => {
    let msg = await message.channel.send('Generating image...')

    const subReddits = ["Rabbits"];
        
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setFooter(`Random rabbit from r/${random}`)

        msg.edit(" ", embed);
}

exports.help = {
    name: "rabbit",
    description: "Get some random rabbits!",
    usage: "rabbit",
    category: "Animals"
  }
  
  exports.aliases = ["bunny"]

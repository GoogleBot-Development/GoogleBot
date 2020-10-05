const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

exports.run = async (client, message, args) => {
    let msg = await message.channel.send('Generating image...')

    const subReddits = ["Birb"];
        
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setFooter(`Random bird from r/${random}`)

        msg.edit(" ", embed);
}

exports.help = {
    name: "birb",
    description: "Get some random birds!",
    usage: "birb",
    category: "Animals"
  }
  
  exports.aliases = ["bird"]

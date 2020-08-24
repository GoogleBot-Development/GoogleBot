const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

exports.run = async (client, message, args) => {

    const subReddits = ["dankmeme", "meme", "me_irl", "memes", "wholesomememes", "historymemes", "comedyheaven", "AdviceAnimals"];
        
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setFooter(`Random meme from r/${random}`)

        message.channel.send(embed);
}

exports.help = {
    name: "meme",
    description: "Get some random memes!",
    usage: "meme",
    category: "Fun"
  }
  
  exports.aliases = []

const math = require('mathjs');
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const Discord = require('discord.js')

exports.run = (client, message, args) => {
    try {
            let whatto = args.join(` `);
            if (!whatto) return send(`Please provide a math equation to solve.`);
                let result = math.evaluate(whatto).toString();
                let mathEmbed = new Discord.MessageEmbed()
                    mathEmbed.setTitle("Math Result")
                    mathEmbed.setColor("RANDOM")
                    mathEmbed.setTimestamp()
                    mathEmbed.addField(`Equation:`, `\`\`\`js\n${whatto}\`\`\``, true)
                    mathEmbed.addField(`Result:`, `\`\`\`js\n${result}\`\`\``, true);
                    mathEmbed.setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( {format: "png"} ))
                message.channel.send(mathEmbed).catch(() => message.reply('that is an invalid expression!'));
            } catch (e) {
                return message.reply('that is an invalid expression!')
}
}

exports.help = {
    name: "math",
    description: "Does your homework for you! We're kidding on this one, but this thing can do some serious math.\nSigns:\n`+` is for Addition\n`-` is for Subtraction\n`*` is for Multiplication\n`/` is for Division\nAnd if you need the first 16 digits of pi, just input `pi` and it'll slide that out",
    usage: "math [number][sign][number]",
    category: "Fun"
}
  
exports.aliases = ["solve"]

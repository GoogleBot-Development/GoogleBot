const Discord = require("discord.js")
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");

module.exports.run = async (bot, message, args) => {
	let errorEmbed = new Discord.MessageEmbed()
	.setColor("RED")
	.setDescription("```.--. .-.. . .- ... . / .--. ..- - / ... --- -- . - .... .. -. --. / ..-. --- .-. / -- . / - --- / - .-. .- -. ... .-.. .- - . ```")
	.setTimestamp()
	.setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( {format: "png"} ))
    if(!args[0]) return message.channel.send(errorEmbed)

    let alpha = " ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(""),
				morse = "/,.-,-...,-.-.,-..,.,..-.,--.,....,..,.---,-.-,.-..,--,-.,---,.--.,--.-,.-.,...,-,..-,...-,.--,-..-,-.--,--..,.----,..---,...--,....-,.....,-....,--...,---..,----.,-----".split(","),
				text = args.join(" ").toUpperCase();
			while (text.includes("Ä") || text.includes("Ö") || text.includes("Ü")) {
				text = text.replace("Ä","AE").replace("Ö","OE").replace("Ü","UE");
			}
			if (text.startsWith(".") || text.startsWith("-")) {
				text = text.split(" ");
				let length = text.length;
				for (i = 0; i < length; i++) {
					text[i] = alpha[morse.indexOf(text[i])];
				}
				text = text.join("");
			} else {
				text = text.split("");
				let length = text.length;
				for (i = 0; i < length; i++) {
					text [i] = morse[alpha.indexOf(text[i])];
				}
				text = text.join(" ");
			}
			let morseEmbed = new Discord.MessageEmbed()
			.setColor("RANDOM")
			.setDescription(`\`\`\`${text}\`\`\``)
			.setTimestamp()
			.setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( {format: "png"} ))
			return message.channel.send(morseEmbed)

}

exports.help = {
    name: "morse",
    description: "I can translate your text into Morse Code! Just input something, and I will translate it.\nI can only do letters and numbers in the english language.",
    usage: "morse [text]",
    category: "Fun"
  }
  
  exports.aliases = []

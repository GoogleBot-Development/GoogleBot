const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const weather = require("weather-js");

exports.run = (client, message, args) => {
  if (!args[0]) return message.reply("please give me a city to find the weather of!");
  if(args[1] !== "C" || args[1] !== "F") return message.reply("please input your tempterature unit! Options are: `F` and `C`.")
  let unit = [""]
  if (args[1] === "F") unit = ["Fahrenheit"]
  if(args[1] === "C") unit = ["Celsius"]
  weather.find({ search: args.join(' '), degreeType: args[1] }, function (err, result) { 
        if (err) console.log('Weather CMD error: ' + err);
        if (result === undefined || result.length === 0) {
          let errorEmbed = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription(`:warning: **${message.author.username}**, please enter a valid location.`)
          .setTimestamp()
          .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
          message.channel.send(errorEmbed)
            return;
        }

        var current = result[0].current;
        var location = result[0].location;

        let weatherEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username}, it's ${current.skytext} weather in ${current.observationpoint}`, message.author.displayAvatarURL({dynamic: true}))
            .setColor("RANDOM")
            .setThumbnail(current.imageUrl)
            .addField('Timezone', `UTC${location.timezone}`, true)
            .addField('Temperature', `${current.temperature} Degrees ${unit}`, true)
            .addField('Degree Type', location.degreetype, true)
            .addField('Feels Like', `${current.feelslike} Degrees`, true)
            .addField('Winds', current.winddisplay, true)
            .addField('Humidity', `${current.humidity}%`, true)
            .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
            .setTimestamp()
        message.channel.send(weatherEmbed);
    });
}

exports.help = {
  name: "weather",
  description: "I can display the weather! Just give me a city or a town that I can scan.",
  usage: "weather [city/town]",
  category: "Search"
}

exports.aliases = []

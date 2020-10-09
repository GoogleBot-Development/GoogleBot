const Discord = require('discord.js')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");
const weather = require("weather-js");

exports.run = (client, message, args) => {
  if (!args[0]) return message.reply("please give me a unit to get the temperature in! Options are `F` and `C`!")
  if (!args[1]) return message.reply("please give me a location to get the weather of!")
  weather.find({ search: args.slice(1).join(' '), degreeType: args[0] }, function (err, result) { 
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

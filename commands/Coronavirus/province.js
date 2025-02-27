const Discord = require('discord.js');
const statesJson = require('../../covid/states.json');
const covid = require('covidtracker');
const fetch = require('node-fetch');

  exports.run = async (client, message, args) => {
    if(!args[0] || !args[1]) return message.channel.send('You must provide a country name and province name.\nUsage example: `g!province [country] [province]`');

    const country = args[0].toProperCase();
    const province = args.slice(1).join(' ').toUpperCase();

    const prov = await covid.getJHU({ country, province });
    const obj = prov[0];

    if (!obj) return message.channel.send('I couldn\'t find that province! That province either doesn\'t exist or was typed incorrectly.\nUsage example: `g!province [country] [province]`');

    const embed = new Discord.MessageEmbed()
      .setAuthor(`${obj.province}, ${obj.country}`)
      .addField('Confirmed Cases', `**${obj.stats.confirmed.toLocaleString()}**`, true)
      .addField('Deaths', `${obj.stats.deaths.toLocaleString()} (${((obj.stats.deaths / obj.stats.confirmed) * 100).toFixed(2)}%)`, true)
      .addField('Recovered Cases', `${obj.stats.recovered.toLocaleString()} (${((obj.stats.recovered / obj.stats.confirmed) * 100).toFixed(2)}%)`, true)
      .setColor("RANDOM")
      .setFooter(`Last Updated: ${obj.updatedAt}`);
    message.channel.send(embed);
}

exports.help = {
  name: "province",
  description: "Gets the coronavirus statistics of a province.",
  usage: "province [country] [province]",
  category: "Coronavirus"
}

exports.aliases = []

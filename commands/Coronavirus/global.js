/* eslint-disable quotes */
const Discord = require('discord.js');
const covid = require('covidtracker');
const fetch = require('node-fetch');

Object.defineProperty(String.prototype, 'toProperCase', {
  value: function() {
    return this.replace(/([^\W_]+[^\s-]*) */g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  },
});

exports.run = async (client, message, args) => {
      const totalStats = await covid.getAll();

      const updatedTime = new Date(totalStats.updated);

      const embed = new Discord.MessageEmbed()
        .setAuthor('Global Coronavirus Statistics', message.author.displayAvatarURL({dynamic: true}))
        .addField('Confirmed Cases', `**${totalStats.cases.toLocaleString()}**`, true)
        .setThumbnail("https://cdn.discordapp.com/icons/702217335716446268/a_3cb7636b6976f63efe38fd438dbcd862.gif")
        .addField('Today\'s Cases', `+${totalStats.todayCases.toLocaleString()}`, true)
        .addField('Today\'s Deaths', `+${totalStats.todayDeaths.toLocaleString()}`, true)
        .addField('Active Cases', `${totalStats.active.toLocaleString()} (${((totalStats.active / totalStats.cases) * 100).toFixed(2)}%)`, true)
        .addField('Recovered Cases', `${totalStats.recovered.toLocaleString()} (${((totalStats.recovered / totalStats.cases) * 100).toFixed(2)}%)`, true)
        .addField('Deaths', `${totalStats.deaths.toLocaleString()} (${((totalStats.deaths / totalStats.cases) * 100).toFixed(2)}%)`, true)
        .addField('Tests', `${totalStats.tests.toLocaleString()}`, true)
        .addField('Cases Per Million', `${totalStats.casesPerOneMillion.toLocaleString()}`, true)
        .addField('Deaths Per Million', `${totalStats.deathsPerOneMillion.toLocaleString()}`, true)
        .setImage(`https://xtrading.io/static/layouts/qK98Z47ptC-embed.png?newest=${Date.now()}`)
        .setColor("RANDOM")
        .setFooter(`Last Updated: ${updatedTime}`);
      message.channel.send(embed);
    }

exports.help = {
  name: "global",
  description: "Gives the global coronavirus statistics",
  usage: "global",
  category: "Coronavirus"
}

exports.aliases = []

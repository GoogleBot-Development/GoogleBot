const Discord = require('discord.js');
const covid = require('covidtracker');

exports.run = async (client, message, args) => {
    const msg = await message.channel.send(`Fetching top countries...`);

    const sortedCountries = await covid.getCountry({ sort: 'cases' });
    let topCountries = '';

    for (let i = 0; i < 10; i++) {
      const country = sortedCountries[i];
      topCountries += `${i + 1}. **${country.country}**: ${country.cases} cases - ${country.deaths} deaths - ${country.recovered} recovered\n`;
    }

    const embed = new Discord.MessageEmbed()
      .setAuthor('COVID-19 Leaderboard', message.author.displayAvatarURL({dynamic: true}))
      .setDescription(topCountries)
      .setColor("RANDOM");
    msg.edit('', embed);
}

exports.help = {
  name: "top",
  description: "Gets the top ten countries with the most coronavirus cases.",
  usage: "top",
  category: "Coronavirus"
}

exports.aliases = []

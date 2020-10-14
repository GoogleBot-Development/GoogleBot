const Discord = require('discord.js');
const covid = require('covidtracker');
const fetch = require('node-fetch');


exports.run = async (client, message, args) => {
    let countryInput = args.join(' ').toUpperCase();
    if (countryInput.toLowerCase() == 'netherlands') countryInput = 'nl';
    if (countryInput.toLowerCase() == 'laos') countryInput = 'Lao People\'s Democratic Republic';
    const country = await covid.getCountry({ country: countryInput });
    if (!country) return message.channel.send('I couldn\'t find that country. That country either doesn\'t exist, was typed incorrectly or has no confirmed cases.');

    let wikiName;
    const wikiAliases = {
      'S. Korea': 'South Korea',
      'UK': 'United Kingdom',
      'USA': 'United States',
    };

    const thePrefixedContries = ['United States', 'Netherlands'];

    if (wikiAliases[country.country]) {
      wikiName = wikiAliases[country.country];
    }
    else {
      wikiName = country.country;
    }

    let wikiImage = '';
    if (country.country == 'USA') {
      wikiImage = `https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/COVID-19_Outbreak_Cases_in_the_United_States_%28Density%29.svg/640px-COVID-19_Outbreak_Cases_in_the_United_States_%28Density%29.svg.png?1588686006705?newest=${Date.now()}`;
    }
    else {
      const WikiPage = await fetch(`https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_${thePrefixedContries.includes(wikiName) ? 'the_' : ''}${wikiName.replace(' ', '_').replace(' ', '_').replace(' ', '_').replace(' ', '_').replace(' ', '_').replace(' ', '_').replace(' ', '_').replace(' ', '_')}`).then(res => res.text());
      const ImageRegex = /<meta property="og:image" content="([^<]*)"\/>/;
      const ImageLink = ImageRegex.exec(WikiPage);
      let imageLink;
      if (ImageLink) imageLink = ImageLink[1];
      if (imageLink) imageLink += `?newest=${Date.now()}`;
      wikiImage = imageLink;
    }

    const updatedTime = new Date(country.updated);

    const embed = new Discord.MessageEmbed()
      .setAuthor(`${country.country}'s Coronavirus Statistics`)
      .addField('Confirmed Cases', `**${country.cases.toLocaleString()}**`, true)
      .addField('Today\'s Cases', `+${country.todayCases.toLocaleString()}`, true)
      .addField('Today\'s Deaths', `+${country.todayDeaths.toLocaleString()}`, true)
      .addField('Active Cases', `${country.active.toLocaleString()} (${((country.active / country.cases) * 100).toFixed(2)}%)`, true)
      .addField('Recovered Cases', `${country.recovered.toLocaleString()} (${((country.recovered / country.cases) * 100).toFixed(2)}%)`, true)
      .addField('Deaths', `${country.deaths.toLocaleString()} (${((country.deaths / country.cases) * 100).toFixed(2)}%)`, true)
      .addField('Tests', `${country.tests.toLocaleString()}`, true)
      .addField('Cases Per Million', `${country.casesPerOneMillion.toLocaleString()}`, true)
      .addField('Deaths Per Million', `${country.deathsPerOneMillion.toLocaleString()}`, true)
      .setThumbnail(`https://www.countryflags.io/${require('../../covid/countries_abbreviations')[country.country]}/flat/64.png`)
      .setColor("RANDOM")
      .setFooter(`Last Updated: ${updatedTime}`);
    if (wikiImage) embed.setImage(wikiImage);
    message.channel.send(embed);
}

exports.help = {
  name: "country",
  description: "Gives the coronavirus statistics about the designated country",
  usage: "country [country]",
  category: "Coronavirus"
}

exports.aliases = []

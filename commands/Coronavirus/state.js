const Discord = require('discord.js');
const statesJson = require('../../covid/states.json');
const covid = require('covidtracker');
const fetch = require('node-fetch');

  exports.run = async (client, message, args) => {
    const stateInput = args.join(' ').toUpperCase();

    const state = await covid.getState({ state: stateInput });
    if (!state) return message.channel.send('I couldn\'t find that state. That state either doesn\'t exist or was typed incorrectly.');

    const wikiName = state.state;

    const WikiPage = await fetch(`https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_${wikiName.replace(' ', '_').replace(' ', '_').replace(' ', '_').replace(' ', '_').replace(' ', '_').replace(' ', '_').replace(' ', '_').replace(' ', '_')}`).then(res => res.text());
    const ImageRegex = /<meta property="og:image" content="([^<]*)"\/>/;
    const ImageLink = ImageRegex.exec(WikiPage);
    let imageLink;
    if (ImageLink) imageLink = ImageLink[1];

    let flagURL = '';
    for (let i = 0; i < statesJson.length; i++) {
      if (state.state == statesJson[i].state) flagURL = statesJson[i].state_flag_url;
    }

    const embed = new Discord.MessageEmbed()
      .setAuthor(`${state.state}'s Coronavirus Statistics`, message.author.displayAvatarURL({dynamic: true}))
      .addField('Confirmed Cases', `**${state.cases.toLocaleString()}**`, true)
      .addField('Today\'s Cases', `+${state.todayCases.toLocaleString()}`, true)
      .addField('Today\'s Deaths', `+${state.todayDeaths.toLocaleString()}`, true)
      .addField('Active Cases', `${state.active.toLocaleString()} (${((state.active / state.cases) * 100).toFixed(2)}%)`, true)
      .addField('Deaths', `${state.deaths.toLocaleString()} (${((state.deaths / state.cases) * 100).toFixed(2)}%)`, true)
      .addField('Tests', `${state.tests.toLocaleString()}`, true)
      .setThumbnail(flagURL)
      .setColor("RANDOM");
    if (imageLink) embed.setImage(imageLink);
    message.channel.send(embed);
}

exports.help = {
  name: "state",
  description: "Gives the coronavirus statistics about the designated state.",
  usage: "state [state]",
  category: "Coronavirus"
}

exports.aliases = []

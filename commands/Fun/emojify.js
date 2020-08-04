const Discord = require('discord.js');

exports.run = (client, message, args) => {
const mapping = {
    ' ': '    ', '0': ' :zero:', '1': ' :one:', '2': ' :two:', '3': ' :three:', '4': ' :four:', '5': ' :five:', '6': ' :six:', '7': ' :seven:', '8': ' :eight:', '9': ' :nine:', '!': ':grey_exclamation:', '?': ':grey_question:', '#': ' :hash:', '*': ' :asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(e => {
    mapping[e] = mapping[e.toUpperCase()] = ` :regional_indicator_${e}:`;
});
    if (args.length < 1) return message.reply('you must send something to emojify!')
    if (args.join(" ").length > 75) return message.reply("your message is too long!")
    let invalid = false
    args.join(" ").split("").forEach(e => {
        if (invalid === true) return
        if (!mapping[e]) {
            invalid = true
            return message.reply("ine of your characters was invalid!")
        }
    });
    if (invalid === true) return;
    message.channel.send(
        args.join(' ')
            .split('')
            .map(e => mapping[e] || e)
            .join('')
    );
}

exports.help = {
    name: "emojify",
    description: "Emojifies whatever you input!",
    usage: "emojify [text]",
    category: "Fun"
  }
  
exports.aliases = ["emoji"]

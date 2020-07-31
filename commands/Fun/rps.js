const Discord = require('discord.js')

exports.run = (client, message, args) => {
    let validPicks = ["rock", "paper", "scissors"];
    let userPick = args.join(` `).toLowerCase();
    if (!validPicks.includes(userPick) || !userPick) return message.channel.send(`Your pick wasn't rock, paper, or scissors!`)
    let botPicked = validPicks[Math.floor(Math.random() * validPicks.length)];
    //Rock
    if (userPick == "rock" && botPicked == "rock") return message.channel.send(`You picked \`${userPick}\` and I picked also picked \`${botPicked}\`. It's a tie! :sweat_smile:`);
    if (userPick == "rock" && botPicked == "paper") return message.channel.send(`You picked \`${userPick}\` and I picked \`${botPicked}\`. You beat me! <a:sad:737129705685123124> `);
    if (userPick == "rock" && botPicked == "scissors") return message.channel.send(`You picked \`${userPick}\` and I picked \`${botPicked}\`. I beat you! <a:yay:737073686871277620>`);
    //Paper
    if (userPick == "paper" && botPicked == "paper") return message.channel.send(`You picked \`${userPick}\` and I also picked \`${botPicked}\`. It's a tie! :sweat_smile:`);
    if (userPick == "paper" && botPicked == "rock") return message.channel.send(`You picked \`${userPick}\` and I picked \`${botPicked}\`. You beat me! <a:sad:737129705685123124>`);
    if (userPick == "paper" && botPicked == "scissors") return message.channel.send(`You picked \`${userPick}\` and I picked \`${botPicked}\`. I beat you! <a:yay:737073686871277620>`);
    //Scrissors
    if (userPick == "scissors" && botPicked == "scissors") return message.channel.send(`You picked \`${userPick}\` and I also picked \`${botPicked}\`. It's a tie! :sweat_smile:`);
    if (userPick == "scissors" && botPicked == "rock") return message.channel.send(`You picked \`${userPick}\` and I picked \`${botPicked}\`. I beat you! <a:yay:737073686871277620>`);
    if (userPick == "scissors" && botPicked == "paper") return message.channel.send(`You picked \`${userPick}\` and I picked \`${botPicked}\`. You beat me! <a:sad:737129705685123124>`);
};

exports.help = {
    name: "rps",
    description: "Play RPS with me!",
    usage: "rps [rock/paper/scissors]",
    category: "Fun"
  }
  
  exports.aliases = []

const Discord = require('discord.js')

exports.run = (client, message, args) => {
    let validPicks = ["rock", "paper", "scissors"];
    let userPick = args.join(` `).toLowerCase();
    if (!validPicks.includes(userPick) || !userPick) return message.channel.send(`Your pick wasn't rock, paper, or scissors!`)
    let botPicked = validPicks[Math.floor(Math.random() * validPicks.length)];
    //rock
    if (userPick == "rock" && botPicked == "rock") return message.channel.send(`You picked \`${userPick}\` and I picked also picked \`${botPicked}\`. It's a tie! :sweat_smile:`);
    if (userPick == "rock" && botPicked == "paper") return message.channel.send(`You picked \`${userPick}\` and I picked \`${botPicked}\`. I beat you! <a:yay:737073686871277620>`);
    if (userPick == "rock" && botPicked == "scissors") return message.channel.send(`You picked \`${userPick}\` and I picked \`${botPicked}\`. You beat me! <a:sad:737129705685123124>`);
    //paper
    if (userPick == "paper" && botPicked == "paper") return message.channel.send(`You picked \`${userPick}\` and I also picked \`${botPicked}\`. It's a tie! :sweat_smile:`);
    if (userPick == "paper" && botPicked == "rock") return message.channel.send(`You picked \`${userPick}\` and I picked \`${botPicked}\`. You beat me! <a:sad:737129705685123124>`);
    if (userPick == "paper" && botPicked == "scissors") return message.channel.send(`You picked \`${userPick}\` and I picked \`${botPicked}\`. I beat you! <a:yay:737073686871277620>`);
    //scrissors
    if (userPick == "scissors" && botPicked == "scissors") return message.channel.send(`You picked \`${userPick}\` and I also picked \`${botPicked}\`. It's a tie! :sweat_smile:`);
    if (userPick == "scissors" && botPicked == "rock") return message.channel.send(`You picked \`${userPick}\` and I picked \`${botPicked}\`. I beat you! <a:yay:737073686871277620>`);
    if (userPick == "scissors" && botPicked == "paper") return message.channel.send(`You picked \`${userPick}\` and I picked \`${botPicked}\`. You beat me! <a:sad:737129705685123124>`);
    //Rock
    if (userPick == "Rock" && botPicked == "rock") return message.channel.send(`You picked \`rock\` and I picked also picked \`${botPicked}\`. It's a tie! :sweat_smile:`);
    if (userPick == "Rock" && botPicked == "paper") return message.channel.send(`You picked \`rock\` and I picked \`${botPicked}\`. I beat you! <a:yay:737073686871277620>`);
    if (userPick == "Rock" && botPicked == "scissors") return message.channel.send(`You picked \`rock\` and I picked \`${botPicked}\`. You beat me! <a:sad:737129705685123124>`);
    //Paper
    if (userPick == "Paper" && botPicked == "paper") return message.channel.send(`You picked \`paper\` and I also picked \`${botPicked}\`. It's a tie! :sweat_smile:`);
    if (userPick == "Paper" && botPicked == "rock") return message.channel.send(`You picked \`paper\` and I picked \`${botPicked}\`. You beat me! <a:sad:737129705685123124>`);
    if (userPick == "Paper" && botPicked == "scissors") return message.channel.send(`You picked \`paper\` and I picked \`${botPicked}\`. I beat you! <a:yay:737073686871277620>`);
    //Scrissors
    if (userPick == "Scissors" && botPicked == "scissors") return message.channel.send(`You picked \`scissors\` and I also picked \`${botPicked}\`. It's a tie! :sweat_smile:`);
    if (userPick == "Scissors" && botPicked == "rock") return message.channel.send(`You picked \`scissors\` and I picked \`${botPicked}\`. I beat you! <a:yay:737073686871277620>`);
    if (userPick == "Scissors" && botPicked == "paper") return message.channel.send(`You picked \`$scissors\` and I picked \`${botPicked}\`. You beat me! <a:sad:737129705685123124>`);
};

exports.help = {
    name: "rps",
    description: "Play RPS with me!",
    usage: "rps [rock/paper/scissors]",
    category: "Fun"
  }
  
  exports.aliases = []

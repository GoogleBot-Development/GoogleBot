const Discord = require('discord.js');
const recursive = require("recursive-readdir");
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");

exports.run = (client, message, args) => {
 args = args.join(" ")
   let fun = [], actions = [], search = [], important = [], utility = [], links = [], economy = [], animals = [], covid = []

  if (!args) {
   
recursive("./commands/", function (err, files) {

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  jsfile.forEach((f, i) => {
    if (f === "commands/Moderator/msgLog.js") return;
    let props = require(`../../${f}`);
    if (f.startsWith("commands/Fun")) fun.push(`\`${props.help.name}\``)
    if (f.startsWith("commands/Utility")) utility.push(`\`${props.help.name}\``)
    if (f.startsWith("commands/Search")) search.push(`\`${props.help.name}\``)
    if (f.startsWith("commands/Actions")) actions.push(`\`${props.help.name}\``)
    if (f.startsWith("commands/Important")) important.push(`\`${props.help.name}\``)
    if (f.startsWith("commands/Links")) links.push(`\`${props.help.name}\``)
    if (f.startsWith("commands/Economy")) economy.push(`\`${props.help.name}\``)
    if (f.startsWith("commands/Animals")) animals.push(`\`${props.help.name}\``)
    if (f.startsWith("commands/Coronavirus")) covid.push(`\`${props.help.name}\``)
})

  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor("GoogleBot Command List", message.author.displayAvatarURL({dynamic: true}))
  .setDescription("Hello! This is my command list of all the commands that I have to offer you! Need help? Join our support server by clicking [here](https://discord.gg/y6Zxauk).\n\nDo `g!help [command name]` to see more information on a command!\n")
  .addField(`:pushpin:  Important Commands - (${important.length})  :pushpin:`, important.join(", "))
  .addField(`:punch:  Action Commands - (${actions.length})  :punch:`, actions.join(", "))
  .addField(`:cat:  Animal Commands - (${animals.length})  :cat:`, animals.join(", "))
  .addField(`:thermometer:  COVID-19 Commands - (${covid.length})  :thermometer:`, covid.join(", "))
  .addField(`:moneybag:  Economy Commands - (${economy.length})  :moneybag:`, economy.join(", "))
  .addField(`:8ball:  Fun Commands - (${fun.length})  :8ball:`, fun.join(", "))
  .addField(`:link:  Link Shorteners - (${links.length})  :link:`, links.join(", "))
  .addField(`:mag:  Search Commands - (${search.length})  :mag:`, search.join(", "))
  .addField(`:tools:  Utility Commands - (${utility.length})  :tools:`, utility.join(", "))
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL({dynamic: true}))
  message.channel.send(embed)

  });
  } else {
    let cmd = client.commands.get(args.toLowerCase())
    if (!cmd) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("That is not a valid command!"))
    if (cmd.help.category === "Administrator") return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("That is not a valid command!"))



    let aliases;
    if (cmd.aliases.length > 0) aliases = cmd.aliases.join(", ")
    else aliases = "None"
    console.log(aliases)
    const embed2 = new Discord.MessageEmbed()
    .setDescription(`Command Info on **${cmd.help.name}**\n\n**[Required Arguments]**\n**<Optional Arguments>**`)
    .setColor("RANDOM")
    .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
    .addField("Category", `**${cmd.help.category}**`, true)
    .addField("\u200b", "\u200b", true)
    .addField("Description", `**${cmd.help.description}**`, true)
    .addField("Usage", `**g!${cmd.help.usage}**`, true)
    .addField("\u200b", "\u200b", true)
    .addField("Aliases", `**${aliases}**`, true)
    message.channel.send(embed2)
  }
}

exports.help = {
  name: "help",
  description: "Shows all of my beautiful commands!",
  usage: "help <command name>",
  category: "Utility"
}

exports.aliases = ["cmds", "commands"]

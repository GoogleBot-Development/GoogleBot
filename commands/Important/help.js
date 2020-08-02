const Discord = require('discord.js');
const recursive = require("recursive-readdir");
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../../config.json");

exports.run = (client, message, args) => {
 args = args.join(" ")
   let fun = [], actions = [], google = [], important = [], utility = []

  if (!args) {
   
recursive("./commands/", function (err, files) {

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  jsfile.forEach((f, i) => {
    if (f === "commands/Moderator/msgLog.js") return;
    let props = require(`../../${f}`);
    if (f.startsWith("commands/Fun")) fun.push(`\`${props.help.name}\``)
    if (f.startsWith("commands/Utility")) utility.push(`\`${props.help.name}\``)
    if (f.startsWith("commands/Google")) google.push(`\`${props.help.name}\``)
    if (f.startsWith("commands/Actions")) actions.push(`\`${props.help.name}\``)
    if (f.startsWith("commands/Important")) important.push(`\`${props.help.name}\``)
})

  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor("GoogleBot Command List", message.author.displayAvatarURL({format: "png"}))
  .setDescription("Hello! This is my command list of all the commands that I have to offer you! Need help? Join our support server by clicking [here](https://discord.gg/4a9pk8q).\n\nDo `g!help [command name]` to see more information on a command!")
  .setThumbnail(client.user.displayAvatarURL())
  .addField("Important Commands", important.join(", "))
  .addField("Google Commands", google.join(", "))
  .addField("Fun Commands", fun.join(", "))
  .addField("Action Commands", actions.join(", "))
  .addField("Utility Commands", utility.join(", "))
  .setTimestamp()
  .setFooter(`© ${name} ${year} | ${version}`, message.client.user.displayAvatarURL( { format: "png" } ))
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
    .setColor("#4CEF8B")
    .setThumbnail(client.user.displayAvatarURL())
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
  usage: "help [command name]",
  category: "Utility"
}



exports.aliases = ["cmds", "commands"]

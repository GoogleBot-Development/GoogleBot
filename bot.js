const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client()

const snekfetch = require('snekfetch');
const DBL = require("dblapi.js");
const dbl = new DBL(`${dblToken}`, client);

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()

client.on("ready", async () => {
  client.shard.fetchClientValues('guilds.cache.size')
	.then(results => {
		let food = (`${results.reduce((prev, guildCount) => prev + guildCount, 0)}`);
setInterval(() => {
  snekfetch.post(`https://discordbots.org/api/bots/stats`)
    .set('Authorization', `${dblToken}`)
    .send({ server_count: food })
    .then(() => console.log(`Updated top.gg server count`))
    .catch(err => console.error(`Whoops something went wrong: ${err.body}`));
}, 300000)
  }).catch(console.error)
})

require("fs").readdir("./events/", (err, files) => {
  if (err) return console.error(err);

  console.log(`Loading ${files.length} Events!`);
  files.forEach((f, i) => {
    if (!f.endsWith(".js")) return;

    const event = require(`./events/${f}`);

    console.log(`${i + 1}: ${f} loaded!`);

    let eventName = f.split(".")[0];

    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${f}`)];
  });
});

const recursive = require("recursive-readdir");

recursive("./commands/", function (err, files) {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if (jsfiles.length <= 0) {
    process.stdout.write("Do you mind making the commands first?\n".red);
    return;
  }

  console.log(`\nLoading ${jsfiles.length} commands!`);

  jsfiles.forEach((f, i) => {
    delete require.cache[require.resolve(`./${f}`)];
    let props = require(`./${f}`);
    console.log(`${i + 1}: ${f} loaded!`);
    client.commands.set(props.help.name, props);
    props.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
});
});


client.on('message', message =>{
  if (message.author.bot) return;

  if (message.channel.type === "dm") return message.reply("please use that command inside a server!")
    
  let prefix = "g!"
  if (bannedIDs.some(id => message.author.id === id)) return message.channel.send("You cannot use this command, as you have been bot banned. Join the support server to appeal your ban.")
  if(bannedServerIDs.some(b => message.guild.id == b)) return message.channel.send("You cannot use this command, as this server has been bot banned. Join the support server to appeal the ban.")
    

  let messageArray = message.content.split(/\s+/g);
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if (!command.startsWith(prefix)) return;

  let cmd = client.commands.get(command.slice(prefix.length).toLowerCase());
  let alias = client.aliases.get(command.slice(prefix.length).toLowerCase());
  if (cmd) {
    cmd.run(client, message, args)
    ranCommand(cmd)
  }
  if (alias) {
    client.commands.get(alias).run(client, message, args)
    ranCommand(client.commands.get(alias))
  }
  
  function ranCommand(c) {
    const log = client.channels.cache.get("737634243856957440")
    const webhook = new Discord.WebhookClient("737634618945044521", "VYbbEr87UpsKZNvZgHSbiyilpd718gz3fUUX7j3s-1AHjzrI2MEYR0xSMb0HwT50vmcK")
    
    webhook.send(new Discord.MessageEmbed().setColor(0x008000).setTitle("Command Ran").setDescription(`**User** - ${message.author.tag}\n**Ran in** - ${message.guild.name}\n**Command Ran** - g!${c.help.name}`).setThumbnail(message.author.displayAvatarURL()))
  }
    
})

client.login(token)

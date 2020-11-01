const Discord = require('discord.js')
const client = new Discord.Client()

exports.run = async (client, message, args) => {
if(message.author.id !== "667354950321569792") return
  let fish = message.guild.shard.id + 1
  let serverid = args[0]
  let reason = args.slice(1).join(" ")
  if(!serverid) return message.channel.send("You must give a server ID to make me leave!")
  if(!reason) return message.channel.send("You must give me a reason to make me leave the server!")
  let server = client.shard.broadcastEval("this.guilds.cache.get(`${serverid}`)")
  client.shard.broadcastEval("this.guilds.cache.get(`${serverid}`).leave()")
  message.channel.send(`I have just left: ${server.name} (${server.id}) with reason: ${reason}`)
  console.log(`[Shard #${fish}] I was forced to leave: ${server.name} ({server.id}) with reason: ${reason}`)
}

exports.help = {
  name: "serverleave",
  description: "Makes me leave a server!",
  usage: "serverleave [serverid] [reason]",
  category: "Administrator"
}

exports.aliases = ["sl"]

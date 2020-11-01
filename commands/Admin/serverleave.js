const Discord = require('discord.js')
const client = new Discord.Client()

exports.run = async (client, message, args) => {
if(message.author.id !== "667354950321569792") return
  let id = args[0]
  if(!id) return message.channel.send("You must give a server ID to make me leave!")
  
  let fish = message.guild.shard.id + 1
  
  let server = message.client.shard.broadcastEval("this.guilds.cache.get(id)")
  
  let reason = args.slice(1).join(" ")
  
  if(!reason) return message.channel.send("You must give me a reason to make me leave the server!")
  
  message.client.shard.broadcastEval("this.guilds.cache.get(id).leave()")
  
  message.channel.send(`I have just left: ${server.name} (${id}) with reason: ${reason}`)
  
  console.log(`[Shard #${fish}] I was forced to leave: ${server.name} (${id}) with reason: ${reason}`)
}

exports.help = {
  name: "serverleave",
  description: "Makes me leave a server!",
  usage: "serverleave [serverid] [reason]",
  category: "Administrator"
}

exports.aliases = ["sl"]

exports.run = async (client, message, args) => {
    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
    if (!client.distube.isPlaying(message)) return message.channel.send(`${client.emotes.error} | There is nothing playing!`)
    client.distube.stop(message);
    message.channel.send(`${client.emotes.success} | Stopped!`)
  }

exports.help = {
  name: "stop",
  description: "Makes me stop playing music and makes me leave the channel!",
  usage: "stop",
  category: "Music"
}

exports.aliases = ["dc", "disconnect", "fuckoff", "leave"]

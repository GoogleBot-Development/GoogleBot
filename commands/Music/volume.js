exports.run = async (client, message, args) => {
    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
    if (!client.distube.isPlaying(message)) return message.channel.send(`${client.emotes.error} | There is nothing playing!`)
    let volume = parseInt(args[0]);
    if(volume < 0 || volume > 1000) return message.channel.send(`${client.emotes.error} | You cannot set the volume to that! You can only change the volume from 0-1000.`)
    if (isNaN(volume)) return message.channel.send(`${client.emotes.error} | Please enter a valid number!`)
    client.distube.setVolume(message, volume);
    message.channel.send(`${client.emotes.success} | Volume set to \`${volume}\``)
  }

exports.help = {
  name: "volume",
  description: "Allows you to toggle the volume of the music that is playing!",
  usage: "volume",
  category: "Music"
}

exports.aliases = ["vol"]

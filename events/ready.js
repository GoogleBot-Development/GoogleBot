module.exports = (client) => {
  console.log(`The shard launched successfully!`);
  
  setInterval(function() {
      let statuses = [ `g!help | 3 shards`, `people ping me...`, `g!help | Over 2500 servers!`, `Discord verify bots...` ];
      let status = statuses[Math.floor(Math.random()*statuses.length)];

      client.user.setActivity(`${status}`, { type: 'WATCHING' })
  }, 10000)
}

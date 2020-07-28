module.exports = (client) => {
  console.log(`The shard launched successfully!`);
  
  setInterval(function() {
      let statuses = [ `g!help | 2 shards`, `g!help | Over 2300 servers!` ];
      let status = statuses[Math.floor(Math.random()*statuses.length)];

      client.user.setActivity(`${status}`, { type: 'WATCHING' })
  }, 10000)
}

module.exports = (client) => {
  console.log(`The shard launched successfully!`);
  
client.shard.fetchClientValues('guilds.cache.size')
    .then(results => {
        client.user.setActivity(`${results.reduce((prev, guildCount) => prev + guildCount, 0)} total servers!`);
    })
    .catch(console.error);
}

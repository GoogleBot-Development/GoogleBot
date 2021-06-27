const { ShardingManager } = require('discord.js');
const config = require('./config.json')
const manager = new ShardingManager('./bot.js', { token: config.token, autoSpawn: true, respawn: true });

manager.spawn(7)
manager.on('shardCreate', shard => console.log(`Launching Shard ${shard.id+1}!`));

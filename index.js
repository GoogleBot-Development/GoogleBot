const { ShardingManager } = require('discord.js');
const config = require('./config.json')
const manager = new ShardingManager('./bot.js', { token: config.token });

manager.spawn(5)
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

const mongoose = require('mongoose')
const { prefix, token, version, name, ownerID, ownerUsername, mainVersion, year, bannedIDs, bannedServerIDs, dblToken } = require("../config.json");

module.exports = (client) => {
  console.log(`The shard launched successfully!`)
  mongoose.connect(require('../config.json').mongo, {useNewUrlParser: true, useUnifiedTopology: true})

    setInterval(function() {
      let fish = client.shard.ids[0] + 1
        let links = [`https://www.twitch.tv/Jeydin21`, "https://www.twitch.tv/Jeydin21"];
        let statusLinks = links[Math.floor(Math.random()*links.length)];

        let statuses = ["g!help | g!invite", `g!help | ${version}`, `g!help | Shard:${fish}`]
        let status = statuses[Math.floor(Math.random()*statuses.length)];
  
        client.user.setActivity(status, {
            type: "STREAMING",
            url: statusLinks
          });
    }, 10000)
}

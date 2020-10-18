const fs = require("fs");
var userban = require("../../userbans.json")

exports.run = async (client, message, args) => {
  if(message.author.id !== "667354950321569792") return
  			let user = message.mentions.users.first() || client.shard.broadcastEval(`client.users.cache.get(args[0])`)
        let reason = args.slice(1).join(" ")
        if(!user) return message.channel.send("You must give someone to add to the User Bot Ban Database!")
        if(!reason) return message.channel.send("You must give a reason!")
				userban[user.id] = {'username': user.tag, 'reason': reason}
				fs.writeFile("./userbans.json", JSON.stringify(userban, null, 4), function(err){
	          	if (err) { console.log(log_time() + log_error + err) }
	            })
        message.channel.send(`Added the user, **${user.tag}** (**${user.id}**), to the User Bot Ban Database! Reason: **${reason}**`)
};

exports.help = {
    name: "userban",
    description: "Adds a user to the User Bot Ban Database!",
    usage: "userban [@user/ID]",
    category: "Administrator"
}

exports.aliases = []

const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args, Discord, con, errorHandle) =>
{
    function getUserFromMention(mention){
        if(!mention) return;
        if(mention.startsWith('<@') && mention.endsWith('>')){
            mention = mention.slice(2, -1);
        }
        if(mention.startsWith('!')){
            mention = mention.slice(1);
        }
        return client.users.get(mention)
    }
con.query(`SELECT* FROM messages WHERE DiscordName = '${message.author.username}'`, (err, rows)=> {
    message.channel.send(rows)
    var lCode0 = "```javascript\n" + rows.DiscordName + "\n```"
    message.channel.send(lCode0).then(message =>{message.delete(10000)})

    console.log(rows)
})
}

module.exports.config = 
{
    name: 'sqlprint',
   aliases: ["None"],
   permission: "Mod",
   description: "Just no",
   usage: "No",
   category: "NOOO",
   enabled: false
}
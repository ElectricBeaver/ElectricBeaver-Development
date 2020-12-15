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
  message.channel.send("it works")
  let user = getUserFromMention(args[0]);
//  console.log(user.username)
  con.query(`SELECT * FROM administrative WHERE User = '${user.username}' `, (err, rows)=>{
   let amq;
   let Warns = rows[0].warnings
   let tWarn = Warns+1  
console.log(rows)
       amq = `UPDATE administrative SET Warnings = ${tWarn} WHERE User = '${user.username}'`
con.query(amq)
})  
}

module.exports.config = 
{
    name: 'wan',
   aliases: ["w"],
   permission: "t",
   description: "6",
   usage: "45",
   category: "66",
   enabled: true
}
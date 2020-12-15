const Discord = require('discord.js');
const moment = require('moment');
const mysql = require('mysql');
module.exports.run = async (client, message, args, Discord, con, data, errorHandle, footerMessage) =>
{
    /*const data = mysql.createConnection({
        host: "localhost",
        user: "Bot",
        password: "IloveKatV2",
        database: "electricbeaver"
    })*/
    message.delete()
  
    
        
        try{
            const user = message.author.username
            console.log(message.author.username)
            data.query(`SELECT * FROM messages WHERE UserName = '${message.author.username}'`, function (err, rows, feilds) {
                //console.log(results)
                if(err){console.log(err)}
                let Name = rows[0].UserName
                let xp = rows[0].Xp
                let messageCount = rows[0].Messages
                let commandCount = rows[0].Commands
                let level = rows[0].mLevel
                
                if(err) message.channel.send(err);
                const xpEmbed = new Discord.RichEmbed()
                .setTitle('~XP~')
                .addField('Name', Name, true)
                .addField('Xp', xp,true)
                .addField('Message Count', messageCount)
                .addField('Command Count', commandCount, true)
                .addField('Level', level, true)
                .setFooter(footerMessage)
                .setColor("#e88cff")
                message.channel.send(xpEmbed)            
    
            })
    
    
        }catch(err){
            message.channel.send(err)
        }
   
    //#region Select From SQL
        
    



    //#endregion
  

}

module.exports.config = 
{
   name: 'xp',
   aliases: ["None"],
   Accessable: "Member",
   description: "Shows the users stats",
   usage: ";xp",
   category: "xp",
   enabled: true
}
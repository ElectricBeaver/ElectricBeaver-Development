const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args, Discord, con, errorHandle) =>
{
 /*   con.query('SELECT * FROM messages ORDER BY messages DESC', (err, rows) => {
    var lCode0 = "```javascript\n" + rows[0].DiscordName + "{\n" + "   UserID: " + rows[0].UserID + "\n   Messages: " + rows[0].Messages + "\n   Commands:" +rows[0].Commands + "\n   Xp: " + rows[0].XP + "}\n" + rows[1].DiscordName + "{\n" + "   UserID: " + rows[1].UserID + "\n   Messages: " + rows[1].Messages + "\n   Commands:" + rows[1].Commands + "\n   Xp: " + rows[1].XP + "}\n" + rows[2].DiscordName + "{\n" + "   UserID: " + rows[2].UserID + "\n   Messages: " + rows[2].Messages + "\n   Commands:" + rows[2].Commands +   "\n   Xp: " + rows[2].XP + "}\n" +  rows[3].DiscordName + "{\n" + "   UserID: " + rows[2].UserID + "\n   Messages: " + rows[3].Messages + "\n   Commands:" + rows[3].Commands +   "\n   Xp: " + rows[3].XP + "}\n" + "\n ```" 
    //var lCode1 =  rows[4].DiscordName + "{\n" + "   UserID: " + rows[4].UserID + "\n   Messages: " + rows[4].Messages + "\n Commands:" + rows[4].Commands +   "\n   Xp: " + rows[4].XP + "}\n" + rows[5].DiscordName + "{\n" + "   UserID: " + rows[5].UserID + "\n   Messages: " + rows[5].Messages +  "\n   Xp: " + rows[5].XP + "}\n" + rows[6].DiscordName + "{\n" + "   UserID: " + rows[6].UserID + "\n   Messages: " + rows[6].Messages +  "\n   Xp: " + rows[6].XP + "}\n" +  rows[7].DiscordName + "{\n" + "   UserID: " + rows[7].UserID + "\n   Messages: " + rows[7].Messages +  "\n   Xp: " + rows[7].XP + "}\n" 
    //var lCode2 =  rows[8].DiscordName + "{\n" + "   UserID: " + rows[8].UserID + "\n   Messages: " + rows[8].Messages +  "\n   Xp: " + rows[8].XP + "}\n" + rows[9].DiscordName + "{\n" + "   UserID: " + rows[9].UserID + "\n   Messages: " + rows[9].Messages +  "\n   Xp: " + rows[9].XP + "}\n" + rows[10].DiscordName + "{\n" + "   UserID: " + rows[10].UserID + "\n   Messages: " + rows[10].Messages +  "\n   Xp: " + rows[10].XP + "}\n" +  rows[11].DiscordName + "{\n" + "   UserID: " + rows[11].UserID + "\n   Messages: " + rows[11].Messages +  "\n   Xp: " + rows[11].XP + "}\n"
   // var lCode3 =  rows[12].DiscordName + "{\n" + "   UserID: " + rows[12].UserID + "\n   Messages: " + rows[12].Messages +  "\n   Xp: " + rows[12].XP + "}" + "\n ```"

    const leader = new Discord.RichEmbed() 
.setTitle('~Leaders~')
.addField(`${rows[0].DiscordName}`)
        //message.channel.send(`${rows[0].DiscordName}: ${rows[0].Messages}`)
        message.channel.send(lCode0 /*+ lCode1 + lCode2 + lCode3//)
        console.log(rows)
    })*/

}

module.exports.config = 
{
   Name: 'list',
   aliases: ["none"],
   permission: "",
   description: "",
   usage: "",
   category: "",
   enabled: true
}
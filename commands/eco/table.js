const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args, Discord, con, data, errorHandle) =>
{
    message.delete()
    data.query('SELECT * FROM messages ORDER BY messages DESC', (err, rows) => {
        //#region old
        var lCode0 = "```javascript\n" + rows[0].UserName + "{\n" + "   Userid: " + rows[0].id + "\n   Messages: " + rows[0].Messages + "\n   Commands:" +rows[0].Commands + "\n   Xp: " + rows[0].Xp + "}\n" + rows[1].UserName+ "{\n" + "   Userid: " + rows[1].id + "\n   Messages: " + rows[1].Messages + "\n   Commands:" + rows[1].Commands + "\n   Xp: " + rows[1].Xp + "}\n" + rows[2].UserName+ "{\n" + "   Userid: " + rows[2].id + "\n   Messages: " + rows[2].Messages + "\n   Commands:" + rows[2].Commands +   "\n   Xp: " + rows[2].Xp + "}\n" +  rows[3].UserName+ "{\n" + "   Userid: " + rows[3].id + "\n   Messages: " + rows[3].Messages + "\n   Commands:" + rows[3].Commands +   "\n   Xp: " + rows[3].Xp + "}\n" + "\n ```" 
        //var lCode1 =  rows[4].UserName+ "{\n" + "   Userid: " + rows[4].Userid + "\n   Messages: " + rows[4].Messages + "\n Commands:" + rows[4].Commands +   "\n   Xp: " + rows[4].Xp + "}\n" + rows[5].UserName+ "{\n" + "   Userid: " + rows[5].Userid + "\n   Messages: " + rows[5].Messages +  "\n   Xp: " + rows[5].Xp + "}\n" + rows[6].UserName+ "{\n" + "   Userid: " + rows[6].Userid + "\n   Messages: " + rows[6].Messages +  "\n   Xp: " + rows[6].Xp + "}\n" +  rows[7].UserName+ "{\n" + "   Userid: " + rows[7].Userid + "\n   Messages: " + rows[7].Messages +  "\n   Xp: " + rows[7].Xp + "}\n" 
        //var lCode2 =  rows[8].UserName+ "{\n" + "   Userid: " + rows[8].Userid + "\n   Messages: " + rows[8].Messages +  "\n   Xp: " + rows[8].Xp + "}\n" + rows[9].UserName+ "{\n" + "   Userid: " + rows[9].Userid + "\n   Messages: " + rows[9].Messages +  "\n   Xp: " + rows[9].Xp + "}\n" + rows[10].UserName+ "{\n" + "   Userid: " + rows[10].Userid + "\n   Messages: " + rows[10].Messages +  "\n   Xp: " + rows[10].Xp + "}\n" +  rows[11].UserName+ "{\n" + "   Userid: " + rows[11].Userid + "\n   Messages: " + rows[11].Messages +  "\n   Xp: " + rows[11].Xp + "}\n"
        //var lCode3 =  rows[12].UserName+ "{\n" + "   Userid: " + rows[12].Userid + "\n   Messages: " + rows[12].Messages +  "\n   Xp: " + rows[12].Xp + "}" + "\n ```"

    const leader = new Discord.RichEmbed() 
.setTitle('~Leaders~')
.setDescription(lCode0)

message.channel.send(leader)
        //message.channel.send(`${rows[0].DiscordName}: ${rows[0].Messages}`)
        //message.channel.send(lCode0 + lCode1 + lCode2 + lCode3)
       // console.log(rows) 
       //#endregion
    
       /* let x = rows.toString()
        message.channel.send(x)*/
    })

}

module.exports.config = 
{
   name: 'list',
   aliases: ["table"],
   permission: "Member",
   description: "Shows the top 4 users",
   usage: "table",
   category: "Xp",
   enabled: true
}
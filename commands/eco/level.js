const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args, Discord, con, data, errorHandle) =>
{
    message.delete()
    data.query(`SELECT * FROM messages WHERE UserName = '${message.author.username}'`, (err, rows) => {
    let xp = rows[0].Xp
    let level = rows[0].mLevel
    
    //const nextLevel = 1000 * (Math.pow(2, level) - 1);
    const nextLevel = 1000 * level - 1
    const xpAmount = nextLevel - xp
    //console.log(nextLevel + " next level")
    const levelEmbed = new Discord.RichEmbed()
    .setTitle('~Level~')
    .addField('Current Level', level)
    .addField('Current XP', xp)
    .addField('Xp needed', xpAmount)
    .setFooter(`${message.author.username}'s`)
    .setColor('#0097f5')
    message.channel.send(levelEmbed)

})
  
   

}

module.exports.config = 
{
   name: 'level',
   aliases: ["None"],
   Accessable: "Member",
   description: "Users Level Stats",
   usage: ";level",
   category: "Eco",
   enabled: true
}
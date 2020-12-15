const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args, Discord, con, data, errorHandle, footerMessage) =>
{
    message.delete()
    
    data.query(`SELECT * FROM ecobank WHERE UserName = '${message.author.username}'`, (err, rows)=>{

        let bank = rows[0].Bank
        let pocket = rows[0].Pocket

        const money = new Discord.RichEmbed()
        .setTitle(`${message.author.username}'s Balance`)
        .setDescription(`**Bank**: ${bank}\n**Pocket**: ${pocket}`)
        .setFooter(footerMessage)
        .setColor('#387322')
        message.channel.send(money)

    })

}

module.exports.config = 
{
   name: 'balance',
   aliases: ["bal"],
   Accessable: "Member",
   description: "Used to check the users balance",
   usage: "balance",
   category: "Eco",
   enabled: true
}
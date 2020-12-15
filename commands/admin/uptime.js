const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args, Discord, con, errorHandle) =>
{
    message.delete()
    try{
    let totalSeconds = (client.uptime / 1000)
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    const uptime = new Discord.RichEmbed()
    .setTitle("~uptime~", client.iconURL)
    .setColor('#2b5eaf')
    .addField('Days', days, true)
    .addField('Hours', hours, true)
    .addField("Minutes", minutes, true)
    .addField('Seconds', seconds,true)
    .setFooter("Yeah I'm that specific. Deal with it.")
    message.channel.send(uptime)
    }catch(err){
        try{
            errorHandle
            }catch(err){Console.log(err)}
    }
}

module.exports.config = 
{
    name: 'uptime',
   aliases: ["None"],
   Accessable: "Members",
   description: "To get the amount of time the bot has been online in Days, Hours, Minutes, Seconds",
   usage: ".Uptime",
   category: "General",
   enabled: true
}

const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args, Discord, con, errorHandle) =>
{
    const invite = new Discord.RichEmbed()
    .setTitle("~Invite Link~")
    .addField("https://discordapp.com/oauth2/authorize?client_id=593875070087331840&scope=bot")
    message.channel.send(invite)
}

module.exports.config = 
{
    name: 'invite',
   aliases: [""],
   permission: "",
   description: "",
   usage: "",
   category: "",
   enabled: true
}
const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args, Discord, con, errorHandle) =>
{
    let user = message.mentions.members.first()
    message.channel.send(user)
}

module.exports.config = 
{
    name: 'user',
   aliases: ["None"],
   permission: "Mod",
   description: "Stop, No",
   usage: "No just No",
   category: "Stop reading this",
   enabled: false
}

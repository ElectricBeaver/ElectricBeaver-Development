const Discord = require('discord.js');
const moment = require('moment');
const ytdl = require('ytdl-core')
module.exports.run = async (client, message, args, Discord, con, errorHandle) =>
{
    var Server = servers[message.guild.id]
    Server.dipatcher.pause();
}

module.exports.config = 
{
    name: 'pause',
   aliases: [""],
   permission: "",
   description: "",
   usage: "",
   category: "",
   enabled: true
}
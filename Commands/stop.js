const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args, Discord, con, errorHandle) =>
{
    
    try{
        message.member.voiceChannel.leave()
    }catch(err){
            try{
               errorHandle
            }catch(err){
                console.log(err)
            }
    }
    
}

module.exports.config = 
{
    name: 'stop',
   aliases: [""],
   permission: "",
   description: "",
   usage: "",
   category: "",
   enabled: true
}
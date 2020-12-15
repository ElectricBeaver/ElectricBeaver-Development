const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args, Discord, con, errorHandle) =>
{
    /*let thing = message.guild.channels.find('name', "action log")
    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.reply("No, Fuck off")
    const gitEmbed = new Discord.RichEmbed()
    .setTitle("~Update~")
    .setDescription("An update has been posted on the github repos for me!") 
    //.url("https://github.com/discord-robit/OverLord")
    thing.send(gitEmbed)*/
}

module.exports.config = 
{
    name: 'git',
   aliases: [""],
   permission: "",
   description: "",
   usage: "",
   category: "",
   enabled: true
}
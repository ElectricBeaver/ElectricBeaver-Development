const Discord = require('discord.js');
const moment = require('moment');
const {prefix, token} = require('../../config.json')
module.exports.run = async (client, message, args, Discord, con, errorHandle) =>
{
    try{
    if(args[0] == "help") return message.reply("nah mate")
    if(args[0]){
        let command = args[0];
        if(client.commands.has(command)) {
            command = client.commands.get(command)
            var SHembed = new Discord.RichEmbed()
            .setAuthor("Help", message.guild.iconURL)
            //.setDescription(`The bot prefix is ${prefix}\n\n**Command: **${command.config.name}\n**Descripton: **${command.config.description || "No Description"}\n**Usage: **${command.config.usage || "No Usage"}\n**Accessable: **${command.config.Accessable || "Members"}\n **Aliases: **${command.config.aliases || "No Aliases"}` )
            .addField("The bot prefix is", prefix, true)
            .addField("Command", command.config.name, true)
            .addField("Descripton", command.config.description || "No Description")
            .addField('Usage', command.config.usage || "No Usage", true)
            .addField("Accessable", command.config.Accessable || "Members", true)
            .addField("Aliases", command.config.aliases || "No Aliases" )
            .addField("Category", command.config.category, true)
            .addField("Enabled", command.config.enabled, true)
            .setColor("#ffc382")

            message.channel.send(SHembed)
        }}
    if(!args[0]){
        const H = new Discord.RichEmbed()
        .setAuthor("Help", message.guild.iconURL)
        .setDescription(`For more information type '${prefix}help <commandname>'`)
        .addField("Enabled","Ascii, Help, Invite, pause, Play, Resume, Stop, Xp, Uptime, Ping" )
        .addField("Disabled", "---")
        .addField("Sorta Working", " ---")
        .addField("Josh Tested", "play")
        message.channel.send(H)
    }
    
    }catch(err){
        try{
            errorHandle
            }catch(err){Console.log(err)}
    }
}

module.exports.config = 
{
   name: 'help',
   aliases: ["h"],
   Accessable: "command permission",
   description: "command description",
   usage: "command usage",
   category: "command category",
   enabled: true
}
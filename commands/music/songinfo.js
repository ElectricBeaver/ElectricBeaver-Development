const Discord = require('discord.js');
const moment = require('moment');
const ytdl = require('ytdl-core')
const {getInfo} = require('ytdl-core')
module.exports.run = async (client, message, args, Discord, con, errorHandle) =>
{
    if(ytdl.validateURL(`${args}`) === false){
        message.reply("please provide a valid link idiot")
        return;
    }
console.log("yes")

    var Server = servers[message.guild.id]
    
    const songInfo = getInfo(args[0]).then(info =>{

   // console.log(info.items[0])
    const songinfoEmbed = new Discord.RichEmbed()
    .setTitle("~Song Info~")
    .setDescription(info.items[0].description)
    .addField("Title", info.items[0].title, true)
    .addField("Artist", info.items[0].artist,true)
    .addField("Author", info.items[0].uploader,true)
    .addField("Category", info.items[0].categories)
    .addField("view Count", info.items[0].view_count,true)
    .addField("Likes", info.items[0].like_count,true)
    .addField("Dislikes", info.items[0].dislike_count,true)
    .setColor("#ff0000")
    //message.channel.send(info.items[0])
    message.channel.send(songinfoEmbed)
    })
}

module.exports.config = 
{
    name: 'sinfo',
   aliases: [""],
   permission: "",
   description: "",
   usage: "",
   category: "",
   enabled: true
}
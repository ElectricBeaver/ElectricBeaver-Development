const Discord = require('discord.js');
const moment = require('moment');
const ytdl = require('ytdl-core')
const {Util} = require('discord.js')
const {getInfo} = require('ytdl-getinfo')
function Play(connection, message)
{
    var Server = servers[message.guild.id]
    Server.dipatcher = connection.playStream(ytdl(Server.queue[0], {filter: "audioonly"}))
    Server.queue.shift();
    Server.dipatcher.on("end", function(){
        if(Server.queue[0])
        {
            Play(connection,message)
            
        }
        else{
            connection.disconnect();
        }
    })
}

module.exports.run = async (client, msg, args, con, Discord ) =>
{
    if(!msg.content.includes('https://')){
       msg.channel.send("Please provide a valid url")
        return;
    }  
   try{ if(msg.member.voiceChannel)
    {
        if(!msg.guild.voiceConnection)
        {
            if(!servers[msg.guild.id])
            {
                servers[msg.guild.id] = {queue:[]}
            }
           if(ytdl.validateURL(`${args}`) === false){
                    msg.reply("please provide a valid link idiot")
                    return;
                }
            msg.member.voiceChannel.join()
            .then(async function(connection){
                var Server = servers[msg.guild.id]
                
				msg.reply('Gotcha, imma play that')
                Server.queue.push(`${args}`)
                console.log(Server.queue)
                Play(connection, msg);
                const songInfo = await getInfo(args[0]).then(info =>{
                     /* const song = {
                    id: songInfo.video_id,
                    title: Util.escapeMarkdown(songInfo.title),
                    url: songInfo.video_url,
                    author: songInfo.getAuthor(),
                    published: songInfo.extras.getPublished(body),
                    description: songInfo.extras.getVideoDescription(body),
                };*/
               // console.log(info.items[0])
                const songinfoEmbed = new Discord.RichEmbed()
                .setTitle("~Song Info~")
                //.setDescription(info.items[0].description)
                .addField("Title", info.items[0].title, true)
                .addField("Artist", info.items[0].artist,true)
                .addField("Author", info.items[0].uploader,true)
                .addField("Category", info.items[0].categories)
                .addField("view Count", info.items[0].view_count,true)
                .addField("Likes", info.items[0].like_count,true)
                .addField("Dislikes", info.items[0].dislike_count,true)
                .setColor("#ff0000")
                //message.channel.send(info.items[0])
				msg.delete
                msg.channel.send(songinfoEmbed)
                })
              
            })
        }else{
            msg.channel.send("Your addition to the queue has been noted... \n (We may not like it but its there.)").then(connection =>{
                var Server = servers[msg.guild.id]
                
                Server.queue.push(`${args}`)
                msg.channel.send(`[${Server.queue}]`)
                console.log(Server.queue)
            })
        }
    }
}catch(err)
{
        try{
            errorHandle
        }catch(err){
            console.log(err)
        }
}   

    
}

module.exports.config = 
{
    name: 'play',
   aliases: ["5054"],
   permission: "Member",
   description: "Play",
   usage: ".5054 <URL>",
   category: "Fun",
   enabled: true
}
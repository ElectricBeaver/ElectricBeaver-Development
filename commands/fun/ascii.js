const ascii = require('ascii-art')
const moment = require('moment')
module.exports.run = async (client, message, args, Discord, con, errorHandle) =>
{   
    function errorHandle(err){
        const errorEmbed0 = new Discord.RichEmbed()
         .setTitle('~There’s Been an Error~')
         .setDescription('So there’s been an error. Don’t worry it’s probably something little if this message came through. All you gotta do is contact the server owner and tell them to contact one of the devs')
         const errorEmbed1 = new Discord.RichEmbed()
         .setTitle('~There’s Been an Error~')
         .setDescription(err)
        message.channel.send(errorEmbed0 + errorEmbed1)
        }
      
    try
    {

   
    message.delete( );
    if(!args.join(' ')) return message.reply('Provide a word');
//arg[0] in doom for user selected
//if(args.length = 2000) return;
    ascii.font(args.join(' '), 'Doom', async txt =>{
       console.log(txt)

        txt = txt.trimRight();

        if(txt.length > 2000) return message.reply("No")


        message.channel.send(txt, {
            code: 'md'
        })
        let phone = new Discord.RichEmbed()
        .setTitle("~If You're Restarted~")
        .setDescription(args)
        message.channel.send(phone)
    })
    }catch(err){
        try{
         errorHandle
        }catch(err){Console.log(err)}
    }

    //commandlog.send("At " +  moment().format('LLLL') + " " + message.author.username + " sent The Ascii command in " + message.guild.name)
}
module.exports.config =
{
    name: 'ascii',
    aliases: ["a", "asskey"],
    Accessable: "Member",
    description: "Takes text and transforms it into ascii art",
    usage: ";ascii <text>",
    category: "General",
    enabled: true
    
}
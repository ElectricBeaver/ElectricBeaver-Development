const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args, Discord, con, errorHandle) =>
{
    message.delete()
   
  
     try{
       //#region old
        /*
    let commandlog = message.guild.channels.find(`name`, "commandlog");
    var PingEmbed = new Discord.RichEmbed()
         .setColor(0xFF0000)
         .setTitle("Pong!")
         .setDescription("It took me " +` ${new Date().getTime() - message.createdTimestamp + " ms"}` + " :timer: to respond!... If ping is really high like 100ms or more the bot may take some millseconds or seconds to respond...")
         message.channel.send(PingEmbed);
        const roles = message.guild.roles*/
        /* console.log("At " +  moment().format('LLLL') + " " + message.author.username + " sent The Ping command in " + message.guild.name)
         commandlog.send("At " +  moment().format('LLLL') + " " + message.author.username + " sent The Ping command in " + message.guild.name)*/
         //#endregion
         const m = await message.channel.send("Ping?");

         m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
        }catch(err){
        try{
        errorHandle
        }catch(err){Console.log(err)}
    }

}

module.exports.config = 
{
   name: 'ping',
   aliases: ["p"],
   Accessable: "Member",
   description: "The Ping command",
   usage: "ping",
   category: "General",
   enabled: true
}
const Discord = require('discord.js');
const moment = require('moment');
const token = 'NTkzODc1MDcwMDg3MzMxODQw.XRUPVQ.ZMiucLq2gfgnTaoaKCRPr2VXgus'

module.exports.run = async (client, message, args, Discord, con, errorHandle) =>
{
   if(message.author.id === '527954956574130176'){
        function resetBot(channel){
          message.channel.send("Restarting, This will only take a moment...")
          .then(msg => client.destroy())
          .then(() => client.login(token));

        }
        resetBot(message.channel)
    }else{
      message.reply("Sorry, you can't do that. If you give me some potato chips I may reconsider")
    }
  }

  

module.exports.config = 
{
    name: 'restart',
   aliases: [""],
   permission: "",
   description: "",
   usage: "",
   category: "",
   enabled: true
}

const Discord = require('discord.js');
const moment = require('moment');
const {OwnerID, CoOwnerID} = require("../../config.json")
const {inspect} = require('util')
module.exports.run = async (client, message, args, Discord, con, errorHandle) =>
{
    try{
        if(message.author.id == OwnerID || message.author.id == CoOwnerID || message.author.id == "414430696245952513"){
       let toEval = args.join(' ');
       let evauluated = inspect(eval(toEval, {depth: 0}))
        try{
            if(toEval){
                let hrStart = process.hrtime()
                let hrDiff;
                hrDiff = process.hrtime(hrStart)
                return message.channel.send(`*Exceuted in ${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ''}${hrDiff[1] / 1000000}ms, *\`\`\`javascrip\n${evauluated}\n\`\`\``, {maxLength: 1900})

            }else{
                message.channel.send("Error wile evaluatining")
            }
        }catch(err){
                   try{
                 message.channel.send(err)
        }catch(err){Console.log(err)}
    }    
    }else{
        return message.reply("No, you cant do that.").then(m => m.delete(10000))
    }
    }catch(err){
        message.channel.send(`There was an error while elvaluating \`\`\`${err}\`\`\``)
    }
    
}

module.exports.config = 
{
    name: 'eval',
   aliases: ["None"],
   permission: "Owner",
   description: "exicutes the arguments",
   usage: ";eval <code>",
   category: "Owner",
   enabled: true
}
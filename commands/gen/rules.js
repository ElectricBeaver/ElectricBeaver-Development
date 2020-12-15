const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args, Discord, con, errorHandle) =>
{
    message.delete()
    const rules = new Discord.RichEmbed()
    .setTitle("~Discord Rules~")
    .addField("⠀",'1.No disrespect to players or staff')
    .addField("⠀",'2.No racism that includes memes')
    .addField("⠀",'3.No doxing,Sending/Linking any harmful material such as viruses, IP grabbers or harmware | Will Result in immediate and perminate BAN')
    .addField("⠀",'4.No suicide threats')
    .addField("⠀",'5.No posting info about people including ip')
    .addField("⠀",'6.Usage of excessive extreme innapropriate langauge is prohibited')
    .addField("⠀",'7.Post content in the correct channels')
    .addField("⠀",'8.No spamming including pinging')
    .addField("⠀",'9.Do not argue with staff Decisions are final!')
    .addField("⠀",'10.No begging or repeatedly asking for help in the chat, please keep question in the #help-support channel or the forums. Repeatingly asking basic questions will lead to administative action')
    .addField("⠀",'11.No annoying, loud or high pitch noises')
    .addField("⠀",'12.Reduce the amount of background noise, if possible. Resort to push to talk in your settings to reduce the issue')
    .addField("⠀",'13.You are not aloud to advertise on this discord or server or it will be a Temp Ban')
    .setColor("#ff4000")
    .setFooter("Rules As of 9/8/2019")
    message.channel.send(rules)
    let x = 14.
    let y = "The border is 4k by 4k"
}
module.exports.config = 
{
   name: 'rules',
   aliases: ["p"],
   Accessable: "Member",
   description: "The Ping command",
   usage: "ping",
   category: "General",
   enabled: true
}
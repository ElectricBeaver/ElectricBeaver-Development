const Discord = require('discord.js');
const moment = require('moment');
const {guild} = require("discord.js")

module.exports.run = async (client, message, args, Discord, con, errorHandle) =>
{
  const server = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .addField("Creator", "ElectricBeaver#3507")
  .addField("Testers", "RobloxizGud#9863 | TeeHee#6837 ")
  .addField("Artwork", "Avatar - Zris#1786")
  .addField("Dev Discord", "https://discord.gg/pepQ3uP")
  .addField("Users", client.users.size, true)
  .addField("Servers", client.guilds.size, true)
  .addField("Channels", client.channels.size, true)
  
  .setColor("#992d22")
  .setFooter("I was created by ElectricBeaver#3507")
  message.channel.send(server)
}

module.exports.config = 
{
    name: 'info',
   aliases: ["None"],
   permission: "Mod",
   description: "Stop, No",
   usage: "No just No",
   category: "Stop reading this",
   enabled: false
}

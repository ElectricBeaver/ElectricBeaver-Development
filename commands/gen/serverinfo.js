const Discord = require('discord.js');
const moment = require('moment');
const {guild} = require("discord.js")

module.exports.run = async (client, message, args, Discord, con, errorHandle) =>
{
  const server = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .addField("Name", message.guild.name, true)
  .addField("ID", message.guild.name, true)
  .addField("Owner", `${message.guild.owner.username}#${message.guild.owner.discriminator}`, true)
  //.addField("Total | Humans | Bots", `${message.guild.size} | ${message.guild.members.filter(member =>)}`
  message.channel.send(server)
}

module.exports.config = 
{
    name: 'servers',
   aliases: ["None"],
   permission: "Mod",
   description: "Stop, No",
   usage: "No just No",
   category: "Stop reading this",
   enabled: false
}

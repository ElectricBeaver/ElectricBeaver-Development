//#region modules
const Discord = require('discord.js')
const fs = require('fs')
const colors = require('colors')
const moment = require('moment')
const log4js = require('log4js')
const mysql = require('mysql')
//#endregion
const client = new Discord.Client()
const {token, prefix, other, other1} = require('../config.json')




//#region ready
client.on("ready", async () =>
{
  console.log(`${colors.red('[SYS-LOG]')} Console Logger is Ready`)  
});
//#endregion

//#region logger
try{
  log4js.configure({
     levels:{
       CHAT: {value: 20002, colour: 'cyan'},
       EVEN: {value: 20005, colour: 'green'}
     },
    appenders:{
      console:{type: 'console'},
      file: {type: 'file', filename: 'logscript/logs/log.yaml'}
    },
    categories: {
     default: {appenders: ['console'], level: 'chat'},
     even: {appenders: ['file'], level: 'EVEN'}
    }
  });
}catch(err){
      console.log(err)
  }

//#endregion


//#region message
client.on("message", async message =>{
    let spy = message.content;
    let sUser = message.author.username;
    //let sGuild = message.guild.name;
    let sChannel = message.channel.name
   /*if(!message.channel.type === "dm" || message.channel.type === "group")
   {
     var sGuild = message.guild.name;
     var sChannel = message.channel.name;
   }else{
     var sGuild = "DM"
     var sChannel = "DM"
    }*/
 
    if(message.channel.id === "565674304482574336") return;
  if(message.channel.type === "dm") return;
  if(message.guild === "undefined"){
  var sGuild = "DM"
}else{
  var sGuild = message.guild.name
}

    
    if(!spy){let spy = "No text provided or picture image. Some lazy ass dev can't find out how to fix this."}
    let guildS =`${sGuild}`
    let channels = `]|Channel[`
    let channelS = `${sChannel}`
    let users = `]|` 
    let userS = `${sUser}`
    let colon = `: `
    let stringOneS = `${spy}`
    let stringOne = `[CHAT-LOG]`
    let string2 = `|Guild[`
    let string3 = `[CMDS-LOG]`
    let string4 = `[BOTS-LOG]`
    let coinAmt = Math.floor(Math.random() * 20) + 1;
    let baseAmt = Math.floor(Math.random() * 20) + 1;
if(sGuild === "ChatLogs2") return;
  function getUserFromMention(mention){
  if(!mention) return;
  if(mention.startsWith('<@') && mention.endsWith('>')){
      mention = mention.slice(2, -1);
  }
  if(mention.startsWith('!')){
      mention = mention.slice(1);
  }
  return client.users.get(mention)
}

    try{
    if(message.guild.name === "Trumpet Section 2019-2020"){
      log4js.configure({
        levels:{
          CHAT: {value: 20002, colour:'cyan'},
          CMDS: {value: 20003, colour:'red'},
          BOTS: {value: 20004, colour:'yellow'},
        },
        appenders:{
          console:{type: 'console'},
          file: {type: 'file', filename:'logs/trumpetlogs.yaml'},
          file2: {type: 'file', filename:'logs/dont.yaml'}
        },
        categories:{
          default:{appenders:['file2'], level: 'chat'},
          logs: {appenders: ['file'], level: 'chat'},
          cmds: {appenders: ['file'], level: 'cmds'},
          bots: {appenders: ['file'], level: 'bots'}
        }
      })
    }else{
      if(message.author.id === '566251904171245569') return;
      log4js.configure({
        levels:{
          CHAT: {value: 20002, colour:'cyan'},
          CMDS: {value: 20003, colour: 'red'},
          BOTS: {value: 20004, colour: 'yellow'},
         
        },
       appenders:{
         console:{type: 'console'},
         file: {type: 'file', filename:'logs/log.yaml'}
       },
       categories: {
        default: {appenders: ['console'], level: 'chat'},
        logs: {appenders: ['file'], level: 'chat'},
        cmds: {appenders: ['file'], level: 'cmds'},
        bots: {appenders: ['file'], level: 'bots'}
       
       }
     });
    }
 }catch(err){
   try{
       message.channel.send(`freaking error ${err}`)
   }catch(err){
       console.log(err)
   }
 }
 
   var logger = log4js.getLogger('logs')
   var Logger = log4js.getLogger('cmds')
   var blogger = log4js.getLogger('bots')
   try{
         
 message.attachments.forEach(attachments =>{
           let url = attachments.url
          // message.channel.send(url)
if(!message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1) || message.author.bot)
     {
       let begin1 = "guild["
      if(url){
       console.log(`${colors.gray(stringOne)}${colors.cyan(string2)}${colors.magenta(guildS)}${colors.cyan(channels)}${colors.magenta(channelS)}${colors.cyan(users)}${colors.blue(userS)}${colors.cyan(colon)}${colors.green(stringOneS)} ||| ${colors.cyan("Image:")} ${url}`)
       const log1 = `${begin1}${(guildS)}${(channels)}${(channelS)}${(users)}${(userS)}${(colon)}${(stringOneS)} ((Image: ${url}))`
       logger.chat(log1)}
      
       }
       if(url) return;
 })
if(!message.content.startsWith(prefix) || message.author.bot){
          let begin1 = "guild["
          console.log(`${colors.gray(stringOne)}${colors.cyan(string2)}${colors.magenta(guildS)}${colors.cyan(channels)}${colors.magenta(channelS)}${colors.cyan(users)}${colors.blue(userS)}${colors.cyan(colon)}${colors.green(stringOneS)}`)
          const log4 = `${begin1}${(guildS)}${(channels)}${(channelS)}${(users)}${(userS)}${(colon)}${(stringOneS)}`
       logger.chat(log4)}
 
   if(message.author.bot){
    let begin = "guild["
    console.log(`${colors.yellow(string4)}${colors.red(string2)}${colors.magenta(guildS)}${colors.red(channels)}${colors.magenta(channelS)}${colors.red(users)}${colors.blue(userS)}${colors.red(colon)}${colors.blue(stringOneS)}`)
    const log2 = `${begin}${(guildS)}${(channels)}${(channelS)}${(users)}${(userS)}${(colon)}${(stringOneS)}`
    
    blogger.bots(log2)
   }
   if(message.author.bot) return;
   if(message.content.startsWith(other1) || message.content.startsWith(prefix) || message.content.startsWith(other1))
   {
     let begin = "guild["
    console.log(`${colors.red(string3)}${colors.yellow(string2)}${colors.magenta(guildS)}${colors.yellow(channels)}${colors.magenta(channelS)}${colors.yellow(users)}${colors.blue(userS)}${colors.yellow(colon)}${colors.red(stringOneS)}`)
    const log3 = `${begin}${(guildS)}${(channels)}${(channelS)}${(users)}${(userS)}${(colon)}${(stringOneS)}`
    Logger.cmds(log3)
   }
    // if(message.content.startsWith(other)) return;
     if(message.content.startsWith(other1)) return;
    }catch(err){
        try{
            message.channel.send(`There has been a logger error ${err}`)
        }catch(err){
            console.log(err)
        }
    }
})
client.login(token)
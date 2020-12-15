const Discord = require('discord.js')
const colors = require('colors')
const client = new  Discord.Client()
const log4js = require('log4js')
const {prefix, other, other1, token} = require('../config.json')

require('events').EventEmitter.prototype._maxListeners = 100;


client.on("ready", async () =>
{
  console.log(`${colors.red('[SYS-LOG]')} Discord Logger Is Ready`); 
  //client.user.setActivity(`Serving ${client.guilds.size} servers, serving ${client.users.size} users, in ${client.channels.size} cannels `);
});
client.on('error', error=>{
 
  const sn = new Discord.RichEmbed()
  .setTitle("~FREAKIN’ ERROR~")
  .setDescription(error)
  .addField("What to do?", "Contact one of the devs as quickly as possible")
  .addField("Devs", "@ShockingSoup @testdummy")
  .addField(message.createdAt.toLocaleString())
  .setFooter("Error Number")
})

  

client.on('message', message =>
{       
    if(message.channel.type === "dm") return;
    if(message.channel.id === "565674304482574336") return;
    
    //#region Vars
    var Content = message.content;
    var User = message.author.username;
    var Guild = message.guild.name;
    var Channel = message.channel.name;
    var trump = client.guilds.find(z => z.name === "Trumpet Section 2019-2020")
    var chatLog = "ChatLogs2"
    if(message.guild.name === "ChatLogs2")return;
    //#endregion
    //if(!message.channel.name === "server  testing") return;

    let e = message.guild.channels.find(q => q.name === 'action log')
    let e1 = "565565923201646663"
    let e2 = "565602184067022893"
    //#endregion

    //#region Embed
    //Prefix
    let ContentEmbed1 = new Discord.RichEmbed()
    .setTitle('~Chat Log~')
    .setColor('#ffee00')
    .addField('Author', User)
    .setDescription(Content)          
    .addField('Guild', Guild, true)
    .addField('Channel',Channel,true)
    .addField("Date:", message.createdAt.toLocaleString())
    //no prefix
    let ContentEmbed2 = new Discord.RichEmbed()
    .setTitle('~Chat Log~')
    .setColor('#00f7ff')
    .addField('Author', User)
    .setDescription(Content)          
    .addField('Guild', Guild, true)
    .addField('Channel',Channel,true)
    .addField("date", message.createdAt.toLocaleString())

     
    
    let Error1 = new Discord.RichEmbed()
    .setTitle("~Error~")
    .setColor("#ff5454")
    .setDescription(`An error occurred wile trying to log ${message.channel.e1}` )
    let Error2 = new Discord.RichEmbed()
    .setTitle("~Error~")
    .setColor("#ff5454")
    .setDescription(`An error occurred wile trying to log ${message.channel.e2}` )

let botEmbed = new Discord.RichEmbed()
    .setTitle('~Chat Log~')
    .setColor('#00f7ff')
    .addField('Author', User)
    .setDescription(Content)          
    .addField('Guild', Guild, true)
    .addField('Channel',Channel,true)
    .addField("date", message.createdAt.toLocaleString())
    
    //#endregion
    function errorHandle(err){
        const errorEmbed0 = new Discord.RichEmbed()
         .setTitle('~There’s Been an Error~')
         .setDescription('So there’s been an error. Don’t worry it’s probably something little if this message came through. All you gotta do is contact the server owner and tell them to contact one of the devs')
         const errorEmbed1 = new Discord.RichEmbed()
         .setTitle('~There’s Been an Error~')
         .setDescription(err)
        message.channel.send(errorEmbed0 + errorEmbed1)
        }

    //#region Ignore

        

    //#endregion
 //#region Trumpets

 try
 {
    const channelName = message.channel.name
    const logName = channelName
     //#region old
     /* 
    if(client.guilds.find(t => t.name === "Trumpet Section 2019-2020"))
    {

    
       if(botU === "235148962103951360"){
        let SpyLog = message.channel.name
        //#region what channel 
         if(SpyLog === "announcements"){ let named = "announcements";}
         if(SpyLog === "homework  help") {let named = "homework-help"}
       /*  if(SpyLog === "") let named =
         if(SpyLog === "") let named =
         if(SpyLog === "") let named =
         if(SpyLog === "") let named =
         if(SpyLog === "") let named =
         if(SpyLog === "") let named =
         if(SpyLog === "") let named =
         if(SpyLog === "") let named =
         if(SpyLog === "") let named =
         if(SpyLog === "") let named =
         if(SpyLog === "") let named =
         if(SpyLog === "") let named =
         if(SpyLog === "") let named =/
         if(SpyLog === "server  testing"){ let named1 = "server-testing1"}

            client.guilds.find(x => x.name === "ChatLogs").channels.find(y => y.name === "server-testing1").send(botEmbed)

        }
        //#region announcements
        //announcements
        if(Channel === "announcements")
        {
            if(message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y => y.name === 'announcements').send(ContentEmbed1)
                }catch(err){
                    try{
                        e.send(Error1)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }
            }
            if(!message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y => y.name === 'announcements').send(ContentEmbed2)
                }catch(err){
                    try{
                        e.send(Error1)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }
            }
        }
        //#endregion    
       
        //#region homework
        if(Channel === "homework  help")
        {
            if(message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y => y.name === 'homework-help').send(ContentEmbed1)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }
            }
            if(!message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y => y.name === 'homework-help').send(ContentEmbed2)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }                
            }
        }
        //#endregion
        
        //#region off-topic
        if(Channel === "off  topic")
        {
            if(message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y => y.name === 'offtopic').send(ContentEmbed1)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }
            }
            if(!message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y => y.name === 'offtopic').send(ContentEmbed2)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }                
            }
        }
        //#endregion

        //#region Wind Ensembemble
        if(Channel === "wind  ensemble")
        {
            if(message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y =>y. name === 'windensemble').send(ContentEmbed1)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }
            }
            if(!message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y =>y. name === 'windensemble').send(ContentEmbed2)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }                
            }
        }
        //#endregion

        //#region Symphonic band
        if(Channel === "symphonic  band")
        {
            if(message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find('name', 'ChatLogs').channels.find('name', 'symphonic').send(ContentEmbed1)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }
            }
            if(!message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find('name', 'ChatLogs').channels.find('name', 'symphonic').send(ContentEmbed2)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }                
            }
        }
        //#endregion

        //#region Concert Band
        if(Channel === "concert  band")
        {
            if(message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y => y.name ==='concert').send(ContentEmbed1)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }
            }
            if(!message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y => y.name ==='concert').send(ContentEmbed2)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }                
            }
        }
        //#endregion

        //#region General Freshmen
        if(Channel === "general  freshmen")
        {
            if(message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name ==='ChatLogs').channels.find(y=> y.name === 'freshmen').send(ContentEmbed1)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }
            }
            if(!message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name ==='ChatLogs').channels.find(y=> y.name === 'freshmen').send(ContentEmbed2)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }                
            }
        }
        //#endregion

        //#region Homework help f
        if(Channel === "homework  help  f")
        {
            if(message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            { 
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y => y.name === 'homework-help-f').send(ContentEmbed1)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }
            }
            if(!message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y => y.name === 'homework-help-f').send(ContentEmbed2)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }                
            }
        }
        //#endregion

        //#region General Sophomores
        if(Channel === "general  sophomores")
        {
            if(message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y => y.name === 'sophomores').send(ContentEmbed1)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }
            }
            if(!message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y => y.name === 'sophomores').send(ContentEmbed2)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }                
            }
        }
        //#endregion

        //#region Homewrork help S
        if(Channel === "homework  help  s")
        {
            if(message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y => y.name === 'homework-help-s').send(ContentEmbed1)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }
            }
            if(!message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y => y.name === 'homework-help-s').send(ContentEmbed2)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }                
            }
        }
        //#endregion

        //#region General Juniors
        if(Channel === "general  juniors")
        {
            if(message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y => y.name === 'juniors').send(ContentEmbed1)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }
            }
            if(!message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y => y.name === 'juniors').send(ContentEmbed2)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }                
            }
        }
        //#endregion

        //#region Homework help J
        if(Channel === "homework  help  j")
        {
            if(message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y => y.name === 'homework-help-j').send(ContentEmbed1)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }
            }
            if(!message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y => y.name === 'homework-help-j').send(ContentEmbed2)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }                
            }
        }
        //#endregion

        //#region General Seniors
        if(Channel === "general  seniors")
        {
            if(message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y => y.name === 'seniors').send(ContentEmbed1)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }
            }
            if(!message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y => y.name === 'seniors').send(ContentEmbed2)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }                
            }
        }
        //#endregion

        //#region Homewrork Help S
        if(Channel === "homework-help-se")
        {
            if(message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y => y.name === 'homework-help-se').send(ContentEmbed1)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }
            }
            if(!message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === 'ChatLogs').channels.find(y => y.name === 'homework-help-se').send(ContentEmbed2)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }                
            }
        }
        //#endregion

        //#region server testing
        if(message.channel.name === "server  testing")
        {
            if(message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === "ChatLogs").channels.find(y => y.name === 'server-testing1').send(ContentEmbed1)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }
            }
            if(!message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === "ChatLogs").channels.find(y => y.name === 'server-testing1').send(ContentEmbed2)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }                
            }
        }
                if(message.channel.name === "memes")
        {
            if(message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === "ChatLogs").channels.find(y => y.name === 'memes1').send(ContentEmbed1)
                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }
            }
            if(!message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
            {
                try{
                    client.guilds.find(x => x.name === "ChatLogs").channels.find(y => y.name === 'memes1').send(ContentEmbed2)
                    client.guilds.find(x => x.name === "ChatLogs").channels.find(y => y.name === 'memes1').send(ContentEmbed2)

                }catch(err){
                    try{
                        e.send(Error2)    
                    }catch(err){
                        console.log(err)
                    }
                    
                }                
            }}
        //#endregion
        
    }*/
    //#endregion
    message.attachments.forEach(attachments =>{
        let url = attachments.url
           
    if(client.guilds.find(t => t.name === "Trumpet Section 2019-2020"))
    {
        

        //#region URL
        if(url){
            let ContentEmbed3= new Discord.RichEmbed()
                .setTitle('~Chat Log~')
                .setColor('#00f7ff')
                .addField('Author', User)
                .setDescription(Content)
                .setImage(url)          
                .addField('Guild', Guild, true)
                .addField('Channel',Channel,true)
                .addField("date", message.createdAt.toLocaleString())
            
                client.guilds.find(x => x.name === chatLog).channels.find(y => y.name === logName).send(ContentEmbed3)
        }  
         if(url) return;
    }
    })
        //#endregion



        //#region Command
        if(message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
        {
            try
            {
                client.guilds.find(x => x.name === chatLog).channels.find(y => y.name === logName).send(ContentEmbed1)
            }catch(err){
                client.guilds.find(z => z.name === chatLog).createChannel(channelName, {type: 'text'})
                errorHandle
                console.log(err)
            }
        }
        //#endregion

        //#region message
        if(!message.content.startsWith(prefix) || message.content.startsWith(other) || message.content.startsWith(other1))
        {
            try
            {
                client.guilds.find(x => x.name === chatLog).channels.find(y => y.name === logName).send(ContentEmbed2) 
            }catch(err){
                client.guilds.find(z => z.name === chatLog).createChannel(logName, {type: 'text'})
                errorHandle
                console.log("Non command "+ err)
            }
        }
        //#endregion
    }catch(err){
    errorHandle
    console.log(err)
 }







})
     
    
    //#region error vars
   
client.login(token)
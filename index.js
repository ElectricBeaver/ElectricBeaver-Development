//#region Consts
const Discord = require('discord.js') 
const fs = require('fs')
const colors = require('colors')
const moment = require('moment')
const log4js = require('log4js')
const mysql = require('mysql')
const client = new Discord.Client()
const config = require('./settings/configuration.json')

//#endregion

//#region Files
require('./logscript/consolelog.js')
require('./logscript/discordlog.js')
/*require('./sqlmes.js')
require('./SqlTest.js')
//require('./starboard.js')*/
//#endregion



//#region Command Handle
    //#region Collections
global.servers = {};
client.aliases = new Discord.Collection(); //collection of command aliases
client.commands = new Discord.Collection(); // collection of command names
client.commands1 = new Discord.Collection();
client.commands2 = new Discord.Collection();
client.commands3 = new Discord.Collection();
client.commands4 = new Discord.Collection();
client.commands5 = new Discord.Collection();
client.enabled = new Discord.Collection(); //collection of enebled commands
    //#endregion
fs.readdir("./commands/", (err, files) =>{
    if(err) console.log(err)
    let jsfile = files.filter(f => f.split(".").pop() === "js") //gets ride of '.js'
    if(jsfile.length <= 0){
        return console.log("No Commands found") //if there are no commands say 'No commands found'
    }
    jsfile.forEach((f, i) =>{
        let pull = require(`./commands/${f}`);
        client.commands.set(pull.config.name, pull); //Gets the name from the command config
        pull.config.aliases.forEach(alias =>{
            client.aliases.set(alias, pull.config.name)
        });
        client.enabled.set(pull.config.enabled, pull);
        console.log(`${colors.green('[CMD-LOG]')} ${f} loaded`)
    });
});

fs.readdir("./commands/admin/", (err, files) =>{
    if(err) console.log(err)
    let jsfile1 = files.filter(f => f.split(".").pop() === "js") //gets ride of '.js'
    if(jsfile1.length <= 0){
        return console.log("No Commands found in the admin plugin") //if there are no commands say 'No commands found'
    }
    jsfile1.forEach((f, i) =>{
        let pull1 = require(`./commands/admin/${f}`);
        client.commands1.set(pull1.config.name, pull1); //Gets the name from the command config
        pull1.config.aliases.forEach(alias =>{
            client.aliases.set(alias, pull1.config.name)
        });
        client.enabled.set(pull1.config.enabled, pull1);
        console.log(`${colors.green('[CMD-LOG]')} ${f} loaded`)
    });
});

fs.readdir("./commands/eco/", (err, files) =>{
    if(err) console.log(err)
    let jsfile2 = files.filter(f => f.split(".").pop() === "js") //gets ride of '.js'
    if(jsfile2.length <= 0){
        return console.log("No Commands found in the eco plugin") //if there are no commands say 'No commands found'
    } 
    jsfile2.forEach((f, i) =>{
        let pull2 = require(`./commands/eco/${f}`);
        client.commands2.set(pull2.config.name, pull2); //Gets the name from the command config
        pull2.config.aliases.forEach(alias =>{
        client.aliases.set(alias, pull2.config.name)
        });
        client.enabled.set(pull2.config.enabled, pull2);
        console.log(`${colors.green('[CMD-LOG]')} ${f} loaded`)
    });
});

fs.readdir("./commands/fun/", (err, files) =>{
    if(err) console.log(err)
    let jsfile3 = files.filter(f => f.split(".").pop() === "js") //gets ride of '.js'
    if(jsfile3.length <= 0){
        return console.log("No Commands found in the fun plugin") //if there are no commands say 'No commands found'
    }
    jsfile3.forEach((f, i) =>{
        let pull3 = require(`./commands/fun/${f}`);
        client.commands3.set(pull3.config.name, pull3); //Gets the name from the command config
        pull3.config.aliases.forEach(alias =>{
        client.aliases.set(alias, pull3.config.name)
        });
        client.enabled.set(pull3.config.enabled, pull3);
        console.log(`${colors.green('[CMD-LOG]')} ${f} loaded`)
    });
});

fs.readdir("./commands/gen/", (err, files) =>{
    if(err) console.log(err)
    let jsfile4 = files.filter(f => f.split(".").pop() === "js") //gets ride of '.js'
    if(jsfile4.length <= 0){
        return console.log("No Commands found general plugin") //if there are no commands say 'No commands found'
    }
    jsfile4.forEach((f, i) =>{
        let pull4 = require(`./commands/gen/${f}`);
        client.commands4.set(pull4.config.name, pull4); //Gets the name from the command config
        pull4.config.aliases.forEach(alias =>{
        client.aliases.set(alias, pull4.config.name)
        });
        client.enabled.set(pull4.config.enabled, pull4);
        console.log(`${colors.green('[CMD-LOG]')} ${f} loaded`)
    });
});

fs.readdir("./commands/music/", (err, files) =>{
    if(err) console.log(err)
    let jsfile5 = files.filter(f => f.split(".").pop() === "js") //gets ride of '.js'
    if(jsfile5.length <= 0){
        return console.log("No Commands found in the music plugin") //if there are no commands say 'No commands found'
    }
    jsfile5.forEach((f, i) =>{
        let pull5 = require(`./commands/music/${f}`);
        client.commands5.set(pull5.config.name, pull5); //Gets the name from the command config
        pull5.config.aliases.forEach(alias =>{
        client.aliases.set(alias, pull5.config.name)
        });
        client.enabled.set(pull5.config.enabled, pull5);
        console.log(`${colors.green('[CMD-LOG]')} ${f} loaded`)
    });
});
//repeat fs.readdir for command group folders










//#endregion

//#region Console Chat

let y = process.openStdin()
y.addListener("data", res =>{
    let x = res.toString().trim().split(/ +/g)
    client.channels.get(config.setup.cChat).send(x.join(' '));
})
//#endregion

//#region SQL Connect
var con = mysql.createConnection({
    host: "localhost",
    user: "Electric",
    password: config.setup.sqlpass,
    database: "overlord",
    port: "3306"
});


const data = mysql.createConnection({
    host: "localhost",
    user: "Bot",
    password: config.setup.sqlpass,
    database: "electricbeaver",
    debug: false
    
})
//#endregion

//#region Ready
client.on("ready", async () =>{
    console.log(`${colors.green('[START-LOG]')} ${client.user.username} has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    client.user.setActivity(`Servers ${client.guilds.size}|Users ${client.users.size}|Channels ${client.channels.size}`);
  
});
//#endregion

//#region Event Finder
/*client.on('raw', event => {
    console.log('\nRaw event data:\n', event);
});*/
//#endregion

//#region errorHandel
function errorHandle(err){
  const errorEmbed0 = new Discord.RichEmbed()
   .setTitle('~There’s Been an Error~')
   .setDescription('So there’s been an error. Don’t worry it’s probably something little if this message came through. All you gotta do is contact the server owner and tell them to contact one of the devs')
   const errorEmbed1 = new Discord.RichEmbed()
   .setTitle('~There’s Been an Error~')
   .setDescription(err)
  message.channel.send(errorEmbed0 + errorEmbed1)
  }
  //#endregion

  //#region Message
  client.on("message", async message =>{
      if(message.author.bot) return;
      if(message.channel.type === "dm") return;
      if(message.channel.id === "565674304482574336") return;
      if(message.content === 'None') return;
      if(message.content === 'none') return;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0]
    let args = messageArray.slice(1);

    



    //#region React
  if(message.channel.id === '565566525940039680'){
      message.attachments.forEach(attachments =>{
          let mImage = attachments.url
          if(mImage){
              message.react('577153408084082688')//upvote
                    .then(() => message.react('572162066836619265'))//stalin
                    .then(() => message.react('577153454863024138'))//downvote
          }
      })
  }else{
      
  }
  if(message.channel.id === '609395100585558047'){
    message.attachments.forEach(attachments =>{
        let mImage = attachments.url
        if(mImage){
            message.react('577153408084082688')//upvote
                  .then(() => message.react('572162066836619265'))//stalin
                  .then(() => message.react('577153454863024138'))//downvote
        }
    })
}else{
    
}

    //#endregion
const footerMessage = config.setup.footer
    //#region Command Push
    if(!message.content.startsWith(config.setup.prefix) || message.content.startsWith(config.setup.other)) return;
    let commandFile = client.commands.get(cmd.slice(config.setup.prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(config.setup.prefix.length)))  
    if(commandFile) commandFile.run(client, message, args, Discord, con, data, errorHandle, footerMessage)
    
    let commandFile1 = client.commands1.get(cmd.slice(config.setup.prefix.length)) || client.commands1.get(client.aliases.get(cmd.slice(config.setup.prefix.length)))
    if(commandFile1) commandFile1.run(client, message, args, Discord, con, data, errorHandle, footerMessage)
    
    let commandFile2 =  client.commands2.get(cmd.slice(config.setup.prefix.length)) || client.commands2.get(client.aliases.get(cmd.slice(config.setup.prefix.length)))
    if(commandFile2) commandFile2.run(client, message, args, Discord, con, data, errorHandle, footerMessage)
   
    let commandFile3 = client.commands3.get(cmd.slice(config.setup.prefix.length)) || client.commands3.get(client.aliases.get(cmd.slice(config.setup.prefix.length)))
    if(commandFile3) commandFile3.run(client, message, args, Discord, con, data, errorHandle, footerMessage)

    let commandFile4 =  client.commands4.get(cmd.slice(config.setup.prefix.length)) || client.commands4.get(client.aliases.get(cmd.slice(config.setup.prefix.length))) 
    if(commandFile4) commandFile4.run(client, message, args, Discord, con, data, errorHandle, footerMessage)

    let commandFile5 = client.commands5.get(cmd.slice(config.setup.prefix.length)) || client.commands5.get(client.aliases.get(cmd.slice(config.setup.prefix.length)))
    if(commandFile5) commandFile5.run(client, message, args, Discord, con, data, errorHandle, footerMessage)



  })
client.login(config.setup.token)

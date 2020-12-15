const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./Settings/tokens.json');
const fs = require('fs');
const colors = require('colors');
const config = require('./Settings/config.json');
const log4js = require('log4js');
const mysql = require('mysql');



var con = mysql.createConnection({
    host: 'localhost',
    user: 'BJ',
    password: 'bitch'
})
con.connect(function(err){
    if(err) throw err;
    console.log(`${colors.red('[SYS-LOG]')} Connected (Image)`)
})

//#region logger
/*
try {
    log4js.configure({
        levels: {
            CHAT: { value: 20002, colour: 'cyan' },
            CMDS: { value: 20003, colour: 'red' },
            BOTS: { value: 20004, colour: 'yellow' },
        },
        appenders: {
            console: { type: 'console' },
            file: { type: 'file', filename: `./test/channels.yml` }
           
        },
        categories: {
            default: { appenders: ['file'], level: 'chat' },
            logs: { appenders: ['file'], level: 'chat' },
            cmds: { appenders: ['file'], level: 'cmds' },
            bots: { appenders: ['file'], level: 'bots' },
            other_logs: { appenders: ['file'], level: 'chat' },
            other_cmds: { appenders: ['file'], level: 'cmds' },
            //other_bots: { appenders: ['file2'], level: 'bots' }
        }
    })
} catch (err) {
    console.log(err);
}
*/
//#endregion

client.on('message', async msg => {
    

    //Check if server is Transport Hub
    if(msg.guild.id === '784401300145045544'){ 
        
        //Make sure its not an non image channel
        if(msg.channel.id != '784402784174342144' &&//Admin Chat 784402784174342144
           msg.channel.id != '784402451335610379' &&//Bot-Commands 784402451335610379
           msg.channel.id != '784423979787747348' &&//Logs 784423979787747348
           msg.channel.id != '784447389343154196' &&//General-Chat 784447389343154196
           msg.channel.id != '784446567062437948' &&//Self-Promo 784446567062437948
           msg.channel.id != '784431011789406218' &&//Transport realated memes 784431011789406218
           msg.channel.id != '784429989050843157' &&//Plane news 784429989050843157
           msg.channel.id != '784430170622656562' &&//Car News
           msg.channel.id != '784430230869508126' &&//boat news 784430230869508126
           msg.channel.id != '784430301119905833' &&//truck News 784430301119905833
           msg.channel.id != '784430821196824666' &&//about us 784430821196824666
           msg.channel.id != '784406828153831434' &&//Rules 784406828153831434
           msg.channel.id != '784409561351847986'){ //Role assaignment 784409561351847986 
            
            //If message has attcahment then do this for each 
            msg.attachments.forEach(attachments =>{
                    let mImage = attachments.url
                    if(mImage){
                        msg.react('784446566785613884')//upvote
                            .then(() => msg.react('784446587883356201')) //downvote
                    }
                })
            }   
    }else {
        return;
    }
});




client.login(token.MainToken);
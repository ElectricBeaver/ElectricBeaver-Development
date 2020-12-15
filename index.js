//Consts
const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./Settings/tokens.json');
const fs = require('fs');
const colors = require('colors');
const config = require('./Settings/config.json');
const log4js = require('log4js');
const mysql = require('mysql');
//Collections
client.aliases =  new Discord.Collection();
client.commands = new Discord.Collection();
require('./sqldata.js')
require('./logger.js')
require('./imageModule');
fs.readdir("./Commands/", (err, files) => {
    if (err) console.log(err)
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        return console.log("No Commands Found")
    }
    jsfile.forEach((f, i) => {
        let pull = require(`./Commands/${f}`);
        client.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            client.aliases.set(alias, pull.config.name)
        });
        console.log(`${colors.green('[CMD-LOG] ')} ${f} loaded`);
    });
});

client.once('ready', () => {
    console.log(`${colors.green('[GEN-LOG] ')} ${client.user.username} has started, with ${client.users.size} users, in ${client.guilds.size} servers!`);
})

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password'
})

con.connect(function(err){
    if(err) throw err;
    console.log(`${colors.red('[SYS-LOG]')} Connected (index)`)
})

client.on('message', async msg => {
    if (msg.author.bot) return;
    if(msg.channel.type === "dm") return;
//#region imagebot


//#endregion




    let messageArray = msg.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    con.query(`SELECT * FROM bot.bot_servers WHERE servers_id = '${msg.guild.id}'`, function (err, result){
        var prefix = result[0].servers_prefix;
        if (!msg.content.startsWith(config.setup.prefix)) return

        let commandFile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
        console.log(commandFile);
        if(commandFile) commandFile.run(client, msg, args, con, Discord)
    })

})

client.login(token.MainToken);
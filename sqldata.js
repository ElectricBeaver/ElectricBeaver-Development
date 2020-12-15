//Consts
const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./Settings/tokens.json');
const fs = require('fs');
const colors = require('colors');
const config = require('./Settings/config.json');
const log4js = require('log4js');
const mysql = require('mysql');
const moment = require('moment');
client.on("ready", async () => {
    console.log(`${colors.red('[SYS-LOG]')} SQL is Ready`)

});
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password'
})

con.connect(function(err){
    if(err) throw err;
    console.log(`${colors.red('[SYS-LOG]')} Connected`)
})


client.on('message', async msg =>{


    con.query(`SELECT * FROM bot.bot_users WHERE discord_id = '${msg.author.id}' `, function (err, result){

        let userdata;

        if(result.length < 1){
            var date = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
            if(msg.author.bot){
                userdata = `INSERT INTO bot.bot_users (discord_id, discord_username, join_date, bot_bot) VALUES ('${msg.author.id}', '${msg.author.username}', '${date}' , '1')`
            }else if(!msg.author.bot){
                userdata = `INSERT INTO bot.bot_users (discord_id, discord_username, join_date, bot_bot) VALUES ('${msg.author.id}', '${msg.author.username}', '${date}', '0')`
            }

            con.query(userdata);
        }else{
            if(result[0].join_date === null){
                var date = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
                con.query(`UPDATE bot.bot_users SET join_date = '${date}' WHERE discord_id = '${msg.author.id}'`)
            }
            if(result[0].bot_bot === null){
               if(msg.author.bot){
                con.query(`UPDATE bot.bot_users SET bot_bot = '1' WHERE discord_id = '${msg.author.id}'`)
               }else if(!msg.author.bot){
                con.query(`UPDATE bot.bot_users SET bot_bot = '0' WHERE discord_id = '${msg.author.id}'`)
               }
                
            }
        }
    })
  
    con.query(`SELECT * FROM bot.bot_servers WHERE servers_id = '${msg.guild.id}'`, function(err, result){
        let serverData
        let userStatsUpdate
        if(result.length <1){
            serverData = `INSERT INTO bot.bot_servers (servers_id, servers_name) VALUES ('${msg.guild.id}', '${msg.guild.name}')`
            con.query(serverData);
        }
    })

    con.query(`SELECT * FROM bot.bot_users_stats WHERE discord_id = '${msg.author.id}' AND id_server = '${msg.guild.id}'`, function(err, result){
        let userStats;
        let userStatsUpdate;
        if(result.length <1){
            con.query(`SELECT * FROM bot.bot_users WHERE discord_id = '${msg.author.id}' `, function (err, result){
                var botUsersId = result[0].id_users;
                var date = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
                userStats = `INSERT INTO bot.bot_users_stats (discord_id, discord_username, join_date, id_server, server_name, id_users) VALUES ('${msg.author.id}', '${msg.author.username}', '${date}', '${msg.guild.id}', '${msg.guild.name}', '${botUsersId}')`
                con.query(userStats);
            })

        }else{
            if(result[0].join_date === null){
                var date = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
                con.query(`UPDATE bot.bot_users_stats SET join_date = '${date}' WHERE discord_id = '${msg.author.id}' AND id_server = ${msg.guild.id}`);
            }
            if(!msg.content.startsWith(config.setup.prefix)){
                var msgCount = result[0].stats_messages;
                var newMsgCount = msgCount + 1;
                var xp = result[0].stats_xp;
                var xpGen = Math.floor(Math.random() * 51) + xp;
             

                userStats = `UPDATE bot.bot_users_stats SET stats_messages = '${newMsgCount}', stats_xp = '${xpGen}' WHERE discord_id = '${msg.author.id}' AND id_server = '${msg.guild.id}'`
                con.query(userStats)
            }else if(msg.content.startsWith(config.setup.prefix)){
                var cmdCount = result[0].stats_commands;
                var newCmdCount = cmdCount + 1;
                userStats = `UPDATE bot.bot_users_stats SET stats_commands = '${newCmdCount}' WHERE discord_id = '${msg.author.id}' AND id_server = '${msg.guild.id}'`
                con.query(userStats)
            }
        }
    })
    con.query(`SELECT * FROM bot.bot_users_stats_totals WHERE discord_id = '${msg.author.id}'`, function(err, result){
        let userStats;
        let userStatsUpdate;
        if(result.length <1){
            con.query(`SELECT * FROM bot.bot_users WHERE discord_id = '${msg.author.id}' `, function (err, result){
                var botUsersId = result[0].id_users;
                userStats = `INSERT INTO bot.bot_users_stats_totals (discord_id, discord_username, id_users) VALUES ('${msg.author.id}', '${msg.author.username}', '${botUsersId}')`
                con.query(userStats);
            })

        }else{
            if(!msg.content.startsWith(config.setup.prefix)){
                var msgCount = result[0].stats_messages;
                var newMsgCount = msgCount + 1;
                userStats = `UPDATE bot.bot_users_stats_totals SET stats_messages = '${newMsgCount}' WHERE discord_id = '${msg.author.id}'`
                con.query(userStats)
            }else if(msg.content.startsWith(config.setup.prefix)){
                var cmdCount = result[0].stats_commands;
                var newCmdCount = cmdCount + 1;
                userStats = `UPDATE bot.bot_users_stats_totals SET stats_commands = '${newCmdCount}' WHERE discord_id = '${msg.author.id}'`
                con.query(userStats)
            }
        }
    })
})



client.login(token.MainToken);
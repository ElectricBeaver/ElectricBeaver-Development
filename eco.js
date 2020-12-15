const Discord = require('discord.js')
const client = new Discord.Client()
const mysql = require('mysql')




var con = mysql.creatConnection({
    host: "localhost",
    user: "Electric",
    password: "password",
    database: "overlord"
})

con.connect(function(err){
    if(err) throw err;
})

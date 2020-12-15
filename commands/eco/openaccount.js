const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args, Discord, con, data, errorHandle) =>
{
    data.query(`SELECT * FROM ecorewards WHERE UserName = '${message.author.username}`, (err, rows)=>{
        try{
            let check = rows[0].toCollect
            
        }catch(err){
            
                data.query(`UPDATE ecorewards SET Collected = CURRENT_TIMESTAMP() WHERE UserName = '${message.author.username}'`)
                              
        }
        let time = rows[0].Collectd
        console.log(time)

    })

}

module.exports.config = 
{
    name: 'openaccount',
   aliases: [""],
   permission: "",
   description: "",
   usage: "",
   category: "",
   enabled: true
}
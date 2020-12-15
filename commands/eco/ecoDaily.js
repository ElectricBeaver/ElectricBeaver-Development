const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args, Discord, con, errorHandle) =>
{
    function getDateTime() {

        var date = new Date();
    
        var hour = date.getHours();
        hour = (hour < 10 ? "0" : "") + hour;
    
        var min  = date.getMinutes();
        min = (min < 10 ? "0" : "") + min;
    
        var sec  = date.getSeconds();
        sec = (sec < 10 ? "0" : "") + sec;
    
        var year = date.getFullYear();
    
        var month = date.getMonth() + 1;
        month = (month < 10 ? "0" : "") + month;
    
        var day  = date.getDate();
        day = (day < 10 ? "0" : "") + day;
    
        return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
    
    }


    data.query(`SELECT * FROM ecorewards WHERE UserName = '${message.authour.username}'`, (err, rows)=>{

        if(rows.length < 1){
            message.channel.send("Woah there you dont seem to be in the database yet... Use The command ;openAccount.")
        }else{
            //#region Insert collected
             data.query(`INSERT INTO ecorewards (Collected) VALUES ('CURRENT_TIMESTAMP()')`)
            //#endregion

            //#region find toCollect

             .then(()=> data.query(`SELECT * FROM ecorewards WHERE UserName = '${message.authour.username}'`, (err, rows)=>{
                    
                let time1 = rows[0].toCollect
                let time2 = rows[0].Collected
                
                data.query(`INSERT INTO ecorewards (diff) VALUES ('TIMESTAMPDIFF(HOUR, ${time1}, ${time2})')`)

            })
            ) 
            .then(()=>  data.query(`SELECT * FROM ecorewards WHERE UserName = '${message.authour.username}'`, (err, rows)=>{
                    
                let time3 = rows[0].diff
                
                if(!time3 >= 1){
                    message.channel.send(`Woah There you have to wait another ${time3} hours`)
                }else{
                    //insert money reward
                }
            
            })
            )   


            //#endregion
        }


    })
 

}
module.exports.config = 
{
   name: 'daily',
   aliases: [""],
   permission: "",
   description: "",
   usage: "",
   category: "",
   enabled: true
}
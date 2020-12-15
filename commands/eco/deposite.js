const Discord = require('discord.js');
const moment = require('moment');
const math = require('mathjs')
module.exports.run = async (client, message, args, Discord, con, data, errorHandle) =>
{
    
    message.delete();
    data.query(`SELECT * FROM ecobank WHERE UserName = '${message.author.username}'`, (err, rows)=>{
        let pocket = rows[0].Pocket
        let bank = rows[0].Bank
        var amount = args[0]
       //var nAmount = amount+bank
        console.log(math.add(amount, bank))
        let nAmount = math.add(amount, bank)
        let nAmount1 = math.subtract(pocket, amount)
        
       // console.log(nAmount)
       //console.log(1+1)
        if(amount > pocket){
            message.channel.send(`You dont have that much in your pocket... You have ${pocket} coins in your pocket.`)
            return;
        } 
        if(amount <= pocket){
            
            setTimeout(function () {data.query(`UPDATE ecobank SET Bank = ${nAmount} WHERE UserName = '${message.author.username}'`)},1000);
            setTimeout(function () {data.query(`UPDATE ecobank SET Pocket = ${nAmount1} WHERE UserName = '${message.author.username}'`)}, 1000);
            setTimeout(function () {message.channel.send(`Your new balance is ${nAmount}. You have ${nAmount1} left on you.`)}, 2000);
        }
        
    })
    
}

module.exports.config = 
{
    name: 'deposite',
   aliases: ["dep"],
   permission: "member",
   description: "used to deposite a users pocket money",
   usage: "deposite",
   category: "Eco",
   enabled: true
}
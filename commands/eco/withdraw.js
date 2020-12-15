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
        let nAmount = math.add(amount, pocket)
        let nAmount1 = math.subtract(bank, amount)
       // console.log(nAmount)
       //console.log(1+1)
        if(amount > bank){
            message.channel.send(`You dont have that much in your bank... You have ${bank} coins in your account.`)
            return;
        } 
        if(amount <= bank){
            
            setTimeout(function () {data.query(`UPDATE ecobank SET Bank = ${nAmount1} WHERE UserName = '${message.author.username}'`)}, 1000)
            setTimeout(function () {data.query(`UPDATE ecobank SET Pocket = ${nAmount} WHERE UserName = '${message.author.username}'`)}, 1000)
            setTimeout(function () {message.channel.send(`Your new balance is ${nAmount1}. You have ${nAmount} left on you.`)}, 1000)
        }
        
    })
    
}

module.exports.config = 
{
    name: 'withdraw',
   aliases: ["wit"],
   permission: "Member",
   description: "Used to withdraw from the users bank",
   usage: "withdraw",
   category: "Eco",
   enabled: true
}
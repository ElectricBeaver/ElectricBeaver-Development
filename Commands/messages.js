const moment = require('moment');
const mysql = require('mysql');

module.exports.run = async (client, msg, args, con, Discord) => {
    msg.delete()

    try{
        var user_name = msg.author.username;    
        var user_id = msg.author.id;
        var server_id = msg.guild.id;
        try{
            con.query(`SELECT * FROM bot.bot_users_stats WHERE discord_id = '${user_id}' AND id_server = '${server_id}'`, function (err, result){
                if(!result.length < 1){
                    var msgCount = result[0].stats_messages;
                    var cmdCount = result[0].stats_commands + 1;
                    var join_date = result[0].join_date;
                    const statsEmbed = new Discord.MessageEmbed()
                        .setColor("#0866ff")
                        .setTitle(`${user_name}'s Stats`)
                        .addFields(
                            {name: 'Messages', value: msgCount, inline: true},
                            {name: 'Commands', value: cmdCount, inline: true},
                        )
                        .setFooter(`Counting messages since ${join_date}`)
                        msg.channel.send(statsEmbed);

                }


            })
        }catch(err){

        }

    }catch(err){

    }







}

module.exports.config = {
    name: 'messages',
    aliases: ['xp'],
    Accessable: "Member",
    description: "Returns the bots latency and the api's latency",
    ussage: ";ping"
}
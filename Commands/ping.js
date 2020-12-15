const moment = require('moment');
module.exports.run = async (client, msg, args, con, Discord) => {
    msg.delete()

    try {
        const m = await msg.channel.send("ping");

        m.edit(`Pong! Latency is ${m.createdTimestamp - msg.createdTimestamp}ms. API latency is ${Math.round(client.ping)}ms`)
    } catch (err) {

    }

}

module.exports.config = {
    name: 'ping',
    aliases: ['p'],
    Accessable: "Member",
    description: "Returns the bots latency and the api's latency",
    ussage: ";ping"
}
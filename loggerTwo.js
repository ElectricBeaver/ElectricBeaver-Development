const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const colors = require('colors');
const moment = require('moment');
const log4js = require('log4js');
const { MainToken } = require('./Settings/tokens.json');
const config = require('./Settings/config.json')
const mkdirp = require('mkdirp');
client.on("ready", async () => {
    console.log(`${colors.red('[SYS-LOG]')} Console Logger is Ready`)

});

client.once('message', msg => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var guild = msg.guild.name;

    mkdirp.sync(`./logs/${guild}/`, function (err) {
        if(err) console.log(err)
    })

    fs.readdir('./logs/', (err, files) => {
        if (err) console.log(err);
        if (!fs.existsSync(`./logs/trumpets${'-' + date}.yml`)) {
            fs.writeFile(`./logs/trumpets${'-' + date}.yml`, 'init', function (err) {
                if (err) throw err;
            })
        }

    })

    fs.readdir('./logs/', (err, files) => {
        if (err) console.log(err);
        if (!fs.existsSync(`./logs/other${'-' + date}.yml`)) {
            fs.writeFile(`./logs/other${'-' + date}.yml`, 'init', function (err) {
                if (err) throw err;
            })
        }

    })

    try {
        log4js.configure({
            levels: {
                CHAT: { value: 20002, colour: 'cyan' },
                CMDS: { value: 20003, colour: 'red' },
                BOTS: { value: 20004, colour: 'yellow' },
            },
            appenders: {
                console: { type: 'console' },
                file: { type: 'file', filename: `./logs/trumpets${'-' + date}.yml` },
                file2: { type: 'file', filename: `./logs/other${'-' + date}.yml` }
            },
            categories: {
                default: { appenders: ['file'], level: 'chat' },
                logs: { appenders: ['file'], level: 'chat' },
                cmds: { appenders: ['file'], level: 'cmds' },
                bots: { appenders: ['file'], level: 'bots' },
                other_logs: { appenders: ['file2'], level: 'chat' },
                other_cmds: { appenders: ['file2'], level: 'cmds' },
                other_bots: { appenders: ['file2'], level: 'bots' }
            }
        })
    } catch (err) {

    }    
})

client.on('message', async msg => {
    let spy_msg = msg.content;
    let spy_user = msg.author.username;
    let spy_channel = msg.channel.name;

    if (msg.guild === "undefined") {
        var spy_guild = "DM"
    } else {
        var spy_guild = msg.guild.name;
    }

    if (spy_guild === "Trumpet Section") {
        if (!spy_msg) { let spy_msg = "no txt provided" }

        function getUserFromMention(mention) {
            if (!mention) return;

            if (mention.startWith('<@') && mention.endsWith('>')) {
                mention = mention.slice(2, -1);
            }

            if (mention.startWith('!')) {
                mention = mention.slice(1);
            }

            return client.users.get(mention)
        }

        var logger = log4js.getLogger('logs');
        var bot_logger = log4js.getLogger('bots');
        var cmd_logger = log4js.getLogger('cmds')

        msg.attachments.forEach(attachments => {
            let url = attachments.url

            if (!msg.content.startsWith(config.setup.prefix) && !msg.author.bot) {
                if (url) {
                    console.log(`${colors.gray('[CHAT-LOG]')}${colors.cyan('server')}[${colors.magenta(spy_guild)}]${colors.cyan('channel')}[${colors.magenta(spy_channel)}] ${colors.blue(spy_user)}: ${colors.green(spy_msg)} ||| Image: ${url}`)
                    const log = `server[${spy_guild}] channel[${spy_channel}] ${spy_user}: ${spy_msg} ||| Image: ${url}`
                    logger.chat(log)
                }
                return;
            }

            if (msg.author.bot) {
                if (url) {
                    console.log(`${colors.yellow('[BOTS-LOG]')}${colors.red('server')}[${colors.magenta(spy_guild)}]${colors.red('channel')}[${colors.magenta(spy_channel)}] ${colors.blue(spy_user)}: ${colors.red(spy_msg)} ||| Image: ${url}`)
                    const log = `server[${spy_guild}] channel[${spy_channel}] ${spy_user}: ${spy_msg} `
                    bot_logger.bots(log);
                }
                return;
            }

            if (msg.content.startsWith(config.setup.prefix) && !msg.author.bot) {
                if (url) {
                    console.log(`${colors.red('[CMDS-LOG]')}${colors.yellow('server')}[${colors.magenta(spy_guild)}]${colors.yellow('channel')}[${colors.magenta(spy_channel)}] ${colors.blue(spy_user)}: ${colors.blue(spy_msg)} ||| Image: ${url}`)
                    const log = `server[${spy_guild}] channel[${spy_channel}] ${spy_user}: ${spy_msg} ||| Image: ${url} `
                    cmd_logger.cmds(log)
                }
                return;
            }
            return;
        })

        if (!msg.content.startsWith(config.setup.prefix) && !msg.author.bot) {
            console.log(`${colors.gray('[CHAT-LOG]')}${colors.cyan('server')}[${colors.magenta(spy_guild)}]${colors.cyan('channel')}[${colors.magenta(spy_channel)}] ${colors.blue(spy_user)}: ${colors.green(spy_msg)}`)
            const log = `server[${spy_guild}] channel[${spy_channel}] ${spy_user}: ${spy_msg} `
            logger.chat(log)
            return;
        }

        if (msg.author.bot) {
            console.log(`${colors.yellow('[BOTS-LOG]')}${colors.red('server')}[${colors.magenta(spy_guild)}]${colors.red('channel')}[${colors.magenta(spy_channel)}] ${colors.blue(spy_user)}: ${colors.red(spy_msg)}`)
            const log = `server[${spy_guild}] channel[${spy_channel}] ${spy_user}: ${spy_msg} `
            bot_logger.bots(log);
            return;
        }

        if (msg.content.startsWith(config.setup.prefix) && !msg.author.bot) {
            console.log(`${colors.red('[CMDS-LOG]')}${colors.yellow('server')}[${colors.magenta(spy_guild)}]${colors.yellow('channel')}[${colors.magenta(spy_channel)}] ${colors.blue(spy_user)}: ${colors.blue(spy_msg)}`)
            const log = `server[${spy_guild}] channel[${spy_channel}] ${spy_user}: ${spy_msg} `
            cmd_logger.cmds(log)
        }
    } else {
        if (!spy_msg) { let spy_msg = "no txt provided" }

        function getUserFromMention(mention) {
            if (!mention) return;

            if (mention.startWith('<@') && mention.endsWith('>')) {
                mention = mention.slice(2, -1);
            }

            if (mention.startWith('!')) {
                mention = mention.slice(1);
            }

            return client.users.get(mention)
        }

        var other_logger = log4js.getLogger('other_logs')
        var other_bot_logger = log4js.getLogger('other_bots')
        var other_cmd_logger = log4js.getLogger('other_cmds')
        msg.attachments.forEach(attachments => {
            let url = attachments.url

            if (!msg.content.startsWith(config.setup.prefix) && !msg.author.bot) {
                if (url) {
                    console.log(`${colors.gray('[CHAT-LOG]')}${colors.cyan('server')}[${colors.magenta(spy_guild)}]${colors.cyan('channel')}[${colors.magenta(spy_channel)}] ${colors.blue(spy_user)}: ${colors.green(spy_msg)} ||| Image: ${url}`)
                    const log = `server[${spy_guild}] channel[${spy_channel}] ${spy_user}: ${spy_msg} ||| Image: ${url}`
                    other_logger.chat(log)
                }
                return;
            }

            if (msg.author.bot) {
                if (url) {
                    console.log(`${colors.yellow('[BOTS-LOG]')}${colors.red('server')}[${colors.magenta(spy_guild)}]${colors.red('channel')}[${colors.magenta(spy_channel)}] ${colors.blue(spy_user)}: ${colors.red(spy_msg)} ||| Image: ${url}`)
                    const log = `server[${spy_guild}] channel[${spy_channel}] ${spy_user}: ${spy_msg} `
                    other_bot_logger.bots(log);
                }
                return;
            }

            if (msg.content.startsWith(config.setup.prefix) && !msg.author.bot) {
                if (url) {
                    console.log(`${colors.red('[CMDS-LOG]')}${colors.yellow('server')}[${colors.magenta(spy_guild)}]${colors.yellow('channel')}[${colors.magenta(spy_channel)}] ${colors.blue(spy_user)}: ${colors.blue(spy_msg)} ||| Image: ${url}`)
                    const log = `server[${spy_guild}] channel[${spy_channel}] ${spy_user}: ${spy_msg} ||| Image: ${url} `
                    other_cmd_logger.cmds(log)
                }
                return;
            }
            return;
        })

        if (!msg.content.startsWith(config.setup.prefix) && !msg.author.bot) {
            console.log(`${colors.gray('[CHAT-LOG]')}${colors.cyan('server')}[${colors.magenta(spy_guild)}]${colors.cyan('channel')}[${colors.magenta(spy_channel)}] ${colors.blue(spy_user)}: ${colors.green(spy_msg)}`)
            const log = `server[${spy_guild}] channel[${spy_channel}] ${spy_user}: ${spy_msg} `
            other_logger.chat(log)
            return;
        }

        if (msg.author.bot) {
            console.log(`${colors.yellow('[BOTS-LOG]')}${colors.red('server')}[${colors.magenta(spy_guild)}]${colors.red('channel')}[${colors.magenta(spy_channel)}] ${colors.blue(spy_user)}: ${colors.red(spy_msg)}`)
            const log = `server[${spy_guild}] channel[${spy_channel}] ${spy_user}: ${spy_msg} `
            other_bot_logger.bots(log);
            return;
        }

        if (msg.content.startsWith(config.setup.prefix) && !msg.author.bot) {
            console.log(`${colors.red('[CMDS-LOG]')}${colors.yellow('server')}[${colors.magenta(spy_guild)}]${colors.yellow('channel')}[${colors.magenta(spy_channel)}] ${colors.blue(spy_user)}: ${colors.blue(spy_msg)}`)
            const log = `server[${spy_guild}] channel[${spy_channel}] ${spy_user}: ${spy_msg} `
            other_cmd_logger.cmds(log)
        }
    }
})



client.login(MainToken);

const Discord = require('discord.js');
const { version } = require("discord.js");
let cpuStat = require("cpu-stat")
const m = require("moment-duration-format");
const moment = require("moment");
let os = require('os')
const bot = new Discord.Client();
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    let cpuLol;
        cpuStat.usagePercent(async function (err, percent, seconds) {
            if (err) {
                return console.log(err);
            }
            const duration = moment.duration(message.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
            const botinfo = new Discord.MessageEmbed()
                .setAuthor(message.client.user.username + ` ${lang_en.commands_uptime_bot_title}`)
                .setTitle(lang_en.commands_uptime_bot_status)
                .setColor(botsettings.embed_color_message_discord_bot)
                .addField(lang_en.commands_uptime_bot_memory, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
                .addField(lang_en.commands_uptime_bot_uptime, `${duration}`, true)
                .addField(lang_en.commands_uptime_bot_users, `${message.client.users.cache.size}`, true)
                .addField(lang_en.commands_uptime_bot_servers, `${message.client.guilds.cache.size}`, true)
                .addField(lang_en.commands_uptime_bot_channels, `${message.client.channels.cache.size}`, true)
                .addField(lang_en.commands_uptime_bot_discord_js, `v${version}`, true)
                .addField(lang_en.commands_uptime_bot_node, `${process.version}`, true)
                .addField(lang_en.commands_uptime_bot_cpu, `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
                .addField(lang_en.commands_uptime_bot_cpu_usage, `\`${percent.toFixed(2)}%\``, true)
                .addField(lang_en.commands_uptime_bot_arch, `\`${os.arch()}\``, true)
                .addField(lang_en.commands_uptime_bot_platform, `\`\`${os.platform()}\`\``, true)
                .addField(lang_en.commands_uptime_bot_api_latency, `${(message.client.ws.ping)}ms`)
                .setFooter(`${lang_en.embed_asked} ` + message.author.username, message.author.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
         message.lineReply(botinfo)
        });
}

module.exports.config = {
    name: "uptime",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ['online', 'on']
}
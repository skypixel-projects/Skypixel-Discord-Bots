const Discord = require('discord.js');

const {
    version
} = require("discord.js");

let cpuStat = require("cpu-stat")
const m = require("moment-duration-format");
const moment = require("moment");
let os = require('os')
const bot = new Discord.Client();

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    let cpuLol;
        cpuStat.usagePercent(async function (err, percent, seconds) {
            if (err) {
                return console.log(err);
            }
            const duration = moment.duration(message.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
            const botinfo = new Discord.MessageEmbed()
                .setAuthor(message.client.user.username + ` dhas this specs.`)
                .setTitle("__**Stats:**__")
                .setColor(botsettings.embed_color_message_discord_bot)
                .addField("`⏳` Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
                .addField("`⌚️` Uptime ", `${duration}`, true)
                .addField("`📁` Users", `${message.client.users.cache.size}`, true)
                .addField("`📁` Servers", `${message.client.guilds.cache.size}`, true)
                .addField("`📁` Channels ", `${message.client.channels.cache.size}`, true)
                .addField("`👾` Discord.js", `v${version}`, true)
                .addField("`🤖` Node", `${process.version}`, true)
                .addField("`🤖` CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
                .addField("`🤖` CPU usage", `\`${percent.toFixed(2)}%\``, true)
                .addField("`🤖` Arch", `\`${os.arch()}\``, true)
                .addField("`💻` Platform", `\`\`${os.platform()}\`\``, true)
                .addField("API Latency", `${(message.client.ws.ping)}ms`)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
         message.channel.send(botinfo)
        });
}

module.exports.config = {
    name: "uptime",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ['online', 'on']
}
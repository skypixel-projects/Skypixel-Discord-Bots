const Discord = require("discord.js")

const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');

module.exports = bot => { 
    console.log(lang_en.console_ready)

    const runningDiscordBot = guild.channels.cache.find(channel => channel.name === 'developing')
    runningDiscordBot.send(lang_en.console_ready)
}
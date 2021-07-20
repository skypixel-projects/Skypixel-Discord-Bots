const Discord = require("discord.js")
const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');
const { bot } = require('../index');

// MineXx premium mode.
bot.on('ready', () => {    

    const botRole = "Skypixel Projects"

    if (bot.guilds.cache.get("786144853754904587")) {
        if (!bot.guilds.cache.get("786144853754904587").roles.cache.find(r => r.name === botRole)) return
        var role = bot.guilds.cache.get("786144853754904587").roles.cache.find(r => r.name === botRole);
        role.edit({
            name: 'Skypixel Premium',
            color: '#ffe600'
        })
    }
})

// Max premium mode.
bot.on('ready', () => {    

    const botRole = "Skypixel Projects"

    if (bot.guilds.cache.get("672018546125045760")) {
        if (!bot.guilds.cache.get("672018546125045760").roles.cache.find(r => r.name === botRole)) return
        var role = bot.guilds.cache.get("672018546125045760").roles.cache.find(r => r.name === botRole);
        role.edit({
            name: 'Skypixel Premium',
            color: '#ffe600'
        })
    }
})
const Discord = require("discord.js")

const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');

module.exports = bot => { 
    console.log(lang_en.console_ready)
    bot.user.setActivity(botsettings.discord_profile_activity, { type: 'LISTENING' });
}
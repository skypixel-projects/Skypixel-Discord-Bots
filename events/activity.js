const Discord = require("discord.js")

const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');

module.exports = bot => { 
    console.log("Activity is working")
    bot.user.setActivity(botsettings.discord_profile_activity, { type: 'LISTENING' });
}
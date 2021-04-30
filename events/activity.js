const Discord = require("discord.js")

const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');

module.exports = bot => { 
    bot.user.setPresence({status: `${botsettings.discord_profile_status}`});
    bot.user.setActivity(botsettings.discord_profile_activity, { type: botsettings.discord_profile_activity_type });
}
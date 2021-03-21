const Discord = require("discord.js")

const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');

module.exports = bot => {
    console.log('Presence event has been loaded!')

    bot.user.setActivity(botsettings.discord_profile_activity, {type: 'LISTENING'});
    bot.user.setPresence({status: botsettings.discord_profile_status});
}
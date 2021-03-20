const Discord = require("discord.js")
const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');

module.exports = bot => { 
    console.log(lang_en.console_ready)
    bot.user.setActivity(botsettings.discord_profile_activity, {type: 'LISTENING'});
    bot.user.setPresence({status: discord_profile_status});

    // bot.user.setPresence({
    //     status: botsettings.discord_profile_status,  // You can show online, idle... Do not disturb is dnd
    //     game: {
    //         name: botsettings.discord_profile_activity,  // The message shown
    //         type: "LISTENING" // PLAYING, WATCHING, LISTENING, STREAMING,
    //     }
    // });
}
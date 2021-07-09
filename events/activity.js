const Discord = require("discord.js")

const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');

module.exports = bot => { 
    bot.user.setPresence({status: "idle"});
    bot.user.setActivity(botsettings.discord_profile_activity, { type: botsettings.discord_profile_activity_type });

    bot.user.setPresence({
        status: 'online',
        activity: {
            name: 'with the creator',
            type: 'STREAMING',
            url: 'https://www.twitch.tv/maxwastaked'
        }
    })

    // setInterval(function(){ 
    //     bot.user.setActivity(botsettings.discord_profile_activity, { type: botsettings.discord_profile_activity_type });
    // }, 60000);

    // setInterval(function(){
    //     bot.user.setPresence({status: `${botsettings.discord_profile_status}`});
    // }, 60000);
}

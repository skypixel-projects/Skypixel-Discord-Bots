const Discord = require("discord.js")

const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');

module.exports = bot => { 
    bot.user.setPresence({status: `${botsettings.discord_profile_status}`});
    // bot.user.setActivity(botsettings.discord_profile_activity, { type: botsettings.discord_profile_activity_type });

   
    setInterval(function(){ 
        // bot.channels.cache.get("835600980892319834").send("<@762368975094022155> <@351664932271685632> <@726678975501303809> <@819678238623793213> <@764884863668846592> <@236811109066211329>");
        //  console.log('Alive packet')
        bot.user.setActivity(botsettings.discord_profile_activity, { type: botsettings.discord_profile_activity_type });
        }, 60000);
}

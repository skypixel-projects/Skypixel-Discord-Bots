const Discord = require("discord.js")
const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');
const { bot } = require('../index');

bot.on("ready", async () => {
    bot.user.setPresence({
        status: botsettings.discord_profile_status,
        activity: {
            name: botsettings.discord_profile_activity,
            type: botsettings.discord_profile_activity_type,
            url: 'https://www.twitch.tv/maxwastaked'
        }       
    })
})
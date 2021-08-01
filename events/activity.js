const botsettings = require('../botsettings.json');
const { bot } = require('../index');

bot.on("ready", async () => {
    // Auto slash command deleter
    // bot.api.applications(bot.user.id).commands().delete();

    bot.user.setPresence({
        status: botsettings.discord_profile_status,
        activity: {
            name: botsettings.discord_profile_activity,
            type: botsettings.discord_profile_activity_type,
            url: 'https://www.twitch.tv/maxwastaked'
        }       
    })
})
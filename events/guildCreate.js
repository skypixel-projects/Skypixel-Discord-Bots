const { bot } = require('../index');
const languages = require('quick.db');

bot.on("guildCreate", (guild) => {
    languages.set(guild.id, "lang_en")
})
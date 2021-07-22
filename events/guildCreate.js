const Discord = require("discord.js")
const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');
const { bot } = require('../index');
const languages = require('quick.db');

bot.on("guildCreate", (guild) => {
    languages.set(guild.id, "lang_en")
})
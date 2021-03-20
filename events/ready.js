const Discord = require("discord.js")
const lang_en = require('../languages/lang_en.json');

module.exports = bot => { 
    console.log(lang_en.console_ready)
    bot.user.setActivity("MaxWasTaked", {type: 'WATCHING'});
}
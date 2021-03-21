const Discord = require("discord.js")

const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');

module.exports = bot => { 
    console.log(lang_en.console_ready)

    bot.status.setPresence({
        status: "idle",  // You can show online, idle... Do not disturb is dnd
        game: {
            name: "MaxWasTaked",  // The message shown
            type: "WATCHING" // PLAYING, WATCHING, LISTENING, STREAMING,
        }
    });
}
const Discord = require("discord.js")

const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');

module.exports = bot => { 
    //Bot-ul va trimite un mesaj pe ori ce canal denumit "Welcome"!
    const welcomeChannel = bot.channels.cache.find(channel => channel.name === 'welcome')
    welcomeChannel.send (`Welcome! ${member}`)

    console.log(`Find a new member ${member} join to ${guild}`)
}
const Discord = require("discord.js")

const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');

module.exports = bot => { 
    const guild = bot.channels.get("672018546125045760");

    //Bot-ul va trimite un mesaj pe ori ce canal denumit "Welcome"!
    const welcomeChannel = guild.channels.cache.find(channel => channel.name === 'welcome')
    welcomeChannel.send (`Welcome! ${member}`)

    //Bot-ul va adauga automat rolul de default!
    let DefaultRole = message.guild.roles.cache.get('677939383038640199');
    member.roles.add(DefaultRole);
}
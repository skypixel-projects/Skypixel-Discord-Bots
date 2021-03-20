const Discord = require("discord.js")

module.exports = bot => { 
    console.log(`${bot.user.username} is up to running! Please be note this bot is not stable yet!`)
    bot.user.setActivity("MaxWasTaked", {type: 'WATCHING'});
}
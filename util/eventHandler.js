const Discord = require('discord.js');
const reqEvent = (event) => require(`../events/${event}`)

module.exports = bot => {
    // bot.on("ready", function() {reqEvent("ready"<-- File name here!
    // bot.on("ready"<-- Event name here!
    bot.on("ready", function() {reqEvent("ready") (bot) })
    bot.on("ready", function() {reqEvent("activity") (bot) })
    bot.on("messageReactionAdd", function() {reqEvent("react") (bot) })
}

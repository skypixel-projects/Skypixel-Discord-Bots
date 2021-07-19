const Discord = require("discord.js")
const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');
const ms = require('ms');
const timeSpan = ms("3000 days")

module.exports =  {
    name: 'ready',
    once: false,
    execute(user, Discord, bot) {
        const createdAt = new Date(member.user.createdAt).getTime();
        const difference = Date.new() - createdAt;
        if (difference < timeSpan) {
            member.send("You have been detected for using alt account :(");
        }
    }
}

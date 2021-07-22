const Discord = require("discord.js")
const botsettings = require('../../botsettings.json');
const lang_en = require('../../languages/lang_en.json');
const { bot } = require('../../index');

// Check for the "WTF" message and replay with some message.
bot.on('message', message => {
    if (message.author.bot) return;

    var server = message.guild.id;

    if (server === "786144853754904587") {
        if (message.content.toLowerCase().includes('wtf')) {
            message.lineReply("WTF = Welcome To Facebook");
        }
    }
})
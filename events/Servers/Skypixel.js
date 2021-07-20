const Discord = require("discord.js")
const botsettings = require('../../botsettings.json');
const lang_en = require('../../languages/lang_en.json');
const { bot } = require('../../index');

bot.on('message', message => {
    var server = message.guild.id;

    if (server === "771252294267699210") {
        if (message.content.includes("wtf")) {
            message.lineReply("WTF = Welcome To Facebook");
        }
    }
})
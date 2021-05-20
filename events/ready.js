const Discord = require("discord.js")
const fs = require("fs");

const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');

const hook = new Discord.WebhookClient('828735435332517990', 'QQh6rSiyRsejSU5rpdH9y9LaSoa14aHo2Zhlt1cVO4wDfwPiy37bSlLVX3Qma1aC1q2S');

module.exports = bot => { 
    console.clear();
    hook.send(lang_en.console_ready);
    console.log(lang_en.console_ready_webhook);
}
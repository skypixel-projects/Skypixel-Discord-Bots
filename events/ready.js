const Discord = require("discord.js")
const fs = require("fs");

const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');

// https://discord.com/api/webhooks/852084762985365514/0O2v0UP2jpnpsCkd_Fr0W-MKPhyFsaHN71-XRNBV2y1AJhiDVM9GPalWYU39Ftj0hLTj

const hook = new Discord.WebhookClient('852084762985365514', '0O2v0UP2jpnpsCkd_Fr0W-MKPhyFsaHN71-XRNBV2y1AJhiDVM9GPalWYU39Ftj0hLTj');

module.exports = bot => { 
    hook.send(lang_en.console_ready);
    console.log(lang_en.console_ready_webhook);
}
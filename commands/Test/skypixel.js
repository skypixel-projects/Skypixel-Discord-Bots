const Discord = require('discord.js');

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);

const hook = new Discord.WebhookClient('828735435332517990', 'QQh6rSiyRsejSU5rpdH9y9LaSoa14aHo2Zhlt1cVO4wDfwPiy37bSlLVX3Qma1aC1q2S');

module.exports.run = async (bot, message, args) => {
    
    hook.send('Official link: ' + botsettings.skypixel_official_website_link);
}

module.exports.config = {
    name: "website",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ['web', 'site']
}
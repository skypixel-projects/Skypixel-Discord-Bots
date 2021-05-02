const discord = require('discord.js');
require('discord-reply'); //⚠️ IMPORTANT: put this before your discord.Client()
const bot = new discord.Client();

const botsettings = require('../botsettings.json');
const lang_en = require(`../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    // message.delete();


    // if (message.content === 'hi puro') {
    //     message.lineReplyNoMention(`My name is ${bot.user.username}`);
    // }

    //
    //Aici este linia de code unde botul reactioneaza si sterge mesajul
    //

    message.channel.send('```This message will been deleted after 25000 milliseconds!```')
        .then(msg => {
            msg.delete({ timeout: 25000 /*time unitl delete in milliseconds*/});
            msg.react("👎"),
            msg.react("👍"),
            msg.react('🍎'),
            msg.react('🍊'),
            msg.react('🍇')
        })
        .catch('error...');
}

module.exports.config = {
    name: "test",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ['dev', 'ping']
}
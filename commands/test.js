const Discord = require('discord.js');
const lang_en = require('../languages/lang_en.json');

module.exports.run = async (bot, message, args) => {
    // message.delete();

    message.channel.send('This message will been deleted after 10000 milliseconds!')
        .then(msg => {
            msg.delete({ timeout: 10000 /*time unitl delete in milliseconds*/});
            msg.react("👎")
            msg.react("👍")
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
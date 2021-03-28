const Discord = require('discord.js');
const lang_en = require('../languages/lang_en.json');

module.exports.run = async (bot, message, args) => {
    message.delete();

    message.channel.send(lang_en.maintenance)
        .then(msg=> { 
            msg.react("👍")
            msg.react("👎")
        })
        .catch(() => console.error('One of the emojis failed to react.'));
    console.clear();
}

module.exports.config = {
    name: "test",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ['dev', 'ping']
}
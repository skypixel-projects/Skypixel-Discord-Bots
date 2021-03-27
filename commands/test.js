const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    message.delete();

    message.channel.send('React whit 825398283215700009 for free rank!')
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
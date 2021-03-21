const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    message.delete();

    message.channel.send(`Testing... `).catch(err => message.reply(`Something went wrong... ${err}`));
    console.clear();
}

module.exports.config = {
    name: "test",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ['dev', 'changelogs', 'developer']
}
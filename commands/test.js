const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    message.delete();


    const DevChannel = guild.channels.cache.find(channel => channel.name === 'developing')
    DevChannel.send('The testing packet has been sended!')



    message.channel.send('Testing...')
    console.clear();
    console.log('Sending a test packet! %s')
}

module.exports.config = {
    name: "test",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ['dev', 'changelogs', 'developer']
}
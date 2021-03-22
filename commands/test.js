const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    message.delete();
    console.clear();

    const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('Sended a ping packet!')
    message.channel.send(embed);
}

module.exports.config = {
    name: "ping",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ['ping', 'pi', 'png']
}
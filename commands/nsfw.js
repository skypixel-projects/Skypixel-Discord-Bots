const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.delete();

    message.channel.send(`The command is working!`);

}

module.exports.config = {
    name: "secsy",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}
const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {
    message.lineReplyNoMention('Ok i will send the message to the announcement channel!');
    let channel = message.channel.guild.channels.cache.find((channel) => channel.name.toLowerCase() === `announcement`)
    
    channel.send(`@everyone ` + args)
}

module.exports.config = {
    name: "announce",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ["ac", "announce", "announcement"]
}
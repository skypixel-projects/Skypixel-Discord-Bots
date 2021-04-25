const Discord = require("discord.js");
const bot = new Discord.Client({ disableMentions: 'everyone' });

module.exports.run = async (bot, message, args) => {
    message.delete();

    let person = message.guild.member(message.mentions.users.first() || message.guild.members.fetch(args[1]))

    if(!message.author.bot) person.user.send(args);
}

module.exports.config = {
    name: "send",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ["send", "bc", "broadcast"]
}
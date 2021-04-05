const Discord = require("discord.js");

const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');


module.exports.run = async (bot, message, args) => {
    message.delete();

    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(lang_en.commands_help_author)
            .setDescription(lang_en.commands_help_description)
            .addFields({ name: lang_en.commands_help_prefix, value: '```' + `${botsettings.prefix}` + '```', inline: true})
            .setColor('RED')
            
        message.channel.send(embed);
    }
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}
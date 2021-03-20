const Discord = require("discord.js");
const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');


module.exports.run = async (bot, message, args) => {
    //We have to set a argument for the help command beacuse its going to have a seperate argument.
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(lang_en.commands_help_author)
            .setDescription(lang_en.commands_help_description)
            .addFields({ name: 'Prefix', value: `${botsettings.prefix}`, inline: true})
            .setColor('#00FFF3')
            
        message.channel.send(embed);
    }
}

module.exports.config = {
    name: "help",
    description: "The help command",
    usage: "",
    accessableby: "Members",
    aliases: []
}
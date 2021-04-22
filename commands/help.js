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
            .addFields({ name: 'More help', value: '```' + `-help <commands>` + '```', inline: true})
            .setColor('RED')
            .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
        message.channel.send(embed);
    }

    if(args === "music"){
        message.reply('Hello the music command is comming soon!')
        message.channel.send('```**-play** - **null**```')
        message.channel.send('```**-stop** - **null**```')
        message.channel.send('```**-skip* - **null**```')
        message.channel.send('```**-pause** - **null**```')
    }

    if(args === "avatar"){
        message.reply('Hello the avatar command is comming soon!')
    }

    if(args === "meme"){
        message.reply('Hello the meme command is comming soon!')
    }

    if(args === "memberinfo"){
        message.reply('Hello the memberinfo command is comming soon!')
    }

    if(args === "clear"){
        message.reply('Hello the clear command is comming soon!')
    }

    if(args === "cooldown"){
        message.reply('Hello the cooldown command is comming soon!')
    }

    if(args === "help"){
        message.reply('Hello the help command is comming soon!')
    }

    if(args === "kick"){
        message.reply('Hello the kick command is comming soon!')
    }

    if(args === "ban"){
        message.reply('Hello the ban command is comming soon!')
    }
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}
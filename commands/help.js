const Discord = require("discord.js");

const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');


module.exports.run = async (bot, message, args) => {
    message.delete();

    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    // The main command handler
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

    // The music command handler
    if(args === "music"){
        var embed = new Discord.MessageEmbed()
            .addFields({ name: "Music commands", value: '```' + `-play, -stop, -skip, -leave, -volume` + '```', inline: true})
            .setColor('RED')
            .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
        message.channel.send(embed);
    }

    // The fun command handler
    if(args === "fun"){
        var embed = new Discord.MessageEmbed()
            .addFields({ name: "Fun commands", value: '```' + `-avatar, -nsfw, -meme, -memberinfo` + '```', inline: true})
            .setColor('RED')
            .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
        message.channel.send(embed);
    }

    // The admin command handler
    if(args === "admin"){
        var embed = new Discord.MessageEmbed()
            .addFields({ name: "Admin commands", value: '```' + `-kick, -clear, -ban, -removerole, -addrole, -cooldown` + '```', inline: true})
            .setColor('RED')
            .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
        message.channel.send(embed);
    }

    // The random command handler
    if(args === "random"){
        var embed = new Discord.MessageEmbed()
            .addFields({ name: "Random commands", value: '```' + `-test, -skypixel` + '```', inline: true})
            .setColor('RED')
            .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
        message.channel.send(embed);
    }
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["help", "?"]
}
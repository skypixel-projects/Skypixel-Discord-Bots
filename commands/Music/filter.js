const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`, `flanger`, `gate`, `haas`, `reverse`, `surround`, `mcompand`, `phaser`, `tremolo`, `earwax`].includes(args)) {
        let filter = bot.distube.setFilter(message, args);
        var embed = new Discord.MessageEmbed()
            .setTitle(lang_en.commands_filter_title)
            .setDescription(lang_en.commands_filter_description + (filter || lang_en.commands_filter_description_off))
            .setColor(botsettings.embed_color_message_discord_bot)
            .setFooter(`${lang_en.embed_asked} ` + message.author.username, message.author.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
        message.lineReply(embed)
    }
}

module.exports.config = {
    name: "filter",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["filter"]
}
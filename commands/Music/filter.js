const Discord = require("discord.js");

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`, `flanger`, `gate`, `haas`, `reverse`, `surround`, `mcompand`, `phaser`, `tremolo`, `earwax`].includes(args)) {
        let filter = bot.distube.setFilter(message, args);
        var embed = new Discord.MessageEmbed()
            .setTitle(`Current queue:`)
            .setDescription("Current queue filter: " + (filter || "Off"))
            .setColor(botsettings.embed_color_message_discord_bot)
            .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
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
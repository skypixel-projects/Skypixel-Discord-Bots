const Discord = require("discord.js");

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    if(message.content.includes("-play")) {
        if(!message.member.voice.channel) return message.lineReply("Please join a voice channel first!");
        let search = args
        if(!search) return message.lineReply('Please provide a search query');
        bot.distube.play(message, search)
    }

    if(message.content.includes("-leave")) {
        if (message.member.voice.channel) {
            let queue = bot.distube.getQueue(message);
            if (queue) {
                bot.distube.stop(message);
                message.lineReply('Okay I will stop the music for you and I will leave from the channel!');
            }
        } else {
            message.reply(lang_en.commands_music_member_join_voice);
        }
    }

    if(message.content.includes("-skip")) {
        if(!message.member.voice.channel) return message.lineReply("please join a voice channel first!");
        bot.distube.skip(message);
        message.lineReply('Okay I will skip the music for you!');
    }

    if(message.content.includes("-queue")) {
        let queue = bot.distube.getQueue(message);
        var embed = new Discord.MessageEmbed()
            .setTitle(`Current queue:`)
            .setDescription(queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - ${song.formattedDuration}`).slice(0, 10))
            .setColor(botsettings.embed_color_message_discord_bot)
            .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
        message.lineReply(embed)
    }

    if(message.content.includes("-filter")) {
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
}

module.exports.config = {
    name: "play",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["play", "skip", "leave", "filter", "queue"]
}
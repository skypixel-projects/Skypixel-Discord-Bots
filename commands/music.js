const ytdl = require('ytdl-core');
const Discord = require("discord.js");

const botsettings = require('../botsettings.json');
const lang_en = require(`../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    // message.delete();

    if(message.content.includes("-play")){
        if(!message.content.includes('https://')) {
            return message.lineReplyNoMention(lang_en.commands_music_url_error);
        } else {
            message.delete();

            var embed = new Discord.MessageEmbed()
                .addFields({ name: "Playing now:", value: '```' + args + '```', inline: true})
                .setColor(botsettings.embed_color_message_discord_bot)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            message.channel.send(embed);
        }

        if(message.content.includes('soundcloud')) {
            return message.lineReplyNoMention(lang_en.commands_music_error_soundcloud);
        }

        if(message.content.includes('spotify')) {
            return message.lineReplyNoMention(lang_en.commands_music_error_soptify);
        }

        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            // Aici este youtube search!
            connection.play(ytdl(`${args}`, { filter: 'audioonly' }, { volume: 100.0 }, { type: 'opus' }));
        } else {
            message.lineReplyNoMention(lang_en.commands_music_member_join_voice);
        }
    }

    if(message.content === '-skip'){
        message.lineReplyNoMention(lang_en.commands_music_skip_execute);
    }

    if(message.content === '-leave'){
        message.lineReplyNoMention(lang_en.commands_music_leave_execute);

        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            connection.disconnect();
        } else {
            message.reply(lang_en.commands_music_member_join_voice);
        }
    }

    if(message.content === '-pause'){
        message.lineReplyNoMention(lang_en.commands_music_pause_execute);
    }

    if(message.content === '-volume'){
        message.lineReplyNoMention(lang_en.commands_music_volume_execute);
    }
}

module.exports.config = {
    name: "play",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["play", "skip", "leave", "pause", "volume"]
}
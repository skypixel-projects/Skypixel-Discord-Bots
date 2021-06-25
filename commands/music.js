const Discord = require("discord.js");
const ytdl = require("discord-ytdl-core");

const botsettings = require('../botsettings.json');
const lang_en = require(`../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    if(message.content.includes("-play")){
        if(!message.content.includes('https://')) {
            return message.lineReplyNoMention(lang_en.commands_music_url_error);
        }

        if(message.content.includes('soundcloud')) {
            return message.lineReplyNoMention(lang_en.commands_music_error_soundcloud);
        }

        if(message.content.includes('spotify')) {
            return message.lineReplyNoMention(lang_en.commands_music_error_soptify);
        }

        if (message.member.voice.channel) {
            message.member.voice.channel.join().then(connection => {

                // console.log(args)

                let dispatcher = connection.play(ytdl(`${args}`, {
                    quality: 'highest',
                    filter: "audioonly",
                    fmt: "mp3",
                    encoderArgs: ['-af', 'bass=g=10'],
                    highWaterMark: 1 << 25
                }));
        
                dispatcher.setVolume(0.30);
                dispatcher.setBitrate(12850);
        
                dispatcher.on('start', () => {
                    message.lineReplyNoMention(`Okay music is playing now! All music will play in the highest audio quality! (Experimental)!`);
                });

                dispatcher.on('finish', () => { 
                    message.member.voice.channel.leave()
                });

                dispatcher.on('error', (error) => {
                    console.log(error)
                    message.lineReplyNoMention(`Errors are common because this command is only experimental!`);
                });
            });
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
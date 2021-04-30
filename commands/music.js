const ytdl = require('ytdl-core');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    // message.delete();

    if(message.content.includes("-play")){
        if(!message.content.includes('https://')) {
            return message.lineReplyNoMention(`You need to specify the URL of the music!`);
        } else {
            message.delete();

            var embed = new Discord.MessageEmbed()
                .addFields({ name: "Playing now:", value: '```' + args + '```', inline: true})
                .setColor(botsettings.embed_color_message_discord_bot)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            message.channel.send(embed);
        }

        if(message.content.includes('soundcloud')) {
            return message.lineReplyNoMention(`I'm sorry the soundcloud music is not working yet!`);
        }

        if(message.content.includes('spotify')) {
            return message.lineReplyNoMention(`I'm sorry the spotify music is not working yet!`);
        }

        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            // Aici este youtube search!
            connection.play(ytdl(`${args}`, { filter: 'audioonly' }, { volume: 100.0 }, { type: 'opus' }));
        } else {
            message.lineReplyNoMention('You need to join a voice channel first!');
        }
    }

    if(message.content === '-skip'){
        message.lineReplyNoMention('Skip command has been executed!');
    }

    if(message.content === '-leave'){
        message.lineReplyNoMention('Leave command has been executed!');

        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            connection.disconnect();
        } else {
            message.reply('You need to join a voice channel first!');
        }
    }

    if(message.content === '-pause'){
        message.lineReplyNoMention('Pause command has been executed!');
    }

    if(message.content === '-volume'){
        message.lineReplyNoMention('Volume command has been executed!');
    }
}

module.exports.config = {
    name: "play",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["play", "skip", "leave", "pause", "volume"]
}
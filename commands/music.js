const Discord = require("discord.js");

const botsettings = require('../botsettings.json');
const lang_en = require(`../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {

    message.delete();

    if(message.content.includes("-play")) {
        if(!message.member.voice.channel) return message.channel.send("Please join a voice channel first!");
        let search = args
        if(!search) return message.channel.send('Please provide a search query');
        bot.distube.play(message, search)
    }

    if(message.content.includes("-stop")) {
        if (message.member.voice.channel) {
            bot.distube.stop(message);
            const connection = await message.member.voice.channel.join();
            connection.disconnect();
        } else {
            message.reply(lang_en.commands_music_member_join_voice);
        }
        var embed = new Discord.MessageEmbed()
            .setTitle(`Stop music:`)
            .setDescription("Okay I will stop the music for you!")
            .setColor(botsettings.embed_color_message_discord_bot)
            .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
        message.channel.send(embed)
    }

    if(message.content.includes("-skip")) {
        if(!message.member.voice.channel) return message.channel.send("please join a voice channel first!");
        bot.distube.skip(message);
        var embed = new Discord.MessageEmbed()
            .setTitle(`Skip music:`)
            .setDescription("Okay I will skip the music for you!")
            .setColor(botsettings.embed_color_message_discord_bot)
            .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
        message.channel.send(embed)
    }

    if(message.content.includes("-queue")) {
        let queue = bot.distube.getQueue(message);
        // message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
        //     `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        // ).slice(0, 10).join("\n"));
        var embed = new Discord.MessageEmbed()
            .setTitle(`Current queue:`)
            .setDescription(queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - ${song.formattedDuration}`))
            .setColor(botsettings.embed_color_message_discord_bot)
            .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
        message.channel.send(embed)
    }

    if(message.content.includes("-filter")) {
        if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(args)) {
            let filter = bot.distube.setFilter(message, args);
            var embed = new Discord.MessageEmbed()
                .setTitle(`Current queue:`)
                .setDescription("Current queue filter: " + (filter || "Off"))
                .setColor(botsettings.embed_color_message_discord_bot)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            message.channel.send(embed)
        }
    }
}

module.exports.config = {
    name: "play",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["play", "skip", "stop", "filter", "queue"]
}
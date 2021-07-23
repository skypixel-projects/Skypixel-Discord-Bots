const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const fs = require("fs");
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    const voicechannel = message.member.voice.channel;
    if (!voicechannel) return message.lineReply(lang_en.commands_rec_voice_error);

    const connection = await message.member.voice.channel.join();
    const receiver = connection.receiver.createStream(message.member, {
        mode: "pcm",
        end: "silence"
    });

    const writer = receiver.pipe(fs.createWriteStream(`./recorded-${message.author.id}.pcm`));
    writer.on("finish", () => {
        message.member.voice.channel.leave();
        message.lineReply(lang_en.commands_rec_finish);
    });
}

module.exports.config = {
    name: "rec",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: []
}
const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const fs = require("fs");
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    const voicechannel = message.member.voice.channel;
    if (!voicechannel) return message.lineReply(lang_en.commands_playrec_voice_error);

    if (!fs.existsSync(`./recorded-${message.author.id}.pcm`)) return message.lineReply(lang_en.commands_playrec_rec_error);

    const connection = await message.member.voice.channel.join();
    const stream = fs.createReadStream(`./recorded-${message.author.id}.pcm`);

    const dispatcher = connection.play(stream, {
        type: "converted"
    });

    dispatcher.on("finish", () => {
        message.member.voice.channel.leave();
        return message.lineReply(lang_en.commands_playrec_finish);
    })
}

module.exports.config = {
    name: "playrec",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: []
}
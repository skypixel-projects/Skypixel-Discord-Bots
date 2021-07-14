const Discord = require("discord.js");

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);

const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    const voicechannel = message.member.voice.channel;
    if (!voicechannel) return message.lineReply("Please join a voice channel!");

    if (!fs.existsSync(`./recorded-${message.author.id}.pcm`)) return message.lineReply("Your audio is not recorded!");

    const connection = await message.member.voice.channel.join();
    const stream = fs.createReadStream(`./recorded-${message.author.id}.pcm`);

    const dispatcher = connection.play(stream, {
        type: "converted"
    });

    dispatcher.on("finish", () => {
        message.member.voice.channel.leave();
        return message.lineReply("finished playing audio");
    })
}

module.exports.config = {
    name: "playrec",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: []
}
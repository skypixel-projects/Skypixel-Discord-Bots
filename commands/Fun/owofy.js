const Discord = require("discord.js");
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    let sentence = args;
    if (!sentence) return message.reply('I can\'t owo-fy an empty message! uwu');
    
    let faces=["(・`ω´・)",";;w;;","owo","UwU",">w<","^w^"];

    let newSentence = sentence.replace(/[lr]/g, 'w');
        newSentence = newSentence.replace(/(?:r|l)/g, "w");
        newSentence = newSentence.replace(/(?:R|L)/g, "W");
        newSentence = newSentence.replace(/n([aeiou])/g, 'ny$1');
        newSentence = newSentence.replace(/N([aeiou])/g, 'Ny$1');
        newSentence = newSentence.replace(/N([AEIOU])/g, 'NY$1');
        newSentence = newSentence.replace(/ove/g, "uv");
        newSentence = newSentence.replace(/\!+/g, " "+ faces[Math.floor(Math.random()*faces.length)]+ " ");
    message.channel.send(newSentence);
}

module.exports.config = {
    name: "owofy",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}
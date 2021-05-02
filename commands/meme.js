const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

const botsettings = require('../botsettings.json');
const lang_en = require(`../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    message.delete();

    const subReddits = ["meme", "me_irl", "dankmeme"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setColor(botsettings.embed_color_message_discord_bot)
    .setTitle(`From /r/${random}`)
    .setURL(`http://reddit.com/${random}`)
    .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())

    message.channel.send(embed);

}

module.exports.config = {
    name: "meme",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}
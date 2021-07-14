const Discord = require("discord.js");

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);


module.exports.run = async (bot, message, args) => {
    let person = message.mentions.members.first();

    if (!person || message.author.id === person.id) {
        person = message.guild.members
            .filter(m => m.id !== message.author.id)
            .random();
    }

    const love = Math.random() * 100;
    const loveIndex = Math.floor(love / 10);
    const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

    const embed = new Discord.MessageEmbed()
        .setColor("#ffb6c1")
        .addField(`☁ **${person.displayName}** loves **${message.member.displayName}** this much:`,
        `💟 ${Math.floor(love)}%\n\n${loveLevel}`);

    message.lineReply(embed);
}

module.exports.config = {
    name: "love",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}
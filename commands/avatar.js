const Discord = require("discord.js")

const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');

module.exports.run = async (bot, message, args) => {
    if(message.author.bot) return;
    // message.reply(message.author.displayAvatarURL());
    message.delete();

    const img = await message.author.displayAvatarURL();
    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`${message.author}`)

    message.channel.send(embed);
}

module.exports.config = {
    name: "avatar",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}
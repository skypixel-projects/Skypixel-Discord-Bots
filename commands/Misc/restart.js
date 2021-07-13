const Discord = require("discord.js");

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);


module.exports.run = async (bot, message, args) => {
    if (message.author.id !== '236811109066211329') {
        return message.channel.send(`You cannot use this command!`)
    }
    await message.channel.send(`Restarting bot...`)
    process.exit();
}

module.exports.config = {
    name: "restart",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: []
}
const Discord = require("discord.js");

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);


module.exports.run = async (bot, message, args) => {
    const memberTarget = message.mentions.users.first();

    memberTarget.voice
        .kick('Kicked!')
        .then((users) => message.channel.send(`${users} has been kicked from the voice channel!`))
        .catch(console.error);
}

module.exports.config = {
    name: "disconnect",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ["disconnect", "disc"]
}
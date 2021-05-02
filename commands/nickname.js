const botsettings = require('../botsettings.json');
const lang_en = require(`../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    if(message.content.includes('add')) {
        message.channel.send(lang_en.commands_nickname_added)
    }

    if(message.content.includes('remove')) {
        message.channel.send(lang_en.commands_nickname_removed)
    }
}

module.exports.config = {
    name: "",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ["nick", "nickname"]
}
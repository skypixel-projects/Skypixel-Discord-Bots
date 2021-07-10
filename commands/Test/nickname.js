const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    message.lineReplyNoMention(`Okay I will change my name in to ${args}`);
    message.guild.me.setNickname(args);
}

module.exports.config = {
    name: "nick",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ["nick", "nickname"]
}
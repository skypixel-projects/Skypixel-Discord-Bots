const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    message.delete();

    let epicRole = message.guild.roles.cache.get('677939383038640199');
    const member = message.mentions.members.first();

    member.roles.remove(epicRole);
    message.channel.send(lang_en.commands_addrole_removed)
}

module.exports.config = {
    name: "removerole",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}
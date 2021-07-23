const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    if(!message.guild) return;
    if(!message.member.hasPermission('BAN_MEMBERS', 'ADMINISTRATOR')) return;

    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if(user) {
        const member = message.guild.member(user);

        if(member) {
            member

            .ban({
                reason: lang_en.commands_ban_reason,
            })
            .then(() => {
                message.lineReply(lang_en.commands_ban_succes);
            })
            .catch(err => {
                message.lineReply(lang_en.commands_ban_member_unable);
                console.error(err);
            });
        } else {
            message.lineReply(lang_en.commands_ban_guild_member)
        }
    } else {
        message.lineReply(lang_en.commands_ban_member_mention)
    }
}

module.exports.config = {
    name: "ban",
    description: "",
    usage: "",
    accessableby: "Admins",
    aliases: []
}
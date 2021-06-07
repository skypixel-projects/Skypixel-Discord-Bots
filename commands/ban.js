const botsettings = require('../botsettings.json');
const lang_en = require(`../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    message.delete();

    if(!message.guild) return;
    if(!message.member.hasPermission('BAN_MEMBERS', 'ADMINISTRATOR')) return;

    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if(user) {
        const member = message.guild.member(user);

        if(member) {
            member

            .ban({
                reason: 'They were bad!',
            })
            .then(() => {
                message.reply('Successfully banned!');
            })
            .catch(err => {
                message.reply('I was unable to ban the member');
                console.error(err);
            });
        } else {
            message.reply(`That user isn't in this guild`)
        }
    } else {
        message.reply(`You didn't mention the user to ban!`)
    }
}

module.exports.config = {
    name: "ban",
    description: "",
    usage: "",
    accessableby: "Admins",
    aliases: []
}
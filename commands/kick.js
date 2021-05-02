const botsettings = require('../botsettings.json');
const lang_en = require(`../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    message.delete();

    if(!message.member.hasPermission('KICK_MEMBERS'))
        message.channel.send(lang_en.commands_kick_permission);
    else {
        let member = message.guild.members.cache.get(args);
        if(member) {
        try {
            await member.kick();
            console.log(member + lang_en.commands_kick_successfully);
            message.channel.send(member + lang_en.commands_kick_successfully)
        }
            catch(err) {
            console.log(err);
        }
    }
}
}

module.exports.config = {
    name: "kick",
    description: "",
    usage: "",
    accessableby: "Admins",
    aliases: []
}
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    if(args > 100) return

    await message.channel.bulkDelete(parseInt(args), true).then((_message) => {
        message.channel.send(`**${args}** ${lang_en.commands_clear_reply}`)
            .then(msg => {
                msg.delete({ timeout: 12500 });
            });
    });
}

module.exports.config = {
    name: "clear",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ['c', 'purge']
}
const botsettings = require('../botsettings.json');
const lang_en = require(`../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    if(args > 100) return

    await message.channel.bulkDelete(parseInt(args) + 1, true).then((_message) => {
        message.channel.send(`Done! ${args} of message has been deleted!`)
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
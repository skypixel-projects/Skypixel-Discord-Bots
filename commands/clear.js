const botsettings = require('../botsettings.json');
const lang_en = require(`../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    message.delete();

    if(!args[0]) return message.channel.send('Please specify a number of messages to delete ranging from 1 - 1000')
    if(isNaN(args[0])) return message.channel.send('Numbers are only allowed')
    if(parseInt(args[0]) > 1000) return message.channel.send('The max amount of messages that I can delete is 1000')
    await message.channel.bulkDelete(parseInt(args[0]) + 1)
        .catch(err => console.log(err))
    message.channel.send('Deleted ' + args[0]  + " messages.")
}

module.exports.config = {
    name: "clear",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ['c', 'purge']
}
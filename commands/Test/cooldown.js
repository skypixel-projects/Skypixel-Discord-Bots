const usedCommand = new Set();

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    message.delete();
    
    if(usedCommand.has(message.author.id)){
        message.reply(lang_en.commands_cooldown_unsuccessfully)
    } else {
        message.reply(lang_en.commands_cooldown_successfully)
        
        
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
}

module.exports.config = {
    name: "cooldown",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}
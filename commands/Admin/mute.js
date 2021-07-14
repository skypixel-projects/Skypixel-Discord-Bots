const Discord = require("discord.js");

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);


module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first();
    if(!user) return message.lineReply(`You need to specify a member!`)

    message.channel.overwritePermissions([
        {
            id: user.id,
            deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY'],
        },
    ]);

    message.lineReply(`Muted!`)
} 

module.exports.config = {
    name: "mute",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: []
}
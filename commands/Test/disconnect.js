const Discord = require("discord.js");

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);


module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first();
    if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.voice
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
                message.lineReply(`Successfully kicked from the voice ${user.tag}!`);
            })
            .catch(err => {
                message.lineReply('I was unable to kick the member :(');
                console.error(err);
            });
        } else {
            message.lineReply("That user isn't in this guild!");
        }
    } else {
        message.lineReply("You didn't mention the user to kick!");
    }
}

module.exports.config = {
    name: "disconnect",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ["disconnect", "vckick", "disc"]
}
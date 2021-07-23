const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    //lets use parameters (optional)
    /**
    * @param {Message} message
    */
    //so firstly we will check whether the author of the message has permissions
    //this line means if the author doesn't have manage roles permission it will stop the process and send the following text
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(lang_en.commands_removerole_permission)
    //next we define some variables
    const target = message.mentions.members.first() //member = mentions
    if(!target) return message.channel.send(lang_en.commands_removerole_member) //when no member is pinged
    const role = message.mentions.roles.first() // roles = mentions
    if(!role) return message.channel.send(lang_en.commands_removerole_role) //when no role is specified or pinged
    //now the code!
    await target.roles.remove(role) // removeing the role to the user
    message.lineReply(`${target.user.username} ${lang_en.commands_removerole_succes}`) //this is optional and editable
}

module.exports.config = {
    name: "removerole",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: []
}
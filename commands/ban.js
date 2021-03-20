const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) 
        message.channel.send(lang_en.commands_ban_permission);
    else {
        let bannedMember = await message.guild.members.ban(args);
        if(bannedMember){

        try {
            console.log(bannedMember.tag + lang_en.commands_ban_successfully);
            message.channel.send (bannedMember + lang_en.commands_ban_successfully)
        }
            catch(err) {
            console.log(err);
        }
    }
}
}

module.exports.config = {
    name: "ban",
    description: "",
    usage: "",
    accessableby: "Admins",
    aliases: []
}

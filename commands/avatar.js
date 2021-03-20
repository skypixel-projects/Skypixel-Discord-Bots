module.exports.run = async (bot, message, args) => {
    if(message.guild.id == '672018546125045760') {
        if(message.author.bot) return;
        message.reply(message.author.displayAvatarURL());
        message.delete();
    }
}

module.exports.config = {
    name: "avatar",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}
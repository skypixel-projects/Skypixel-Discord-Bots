module.exports.run = async (bot, message, args) => {
    message.delete();

    let epicRole = message.guild.roles.cache.get('677939383038640199');
    const member = message.mentions.members.first();

    member.roles.remove(epicRole);
    message.channel.send('Role Removed')
}

module.exports.config = {
    name: "removerole",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}
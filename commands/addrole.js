module.exports.run = async (bot, message, args) => {
    let epicRole = message.guild.roles.cache.get('677939383038640199');
    const member = message.mentions.members.first();

    member.roles.add(epicRole);
    message.channel.send('Role Added')
}

module.exports.config = {
    name: "addrole",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}
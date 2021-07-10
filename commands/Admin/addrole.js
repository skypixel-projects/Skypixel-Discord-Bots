const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    let args2 = args.slice(23).split('/').join(" ");

    // Aici este debug pentru a vedea ce grad a specificat
    // console.log(args2)

    const role = message.member.guild.roles.cache.find(role => role.name.toLowerCase().includes(args2));
    message.member.roles.add(role);
    message.lineReplyNoMention("Okay!");
}

module.exports.config = {
    name: "addrole",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}
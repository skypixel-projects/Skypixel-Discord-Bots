const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    if (!args[0]) {
        return message.lineReply(lang_en.commands_instagram_channel_name)
    }
    let url, response, account, details;
    try {
        url = `https://instagram.com/${args[0]}/?__a=1`;
        response = await axios.get(url)
        account = response.data
        details = account.graphql.user
    } catch (error) {
        return message.lineReply(lang_en.commands_instagram_not_account)
    }

    const embed = new MessageEmbed()
        .setTitle(`${details.is_verified ? `${details.username} <a:verified:727820439497211994>` : ` ${details.username}`} ${details.is_private ? '🔒' : ''} `)
        .setDescription(details.biography)
        .setThumbnail(details.profile_pic_url)
        .addFields(
            {
                name: lang_en.commands_instagram_profile_total_posts,
                value: details.edge_owner_to_timeline_media.count.toLocaleString(),
                inline: true
            },
            {
                name: lang_en.commands_instagram_profile_followers,
                value: details.edge_followed_by.count.toLocaleString(),
                inline: true
            },
            {
                name: lang_en.commands_instagram_profile_following,
                value: details.edge_follow.count.toLocaleString(),
                inline: true
            }
        )
    await message.lineReply(embed)
}

module.exports.config = {
    name: "instagram",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["insta"]
}
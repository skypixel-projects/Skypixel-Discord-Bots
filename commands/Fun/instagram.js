const Discord = require("discord.js");

const { stripIndents } = require("common-tags");

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);


module.exports.run = async (bot, message, args) => {
    if (!args[0]) {
        return message.lineReply(`Please Enter a Channel Name`)
    }
    let url, response, account, details;
    try {
        url = `https://instagram.com/${args[0]}/?__a=1`;
        response = await axios.get(url)
        account = response.data
        details = account.graphql.user
    } catch (error) {
        return message.lineReply(`Not A Account`)
    }

    const embed = new MessageEmbed()
        .setTitle(`${details.is_verified ? `${details.username} <a:verified:727820439497211994>` : ` ${details.username}`} ${details.is_private ? '🔒' : ''} `)
        .setDescription(details.biography)
        .setThumbnail(details.profile_pic_url)
        .addFields(
            {
                name: "Total Posts:",
                value: details.edge_owner_to_timeline_media.count.toLocaleString(),
                inline: true
            },
            {
                name: "Followers:",
                value: details.edge_followed_by.count.toLocaleString(),
                inline: true
            },
            {
                name: "Following:",
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
const Discord = require('discord.js');
const moment = require('moment');
const botsettings = require('../../botsettings.json');
const { MessageEmbed } = require('discord.js');
const languages = require('quick.db');

const filterLevels = {
    DISABLED: 'Off',
    MEMBERS_WITHOUT_ROLES: 'No Role',
    ALL_MEMBERS: 'Everyone'
};

const verificationLevels = {
    NONE: 'None',
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: '(╯°□°）╯︵ ┻━┻',
    VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};

const regions = {
    brazil: 'Brazil',
    europe: 'Europe',
    hongkong: 'Hong Kong',
    india: 'India',
    japan: 'Japan',
    russia: 'Russia',
    singapore: 'Singapore',
    southafrica: 'South Africa',
    sydeny: 'Sydeny',
    'us-central': 'US Central',
    'us-east': 'US East',
    'us-west': 'US West',
    'us-south': 'US South'
};

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
    const members = message.guild.members.cache;
    const channels = message.guild.channels.cache;
    const emojis = message.guild.emojis.cache;

    const embed = new MessageEmbed()
        .setDescription(`**${lang_en.commands_serverinfo}**`)
        .setColor(botsettings.embed_color_message_discord_bot)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField('General', [
            `**${lang_en.commands_serverinfo_name}** ${message.guild.name}`,
            `**${lang_en.commands_serverinfo_id}** ${message.guild.id}`,
            `**${lang_en.commands_serverinfo_owner}** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,
            `**${lang_en.commands_serverinfo_region}** ${regions[message.guild.region]}`,
            `**${lang_en.commands_serverinfo_boost_tier}** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
            `**${lang_en.commands_serverinfo_explicit_filter}** ${filterLevels[message.guild.explicitContentFilter]}`,
            `**${lang_en.commands_serverinfo_verification_level}** ${verificationLevels[message.guild.verificationLevel]}`,
            `**${lang_en.commands_serverinfo_time_created}** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} [${moment(message.guild.createdTimestamp).fromNow()}]`,
            '\u200b'
        ])
        .addField(`${lang_en.commands_serverinfo_statistics}`, [
            `**${lang_en.commands_serverinfo_role_count}** ${roles.length}`,
            `**${lang_en.commands_serverinfo_emoji_count}** ${emojis.size}`,
            `**${lang_en.commands_serverinfo_regular_emoji_count}** ${emojis.filter(emoji => !emoji.animated).size}`,
            `**${lang_en.commands_serverinfo_animated_emoji_count}** ${emojis.filter(emoji => emoji.animated).size}`,
            `**${lang_en.commands_serverinfo_member_count}** ${message.guild.memberCount}`,
            `**${lang_en.commands_serverinfo_humans}** ${members.filter(member => !member.user.bot).size}`,
            `**${lang_en.commands_serverinfo_bots}** ${members.filter(member => member.user.bot).size}`,
            `**${lang_en.commands_serverinfo_text_channels}** ${channels.filter(channel => channel.type === 'text').size}`,
            `**${lang_en.commands_serverinfo_voice_channels}** ${channels.filter(channel => channel.type === 'voice').size}`,
            `**${lang_en.commands_serverinfo_boost_count}** ${message.guild.premiumSubscriptionCount || '0'}`,
            '\u200b'
        ])
        .addField(`${lang_en.commands_serverinfo_presence}`, [
            `**${lang_en.commands_serverinfo_online}** ${members.filter(member => member.presence.status === 'online').size}`,
            `**${lang_en.commands_serverinfo_idle}** ${members.filter(member => member.presence.status === 'idle').size}`,
            `**${lang_en.commands_serverinfo_do_not_disturb}** ${members.filter(member => member.presence.status === 'dnd').size}`,
            `**${lang_en.commands_serverinfo_offline}** ${members.filter(member => member.presence.status === 'offline').size}`,
            '\u200b'
        ])
        .addField(`${lang_en.commands_serverinfo_roles} [${roles.length - 1}]`, roles.join(', '))
    
        .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
    message.lineReply(embed);
}

module.exports.config = {
    name: "serverinfo",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ['server', 'svinfo']
}
const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);

const fetch = require('node-fetch')

module.exports.run = async (bot, message, args) => {
    if(args === 'YouTube') {
        let channel = message.member.voice.channel;
        if(!channel) return message.lineReply('You have to be in a voice channel!')

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
            max_age: 86400,
            max_uses: 0,
            target_application_id: "755600276941176913",
            target_type: 2,
            temporary: false,
            validate: null
            }),
            headers: {
                "Authorization": `Bot ${bot.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if(!invite.code) return message.lineReply('Sadly i cant start a youtube together!')
            message.lineReply(`https://discord.com/invite/${invite.code}`)
        });
    }

    if(args === 'Fishing') {
        let channel = message.member.voice.channel;
        if(!channel) return message.lineReply('You have to be in a voice channel!')

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
            max_age: 86400,
            max_uses: 0,
            target_application_id: "814288819477020702",
            target_type: 2,
            temporary: false,
            validate: null
            }),
            headers: {
                "Authorization": `Bot ${bot.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if(!invite.code) return message.lineReply('Sadly i cant start a youtube together!')
            message.lineReply(`https://discord.com/invite/${invite.code}`)
        });
    }

    if(args === 'Poker') {
        let channel = message.member.voice.channel;
        if(!channel) return message.lineReply('You have to be in a voice channel!')

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
            max_age: 86400,
            max_uses: 0,
            target_application_id: "755827207812677713",
            target_type: 2,
            temporary: false,
            validate: null
            }),
            headers: {
                "Authorization": `Bot ${bot.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if(!invite.code) return message.lineReply('Sadly i cant start a youtube together!')
            message.lineReply(`https://discord.com/invite/${invite.code}`)
        });
    }

    if(args === 'Betrayal') {
        let channel = message.member.voice.channel;
        if(!channel) return message.lineReply('You have to be in a voice channel!')

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
            max_age: 86400,
            max_uses: 0,
            target_application_id: "773336526917861400",
            target_type: 2,
            temporary: false,
            validate: null
            }),
            headers: {
                "Authorization": `Bot ${bot.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if(!invite.code) return message.lineReply('Sadly i cant start a youtube together!')
            message.lineReply(`https://discord.com/invite/${invite.code}`)
        });
    }
}

module.exports.config = {
    name: "together",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ['tg']
}
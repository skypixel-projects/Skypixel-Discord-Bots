const botsettings = require('../botsettings.json');
const lang_en = require(`../languages/${botsettings.default_lang_for_discord_bot}.json`);

const fetch = require('node-fetch')

module.exports.run = async (bot, message, args) => {
    // if(!message.content.startWith(prefix)) return

    let channel = message.member.voice.channel;
    if(!channel) return message.channel.send('You have to be in a voice channel!')

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
        if(!invite.code) return message.channel.send('Sadly i cant start a youtube together!')
        message.channel.send(`https://discord.com/invite/${invite.code}`)
    });
}

module.exports.config = {
    name: "youtube",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ['yt', 'ytb']
}
const Discord = require("discord.js")
const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');
const { bot } = require('../index');

bot.on('guildMemberAdd', member => {
    if(member.bot) return;
    console.log(`+ (${member.displayName}) has join to (${member.guild}) server!`)
    
    const role = member.guild.roles.cache.find(role => role.name.toLowerCase().includes('member') || role.name.toLowerCase().includes('membru') || role.name.toLowerCase().includes('tag'));
    if(!role) return;
    member.roles.add(role);
    
    const join = member.guild.channels.cache.find((channel) => channel.name.toLowerCase().includes('welcome') || channel.name.toLowerCase().includes('bun-venit') || channel.name.toLowerCase().includes('isten-hozott'))
    const joinEmbed = new Discord.MessageEmbed()
        .setColor(botsettings.embed_color_message_discord_bot)
        .setTitle(`:wave: **Welcome ${member.displayName} to the ${member.guild} discord server!**`)
        .setDescription(`I hope do you have a grate time and fun on this server!`)
        .setThumbnail(member.user.avatarURL())
        .setTimestamp()
    
    if(!join) return;
    join.send(joinEmbed);
})
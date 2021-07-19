const Discord = require("discord.js")
const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');
const { bot } = require('../index');

bot.on('guildMemberRemove', member => {
    if(member.bot) return;
    console.log(`- (${member.displayName}) has quit to (${member.guild}) server!`)

    const quit = member.guild.channels.cache.find((channel) => channel.name.toLowerCase().includes('bye') || channel.name.toLowerCase().includes('la-revedere') || channel.name.toLowerCase().includes('viszontlátásra'))
    const quitEmbed = new Discord.MessageEmbed()
        .setColor(botsettings.embed_color_message_discord_bot)
        .setTitle(`:wave: **Goodbye ${member.displayName} from the ${member.guild} discord server!**`)
        .setDescription(`I hope do you have a grate time and fun on this server!`)
        .setThumbnail(member.user.avatarURL())
        .setTimestamp()

    if(!quit) return;
    quit.send(quitEmbed);
})
const Discord = require('discord.js'); 
const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Development')
    .setURL('https://www.youtube.com/maxwastaked')
    .setAuthor('Yonaga678', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
    .setDescription('Hello there this is a development testing! This bot is made by Yonaga678 (Aka MaxWasTaked)')
    .setThumbnail('https://i.imgur.com/wSTFkRM.png')
    .addFields(
        { name: 'Regular field title', value: 'Some value here' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
    )
    .addField('Inline field title', 'Some value here', true)
    .setImage('https://i.imgur.com/wSTFkRM.png')
    .setTimestamp()
    .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

module.exports = {
    name: "development",
    description: "",
    execute(message, args){
        if(message.guild.id == '672018546125045760') {
            if(message.author.bot) return;
            message.channel.send(exampleEmbed);
        }
    }
}
const Discord = require('discord.js'); 

module.exports = {
    name: "changelogs",
    description: "All the new changelogs!",
    execute(message, args){
        if(message.guild.id == '672018546125045760') {
            message.delete();
            //message.channel.send('*Here you can find the latest updates!*');
            //message.channel.send('https://github.com/Yonaga678/DEVDiscord');
            const changelogsEmbed = new Discord.MessageEmbed()
                .setColor('#038cfc')
                //.setTitle('**LIST OF ALL COMMAND FOR PURO BOT**')
                .addField('``All the updates you can find here!``',"https://github.com/Yonaga678/DEVDiscord")
            message.channel.send(changelogsEmbed);
        }
    }
}
const Discord = require('discord.js'); 
const PREFIX = "-";

module.exports = {
    name: "help",
    description: "",
    execute(message, args){
        if(message.guild.id == '672018546125045760') {
            message.delete();
            const helpEmbed = new Discord.MessageEmbed()
                .setColor('#fcba03')
                .setTitle('**LIST OF ALL COMMAND FOR PURO BOT**')
                .addField('``-avatar``',"Command for show the member avatar")
                .addField('``-ban``',"Command for baning the member")
                .addField('``-broadcast``',"Command for broadcasting the message")
                .addField('``-changelogs``',"Command for show the changelogs for the bot")
                .addField('``-help``',"Command for helping the member to understand")
                .addField('``-kick``',"Command for kicking the member from the discord")
                .addField('``-music``',"Command for playing music on the server")
                .addField('``-random``',"Command for sending random cats pictures")
                .addField('``-socialmedia``',"Command for sending the socialmedia for (MaxWasTaked)")
            message.channel.send(helpEmbed);
        }  
        else {
            message.delete();
            message.author.send(`I'm so sorry but you need to be on the official discord development! (https://discord.gg/tJutM8p)`);
        }
    }
}
const Discord = require('discord.js'); 

module.exports = {
    name: "broadcast",
    description: "",
    execute(message, args){
        if(message.guild.id == '672018546125045760') {
            if(message.author.bot) return;
            if(message.content.startsWith('-send')) return;
            message.author.send(args);
            //Debug line!
            message.channel.send(`[DEBUG] (${message}) / (${args})`);
        }
    }
}
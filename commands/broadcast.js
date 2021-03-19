const Discord = require('discord.js'); 

module.exports = {
    name: "send",
    description: "",
    execute(message, args){
        if(message.guild.id == '672018546125045760') {
            if(message.author.bot) return;
            message.author.send(args);
            
            //Debug line!
            message.channel.send(`[DEBUG] (${message}) / (${args})`);
        }
    }
}
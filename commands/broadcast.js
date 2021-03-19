const Discord = require('discord.js'); 
const bot = new Discord.Client();

module.exports = {
    name: "broadcast",
    description: "",
    execute(message, args){
        if(message.guild.id == '672018546125045760') {
            if(message.author.bot) return;
            message.author.send(args);
            bot.users.get("236811109066211329").send("Hello testing the new method!");
        }
    }
}
const PREFIX = "-";
const Discord = require('discord.js'); 
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const fs = require('fs');

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    
    bot.commands.set(command.name, command);
}

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    if(message.author.bot) return;
    switch (args[0]) {
        case "avatar":
            bot.commands.get('avatar').execute(message, args);
        break;
        case "ban":
            bot.commands.get('ban').execute(message, args);
        break;
        case "send":
            bot.commands.get('broadcast').execute(message, args);
        break;
        case "changelogs":
            bot.commands.get('changelogs').execute(message, args);
        break;
        case "help":
            bot.commands.get('help').execute(message, args);
        break;
        case "kick":
            bot.commands.get('kick').execute(message, args);
        break;
        case "random":
            bot.commands.get('random').execute(message, args);
        break;
        case "socialmedia":
            bot.commands.get('socialmedia').execute(message, args);
        break;
        case "play":
            bot.commands.get('music').execute(message, args);
        break;
        
        //Development command!
        case "dev":
            bot.commands.get('development').execute(message, args);
        break;
    }
});
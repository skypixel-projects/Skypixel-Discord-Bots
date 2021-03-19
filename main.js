const Discord = require('discord.js'); 
const bot = new Discord.Client();
const fs = require('fs');
const PREFIX = "-";

bot.commands = new Discord.Collection();
bot.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(bot, Discord);
})

bot.login(process.env.token);
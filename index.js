const Discord = require('discord.js'); 
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const fs = require('fs');
const PREFIX = "-";

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

client.login(process.env.token);
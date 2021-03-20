const Discord = require('discord.js'); 
const client = new Discord.Client();
const fs = require('fs');


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('ready', () => {
    console.log('setPresence working!');
    client.user.setPresence({
        activity: {
            name: 'maintenance',
            type: 'WATCHING'
        },
        status: 'idle'
    })
});

client.login(process.env.token);
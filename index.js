const Discord = require('discord.js'); 
const client = new Discord.Client();
const fs = require('fs');


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

bot.on('readdy', () => {
    console.log('setPresence working!');
    client.user.setPresence({
        activity: {
            name: 'maintenance',
            type: 'WATCHING'
        },
        status: 'idle'
    })
});

client.login('ODE5Njc4MjM4NjIzNzkzMjEz.YEqG2A.21-58MfTq6SL6iHRahy532RTOeg');
// client.login(process.env.token);
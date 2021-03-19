const fs = require('fs');

module.exports = (client, Discord) =>{
    const load_dir = (dirs) =>{
        const event_files = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));

        for(const file of event_files){
            const event = require(`../events/${dirs}/${file}`);
            const event_name = file.split('.')[0];
            client.on(event_name, event.bind(null, Discord, client));
        }
    }

    ['client', 'guild'].forEach(e => load_dir(e));
}









































// const Discord = require('discord.js'); 
// const client = new Discord.Client();
// const fs = require('fs');

// //Discord client ready ans set presence!
// client.on('ready', () => {
//     client.user.setPresence({
//         activity: {
//           name: 'MaxWasTaked',
//           type: 'WATCHING'
//         },
//         status: 'idle'
//     })
// });

// //Message swear checker!
// client.on("message", async message => {
// console.log(`(${message.author.username}) said: (${message.content}) on channel (${message.channel.name}) at server (${message.guild})`);
//     if(message.content.includes('pula')) {
//         message.delete();
//         message.author.send('If you swear on you will automatically take you will be kicked out!');
//     }
//     if(message.content.includes('pussy')) {
//         message.delete();
//         message.author.send('If you swear on you will automatically take you will be kicked out!');
//     }
//     if(message.content.includes('gay')) {
//         message.delete();
//         message.author.send('If you swear on you will automatically take you will be kicked out!');
//     }
// });

// //Cute things on dm about the client!
// client.on('message', message => {
//     if(message.content.includes('you are so cute')) {
//         if(message.author.client) return;
//         message.channel.send('OwO Thanks you to!');
//     }
//     if(message.content.includes(`you're ugly`)) {
//         if(message.author.client) return;
//         message.channel.send(`Please no :( why? I'm just a latex wolf who wants to make friends!`);
//     }
//     if(message.content.includes(`I'm so sorry`)) {
//         if(message.author.client) return;
//         message.channel.send(`It's fine! I forgive you!`);
//     }
// });

// //The client will send a message to the official discord development server!
// client.on("ready", () => {
//     const readyChannel = client.channels.cache.get("820599071987204096");
//     if (!readyChannel) return console.log("Invalid channel. Please check the channel ID in the line 68!");
//     readyChannel.send("```A new update was found!```")
// });

// //New members join to the discord server
// client.on('guildMemberAdd', member => {
//     channel.send(`Welcome to the server, ${member}`);
// });

// //AutoGG for funny things
// client.on("message", message => {
//     if(message.content.includes('gg')) {
//         message.react('😄');
//     }
// });
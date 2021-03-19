// const PREFIX = "-";
const fs = require('fs');





module.exports = (client, Discord) => {
    const command_files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

    for(const file of command_files){
        const command = require(`../commands/${file}`);
        if(command.name){
            client.command.set(command.name, command);
        } else {
            continue;
        }
    }
}







// const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
// for(const file of commandFiles){
//     const command = require(`../commands/${file}`);
    
//     client.commands.set(command.name, command);
// }

// client.on('message', message => {
//     let args = message.content.substring(PREFIX.length).split(" ");
//     if(message.author.client) return;
//     switch (args[0]) {
//         case "avatar":
//             client.commands.get('avatar').execute(message, args);
//         break;
//         case "ban":
//             client.commands.get('ban').execute(message, args);
//         break;
//         case "send":
//             client.commands.get('broadcast').execute(message, args);
//         break;
//         case "changelogs":
//             client.commands.get('changelogs').execute(message, args);
//         break;
//         case "help":
//             client.commands.get('help').execute(message, args);
//         break;
//         case "kick":
//             client.commands.get('kick').execute(message, args);
//         break;
//         case "random":
//             client.commands.get('random').execute(message, args);
//         break;
//         case "socialmedia":
//             client.commands.get('socialmedia').execute(message, args);
//         break;
//         case "play":
//             client.commands.get('music').execute(message, args);
//         break;
        
//         //Development command!
//         case "dev":
//             client.commands.get('development').execute(message, args);
//         break;
//     }
// });
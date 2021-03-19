const Discord = require('discord.js'); 
const bot = new Discord.Client();
const PREFIX = "-";


//Command handler line
const fs = require('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    
    bot.commands.set(command.name, command);
}

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) {
        case "avatar":
            bot.commands.get('avatar').execute(message, args);
        break;
        case "ban":
            bot.commands.get('ban').execute(message, args);
        break;
        case "broadcast":
            bot.commands.get('broadcast').execute(message);
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

//Discord bot ready ans set presence!
bot.on('ready', () => {
    bot.user.setPresence({
        activity: {
          name: 'MaxWasTaked',
          type: 'WATCHING'
        },
        status: 'idle'
    })
});

//Message swear checker!
bot.on("message", async message => {
console.log(`(${message.author.username}) said: (${message.content}) on channel (${message.channel.name}) at server (${message.guild})`);
    if(message.content.includes('pula')) {
        message.delete();
        message.author.send('If you swear on you will automatically take you will be kicked out!');
    }
    if(message.content.includes('pussy')) {
        message.delete();
        message.author.send('If you swear on you will automatically take you will be kicked out!');
    }
    if(message.content.includes('gay')) {
        message.delete();
        message.author.send('If you swear on you will automatically take you will be kicked out!');
    }
});

//Cute things on dm about the bot!
bot.on('message', message => {
    if(message.content.includes('you are so cute')) {
        if(message.author.bot) return;
        message.channel.send('OwO Thanks you to!');
    }
    if(message.content.includes(`you're ugly`)) {
        if(message.author.bot) return;
        message.channel.send(`Please no :( why? I'm just a latex wolf who wants to make friends!`);
    }
    if(message.content.includes(`I'm so sorry`)) {
        if(message.author.bot) return;
        message.channel.send(`It's fine! I forgive you!`);
    }
});

//The bot will send a message to the official discord development server!
bot.on("ready", () => {
    const readyChannel = bot.channels.cache.get("820599071987204096");
    if (!readyChannel) return console.log("Invalid channel. Please check the channel ID in the line 68!");
    readyChannel.send("```A new update was found!```")
});

//New members join to the discord server
bot.on('guildMemberAdd', member => {
    channel.send(`Welcome to the server, ${member}`);
});

//AutoGG for funny things
bot.on("message", message => {
    if(message.content.includes('gg')) {
        message.react('😄');
    }
});

bot.login(process.env.token);
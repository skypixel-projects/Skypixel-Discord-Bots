const Discord = require('discord.js'); 
const bot = new Discord.Client();

const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Development')
    .setURL('https://www.youtube.com/maxwastaked')
    .setAuthor('Yonaga678', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
    .setDescription('Hello there this is a development testing! This bot is made by Yonaga678 (Aka MaxWasTaked)')
    .setThumbnail('https://i.imgur.com/wSTFkRM.png')
    .addFields(
        { name: 'Regular field title', value: 'Some value here' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
    )
    .addField('Inline field title', 'Some value here', true)
    .setImage('https://i.imgur.com/wSTFkRM.png')
    .setTimestamp()
    .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

bot.on('ready', () => {
    console.log('The discord bot is online! ' + bot.user)
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

//AutoGG
bot.on("message", message => {
    if(message.content.includes('gg')) {
        message.react('😄');
    }
});

//The bot commands lisener!
bot.on('message', (message) => {
    if(message.author.bot) return;
    let prefix = '-';
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)

    if(!message.content.startsWith(prefix)) return;

    if(cmd == 'revive') {
        if(message.author.bot) return;
        message.reply(`Puff. Revived!`);
        message.delete();
    }




    //Help command for the development server!
    if(cmd == 'help') {
        if(message.guild.id == '672018546125045760') {
            message.delete();
            message.channel.send(`List of all commands: "Help", "Avatar", "Broadcast", "Hello", "youtube", "dev" or "revive"`);
        }
        else {
            message.delete();
            message.author.send(`I'm so sorry but you need to be on the official discord development! (https://discord.gg/tJutM8p)`);
        }
    }



    //Main development server!
    if(message.guild.id == '672018546125045760') {
        if(cmd == 'hello') {
            if(message.author.bot) return;
            message.channel.send('Hi there ' + message.author.username + ` my name is ${bot.user} the bot! The official creator and developer is Yonaga678!`);
            console.log('The command' + cmd + ' has been executed!')   
        }

        if(cmd == 'youtube') {
            if(message.author.bot) return;
            message.channel.send('Hi there ' + message.author.username + ' the official youtube of MaxWasTaked is (https://www.youtube.com/maxwastaked)');
            console.log('The command' + cmd + ' has been executed!')
        }

        if(cmd == 'dev') {
            if(message.author.bot) return;
            message.channel.send(exampleEmbed);
        }

        if(cmd == 'avatar') {
            if(message.author.bot) return;
            message.reply(message.author.displayAvatarURL());
            message.delete();
        }

        if(cmd == 'broadcast', args) {
            if(message.author.bot) return;
            //message.channel.send('```' + args + '```');
            message.author.send(args);
        }

        if(cmd == 'leave') {
            message.member.voice.channel.leave();
        }

        if(cmd == 'play') {
            message.member.voice.channel.join();
        }

        if(cmd == 'meme') {
            let fetchMemes = await fetch(link).then(m => m.json())
            const getMemes = fetchMemes.data.children;
            let randomMeme = getMemes[Math.floor(Math.random() * getMemes.length)]
            let memeEmbed = new Discord.MessageEmbed()
            .setTitle(randomMeme.data.title)
            .setImage(randomMeme.data.url)
            .setColor("#ff0000");

            message.channel.send(memeEmbed)
        }
    }
});

bot.login(process.env.token);
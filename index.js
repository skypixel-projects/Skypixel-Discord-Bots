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

//Set the bot activity and Presence!
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
    //readyChannel.send(`Hello I'm online! With the id: ` + bot.user + ` Please do not share this id!`);
});

bot.on('shardError', error => {
    const errorChannel = bot.channels.cache.get("820599071987204096");
    if (!errorChannel) return console.log("Invalid channel. Please check the channel ID in the line 75!");
    errorChannel.send(`The discord bot has been sended an error! Please check the console!`);
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



//Kick command for all servers!
bot.on('message', (message) => {
    if(!message.guild) return;
    if(message.content.startsWith('-kick')) {
        const user = message.mentions.users.first();
        if(user) {
            const member = message.guild.member(user);
            if(member) {
                member
                    .kick(`This ${user.tag} has been kicked by ${message.author}`)
                    .then(() => {
                    message.reply(`Successfully kicked ${user.tag}!`);
                });
            } else {
                message.reply("That user isn't in this guild!");
            }
        } else {
            message.reply("You didn't mention the user to kick!");
        }
    }
});

//Ban command for all servers!
bot.on('message', (message) => {
    if(!message.guild) return;
    if(message.content.startsWith('-ban')) {
        const user = message.mentions.users.first();
        if(user) {
            const member = message.guild.member(user);
            if(member) {
                member
                    .ban(`This ${user.tag} has been banned by ${message.author}`)
                    .then(() => {
                    message.reply(`Successfully kicked ${user.tag}!`);
                });
            } else {
                message.reply("That user isn't in this guild!");
            }
        } else {
            message.reply("You didn't mention the user to kick!");
        }
    }
});




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
        //Hello command!
        if(cmd == 'hello') {
            if(message.author.bot) return;
            message.channel.send('Hi there ' + message.author.username + ` my name is ${bot.user} the bot! The official creator and developer is Yonaga678!`);
            console.log('The command' + cmd + ' has been executed!')   
        }

        //Youtube command!
        if(cmd == 'youtube') {
            if(message.author.bot) return;
            message.channel.send('Hi there ' + message.author.username + ' the official youtube of MaxWasTaked is (https://www.youtube.com/maxwastaked)');
            console.log('The command' + cmd + ' has been executed!')
        }

        //In development command!
        if(cmd == 'dev') {
            if(message.author.bot) return;
            message.channel.send(exampleEmbed);
        }

        //Avatar command!
        if(cmd == 'avatar') {
            if(message.author.bot) return;
            message.reply(message.author.displayAvatarURL());
            message.delete();
        }

        //Broadcast command!
        if(cmd == 'broadcast', args) {
            if(message.author.bot) return;
            //message.channel.send('```' + args + '```');
            message.author.send(args);
        }

        //Voice channel leave command!
        if(cmd == 'leave') {
            message.member.voice.channel.leave();
        }

        //Voice channel join command!
        if(cmd == 'play') {
            message.member.voice.channel.join();
        }

        //Random cats photo!
        if(cmd == 'random') {
            var images = ["Image1", "Image2", "Image3", "Image4" ];
            var image = Math.floor(Math.random() * images.length);

            let random = new Discord.MessageEmbed()
            .setTitle('Here is your random pic')
            .setAuthor('mortis')
            .setImage(+images[image])

            message.channel.send(random);
        }

        //For the changelogs in the code line!
        if(cmd == 'changelogs') {
            message.channel.send('*Here you can find the latest updates!*');
            message.channel.send('https://github.com/Yonaga678/DEVDiscord/blob/main/index.js');
        }
    }
});

bot.login(process.env.token);
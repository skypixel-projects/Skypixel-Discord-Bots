const Discord = require('discord.js');
const readline = require('readline');

const botsettings = require('./botsettings.json');
const lang_en = require(`./languages/${botsettings.default_lang_for_discord_bot}.json`);

const bot = new Discord.Client({ presence: { status: "idle" }}); // { presence: { status: "dnd" }, messageCacheMaxSize: 0 }

// In replica aceasta functioneaza toate eventele!
require("./util/eventHandler")(bot)

// --
const fs = require("fs");
const { error, time } = require('console');
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

// In replica aceasta functioneaza toate messajele pe care botul le vede si le poate folosi ca o commanda!
fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    console.log(jsfile)
    if(jsfile.length <= 0) {
        return console.log("[DEBUG] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

// In replica aceasta botul poate diferentia mesajele "DM" sau "GUILD"!
bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.substring(message.content.indexOf(' ')+1);

    // message.channel.startTyping();

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)
})

// Aici este linia de code unde poti face debug la dm messages!
bot.on('message', async message => {
    if(message.bot) return;
    if (message.channel.type === 'dm'){ 
        console.log("[" + message.author.username + "]: " + message.content)
    }
});

// Aici este dakota AV pentru serverele de discord unde se pot trimite mesaje cu MD5!
bot.on("message", async (message, guild) => {
    if(message.author.bot || message.author.bot) return;

    if(message.channel.type === 'dm'){
        fetch.default(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}`)
        .then(res => res.json())
        .then(data => {
            message.channel.send(data.response)
        });
    }
});

const { badwords } = require('./swearing/blacklist.json');

bot.on('message', (msg) => {
    if(msg.bot) return;
    let confirm = false;
   
    var i;
    for (i = 0;i < badwords.length; i++) {
        if (msg.content.toLowerCase().includes(badwords[i].toLowerCase()))
            confirm = true;
            if (confirm) {
                // msg.delete()
                return msg.lineReplyNoMention("You are not allowed to swear!");
            }   
    } 
});

// Aici este eventul pentru a vedea toate logurile!
// Aceasta metoda este ilegal!
// Prin aceasta metoda dakota poate analiza ori ce messaj suspect!
bot.on("message", function(message){
    var logger = fs.createWriteStream('message.txt', {
        flags: 'a' // 'a' means appending (old data will be preserved)
    });

    logger.write(` [${message.guild}] - ` + message.author.username + ` => ${message}` + '\n')
});

// Aici este eventul de join and quit guild members!
// Acest event este pentru welcome message and debug
// Acest event trimite logs in console pentru a putea vedea membri care au intrat pe ce server!
bot.on("guildMemberAdd", member => {
    if(member.bot) return;

    console.log(`+ (${member.displayName}) has join to (${member.guild}) server!`)

    const welcome = member.guild.channels.cache.find((channel) => channel.name.toLowerCase() === `discord-bot-debug`)
    const welcomeEmbed = new Discord.MessageEmbed()
        .setColor(botsettings.embed_color_message_discord_bot)
        .setTitle(`:wave: **Welcome ${member.displayName} to the ${member.guild} discord server!**`)
        .setDescription(`I hope do you have a grate time and fun on this server!`)
        .setThumbnail(member.user.avatarURL())
        .setTimestamp()
    welcome.send(welcomeEmbed);
});

bot.on("guildMemberRemove", member => {
    if(member.bot) return;

    console.log(`- (${member.displayName}) has quit to (${member.guild}) server!`)

    const welcome = member.guild.channels.cache.find((channel) => channel.name.toLowerCase() === `discord-bot-debug`)
    const welcomeEmbed = new Discord.MessageEmbed()
        .setColor(botsettings.embed_color_message_discord_bot)
        .setTitle(`:wave: **Goodbye ${member.displayName} to the ${member.guild} discord server!**`)
        .setDescription(`I hope do you have a grate time and fun on this server!`)
        .setThumbnail(member.user.avatarURL())
        .setTimestamp()
    welcome.send(welcomeEmbed);
})

// Aici este noul discord buttons event handler!
require('discord-buttons')(bot)
const { MessageButton, MessageActionRow } = require('discord-buttons');
const { default: fetch } = require('node-fetch');
const { AsyncResource } = require('async_hooks');

bot.on('clickButton', async (button) => {
    if(button.id == 'button1') {
        button.clicker.user.send(`Okay! ${button.clicker.user} just hit the yes button`)
        // button.clicker.user.roles.add(button.clicker.guild.roles.cache.get('677939383038640199'));
    }
    if(button.id == 'button2') {
        button.clicker.user.send(`Okay! ${button.clicker.user} just hit the no button`)
        // button.clicker.user.roles.remove(button.clicker.guild.roles.cache.get('677939383038640199'));
    }
});

// In replica aceasta botul se poate loga la discord api pentru a folosi botul!
// Aici botul poate porni sau sa opri in functie de ce commanda a fost executata sau daca a primit o erroare fatala!
bot.login(botsettings.token);

// Aici iese botul din voice daca sta prea mult AFK
// bot.on("ready", () => {
//   setInterval(function(){ 
//     // bot.voice.channel.disconnect()
//     }, 1000);
// });
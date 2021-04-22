const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const lang_en = require('./languages/lang_en.json');

const bot = new Discord.Client({ disableMentions: 'everyone' });

// In replica aceasta functioneaza toate eventele!
require("./util/eventHandler")(bot)

// --
const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

// In replica aceasta functioneaza toate messajele pe care botul le vede si le poate folosi ca o commanda!
fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
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

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)

})


//Aici este special event pentru bot!
// bot.on("ready", () => {
//   setInterval(function(){ 
//     bot.channels.cache.get("820599071987204096").send("1");
//   }, 1000);
// });

// Developer test command with code!
// Atentie aceasta commanda nu are voie sa fie mult timp aici pentru ca poate provoca errori false!
// In timpul in care se va fixa bugul cu event handler trebuie mutat cat mai curand!
bot.on('message', function(msg){
    if(msg.author.bot || msg.channel.type === "dm") return;

    if(msg.content === '-devcode /}qs9SH#tC-knTr~'){
        msg.reply(lang_en.developer_code_error_message)
            .then(msg => {
                msg.delete({ timeout: 10000 /*time unitl delete in milliseconds*/});
            })
            .catch('error...');
    }
});




// Aici este dakota AV!
bot.on('message', msg => {
    if (msg.content === 'hi puro' || msg.content === 'hello puro') {
        msg.lineReplyNoMention(`Hello! My name is ${bot.user.username}`);
    }
});



// In replica aceasta botul se poate loga la discord api pentru a folosi botul!
// bot.login(process.env.token);
bot.login(botsettings.token);
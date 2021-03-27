const Discord = require('discord.js');
const fs = require("fs");

const bot = new Discord.Client({disableEveryone: true});

module.exports = bot => {
    fs.readdir("../commands/", (err, files) => {

        if(err) console.log(err)
    
        let jsfile = files.filter(f => f.split(".").pop() === "js") 
        if(jsfile.length <= 0) {
            return console.log("[LOGS] Couldn't Find Commands!");
        }
    
        jsfile.forEach((f, i) => {
            let pull = require(`../commands/${f}`);
            bot.commands.set(pull.config.name, pull);  
            pull.config.aliases.forEach(alias => {
                bot.aliases.set(alias, pull.config.name)
            });
        });
    });
}
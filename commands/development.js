const Discord = require('discord.js'); 
const fs = require('fs');
const readline = require('readline');

module.exports = {
    name: "development",
    description: "",
    execute(message, args){
        message.channel.send(message, args);
        if(args == 'lang_en'){
            const path = "./language/lang_en.yml";
            const content = fs.readFileSync(path, 'utf-8');
            message.channel.send(content);
        }
        if(args == 'lang_ro'){
            const path = "./language/lang_ro.yml";
            const content = fs.readFileSync(path, 'utf-8');
            message.channel.send(content);
        }
    }
}
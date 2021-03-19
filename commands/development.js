const Discord = require('discord.js'); 
const fs = require('fs');
const readline = require('readline');

module.exports = {
    name: "development",
    description: "",
    execute(message, args){
        if(message.guild.id == '672018546125045760') {
            if(message.content.includes('lang_en')){
                const path = "./language/lang_en.yml";
                const content = fs.readFileSync(path, 'utf-8');
                message.channel.send(content);
            }
            if(message.content.includes('lang_ro')){
                const path = "./language/lang_ro.yml";
                const content = fs.readFileSync(path, 'utf-8');
                message.channel.send(content);
            }
        }
    }
}
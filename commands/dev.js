const Discord = require('discord.js'); 
const fs = require('fs');
const readline = require('readline');

module.exports = {
    name: "dev",
    description: "",
    execute(message, args){
        const path = "./language/lang_en.yml";
        const content = fs.readFileSync(path, 'utf-8');
        if(content.length == 2) {
            message.channel.send(content);   
        }
    }
}
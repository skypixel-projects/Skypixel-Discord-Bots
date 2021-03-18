const Discord = require('discord.js'); 
const fs = require('fs');
const readline = require('readline');

module.exports = {
    name: "dev",
    description: "",
    execute(message, args){
        const path = "./language/lang_en.yml";
        const content = fs.readFileSync(path, 2, 'utf-8');
        message.channel.send(content);
    }
}
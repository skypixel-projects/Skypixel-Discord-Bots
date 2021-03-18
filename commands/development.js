const Discord = require('discord.js'); 
const fs = require('fs');
const readline = require('readline');

module.exports = {
    name: "development",
    description: "",
    execute(message, args){
        const path = "./language/lang_en.yml";
        const content = fs.readFileSync(path, 'utf-8');

        message.channel.send(content);   
    }
}
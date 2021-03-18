const Discord = require('discord.js'); 
const fs = require('fs');
const readline = require('readline');

module.exports = {
    name: "dev",
    description: "",
    execute(message, args){
        const path = "./language/lang_en.yml";
        const content = fs.readFileSync(path, 'utf-8');
        let debug = content.content.substring(length(1)).split(" ");

        message.channel.send(debug);   
    }
}
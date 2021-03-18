const Discord = require('discord.js'); 
const fs = require('fs');

module.exports = {
    name: "dev",
    description: "",
    execute(message, args){
        const path = "./language/lang_en.yml";
        const content = fs.readFileSync(path, 'utf-8', line(2));
        if(fs.readFile)
        message.channel.send(content);
    }
}
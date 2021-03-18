const Discord = require('discord.js'); 
const fs = require('fs');
const readline = require('readline');
var getline = require('nthline');

module.exports = {
    name: "dev",
    description: "",
    execute(message, args){
        const path = "./language/lang_en.yml";
        const content = getline(2, path);
        message.channel.send(content);
    }
}
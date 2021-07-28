const { bot } = require('../../index');
const fs = require("fs");

bot.on("message", function(message){
    var logger = fs.createWriteStream('message.txt', {
        flags: 'a'
    });

    logger.write(` [${message.guild}] - ` + message.author.username + ` => ${message}` + '\n')
});

bot.on('message', async message => {
    if(message.author.bot || message.author.bot) return;
    
    if (message.channel.type === 'dm'){ 
        console.log("[" + message.author.username + "]: " + message.content)
    }
});
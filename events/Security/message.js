const { bot } = require('../../index');
const { badwords } = require('../../blacklist.json');

bot.on('message', (msg) => {
    if(msg.author.bot || msg.author.bot) return;
    if(msg.channel.type === 'dm') return;
    let confirm = false;
   
    var i;
    for (i = 0;i < badwords.length; i++) {
        if (msg.content.toLowerCase().includes(badwords[i].toLowerCase()))
            confirm = true;
            if (confirm) {
                return msg.lineReplyNoMention("You are not allowed to swear!");
            }   
    } 
});
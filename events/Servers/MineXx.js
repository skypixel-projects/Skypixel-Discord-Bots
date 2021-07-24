const { bot } = require('../../index');

// Check for the "WTF" message and replay with some message.
// if(message.author.bot || message.channel.type === "dm") return <-- it need because the bot crash!
bot.on('message', message => {
    if(message.author.bot || message.channel.type === "dm") return;

    if (message.author.bot) return;

    var server = message.guild.id;

    if (server === "786144853754904587") {
        if (message.content.toLowerCase().includes('wtf')) {
            message.lineReply("WTF = Welcome To Facebook");
        }
    }
})
module.exports.run = async (bot, message, args) => {
    // message.channel.send('Not working for now!' + message.content)
    if(message.content === '-play'){
        message.channel.send('Play command has been executed!')

        // connection.play(ytdl('https://youtu.be/E01Hfk0jOEU', { filter: 'audioonly' }));
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const ytdl = require('ytdl-core');
            connection.play(ytdl('https://youtu.be/E01Hfk0jOEU', { filter: 'audioonly' }));
        } else {
            message.reply('You need to join a voice channel first!');
        }

        dispatcher.resume();
    }

    if(message.content === '-skip'){
        message.channel.send('Skip command has been executed!')
    }

    if(message.content === '-stop'){
        message.channel.send('Stop command has been executed!')
        dispatcher.destroy();
    }

    if(message.content === '-pause'){
        message.channel.send('Pause command has been executed!')
        dispatcher.pause();
    }
}

module.exports.config = {
    name: "",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["play", "skip", "stop", "pause"]
}
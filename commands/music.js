const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {
    message.delete();

    if(message.content.includes("-play")){
        message.channel.send('Play command has been executed! ' + 'The request music is ' + args)

        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            connection.play(ytdl(`${args}`, { filter: 'audioonly' }, { volume: 100 }, { type: 'opus' }));
        } else {
            message.reply('You need to join a voice channel first!');
        }
    }

    if(message.content === '-skip'){
        message.channel.send('Skip command has been executed!')
    }

    if(message.content === '-leave'){
        message.channel.send('Leave command has been executed!')

        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            connection.disconnect();
        } else {
            message.reply('You need to join a voice channel first!');
        }
    }

    if(message.content === '-pause'){
        message.channel.send('Pause command has been executed!')
    }

    if(message.content === '-volume'){
        message.channel.send('Pause command has been executed!')
    }
}

module.exports.config = {
    name: "",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["play", "skip", "leave", "pause", "volume"]
}
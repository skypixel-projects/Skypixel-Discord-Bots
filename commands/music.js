const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {
    message.delete();

    if(message.content.includes("-play")){
        if(!message.content.includes('https://www.')) {
            return message.channel.send(`You need to specify the URL of the music!`)
        } else {
            message.channel.send(`Playing now: ` + args)
        }

        if(message.content.includes('soundcloud')) {
            console.log('Soundcloud has been detected!')
            return message.channel.send(`I'm sorry the soundcloud music is not working yet!`)
        }

        if(message.content.includes('spotify')) {
            console.log('Spotify has been detected!')
            return message.channel.send(`I'm sorry the spotify music is not working yet!`)
        }

        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            connection.play(ytdl(`${args}`, { filter: 'audioonly' }, { volume: 100.0 }, { type: 'opus' }));
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
        message.channel.send('Volume command has been executed!')
    }
}

module.exports.config = {
    name: "",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["play", "skip", "leave", "pause", "volume"]
}
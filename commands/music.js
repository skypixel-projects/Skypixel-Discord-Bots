module.exports.run = async (bot, message, args) => {
    // message.channel.send('Not working for now!' + message.content)
    if(message.content === '-play'){
        message.channel.send('Play command has been executed!')
        message.member.voice.channel.join();
    }
    if(message.content === '-skip'){
        message.channel.send('Skip command has been executed!')
    }
    if(message.content === '-stop'){
        message.channel.send('Stop command has been executed!')
        dispatcher.destroy();
        // connection.disconnect();
        voice.channel.leave()
    }
}

module.exports.config = {
    name: "",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["play", "skip", "stop"]
}
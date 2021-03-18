module.exports = {
    name: "play",
    description: "Play a music!",
    execute(message, args){
        if(message.guild.id == '672018546125045760') {
            message.member.voice.channel.join();
            //message.member.voice.channel.leave();
        }
    }
}
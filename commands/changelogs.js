module.exports = {
    name: "changelogs",
    description: "All the new changelogs!",
    execute(message, args){
        if(message.guild.id == '672018546125045760') {
            message.channel.send('*Here you can find the latest updates!*');
            message.channel.send('https://github.com/Yonaga678/DEVDiscord/blob/main/index.js');
        }
    }
}
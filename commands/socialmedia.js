module.exports = {
    name: "socialmedia",
    description: "",
    execute(message, args){
        if(message.guild.id == '672018546125045760') {
            if(message.author.bot) return;
            message.channel.send('Hi there ' + message.author.username + ' the official youtube of MaxWasTaked is (https://www.youtube.com/maxwastaked)');
            console.log('The command' + cmd + ' has been executed!')
        }
    }
}
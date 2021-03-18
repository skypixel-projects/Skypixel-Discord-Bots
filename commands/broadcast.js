module.exports = {
    name: "broadcast",
    description: "Broadcast message to all members!",
    execute(message, args){
        if(message.guild.id == '672018546125045760') {
            if(message.author.bot) return;
            //message.channel.send('```' + args + '```');
            message.author.send(args);
        }
    }
}
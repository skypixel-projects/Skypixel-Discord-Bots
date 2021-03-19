module.exports = {
    name: "broadcast",
    description: "",
    execute(message, args){
        if(message.guild.id == '672018546125045760') {
            if(message.author.bot) return;
            message.author.send(args);
        }
    }
}
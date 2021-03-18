module.exports = {
    name: "broadcast",
    description: "",
    execute(message, args){
        if(message.guild.id == '672018546125045760') {
            message.author.send(args);
        }
    }
}
module.exports = {
    name: "dev",
    description: "In development",
    execute(message, args){
        message.channel.send('Yes the command handler is running!');
    }
}
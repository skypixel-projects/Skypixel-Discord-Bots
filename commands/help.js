module.exports = {
    name: "help",
    description: "This command is for helping the members",
    execute(message, args){
        if(message.guild.id == '672018546125045760') {
            message.delete();
            message.channel.send(`List of all commands: "Help", "Avatar", "Broadcast", "Hello", "youtube", "dev" or "revive"`);
        }
        else {
            message.delete();
            message.author.send(`I'm so sorry but you need to be on the official discord development! (https://discord.gg/tJutM8p)`);
        }
    }
}
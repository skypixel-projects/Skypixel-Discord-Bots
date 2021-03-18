module.exports = {
    name: "help",
    description: "",
    execute(message, args){
        if(message.guild.id == '672018546125045760') {
            message.delete();
            //message.channel.send(`List of all commands: "Help", "Avatar", "Broadcast", "Hello", "youtube", "dev" or "revive"`);
            const helpEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('List for all commands')
                .addField('``!avatar``-',"Command for show the member avatar")
                .addField('``!ban``-',"Command for baning the member")
                .addField('``!broadcast``-',"Command for broadcasting the message")
                .addField('``!changelogs``-',"Command for show the changelogs for the bot")
                .addField('``!development``-',"Command for developers members")
                .addField('``!help``-',"Command for helping the member to understand")
                .addField('``!kick``-',"Command for kicking the member from the discord")
                .addField('``!music``-',"Command for playing music on the server")
                .addField('``!random``-',"Command for sending random cats pictures")
                .addField('``!socialmedia``-',"Command for sending the socialmedia for (MaxWasTaked)")
        }
        else {
            message.delete();
            message.author.send(`I'm so sorry but you need to be on the official discord development! (https://discord.gg/tJutM8p)`);
        }
    }
}
module.exports = {
    name: "kick",
    description: "This command is for kick the members from the discord server!",
    execute(message, args){
        if(message.guild.id == '672018546125045760') {
            if(!message.guild) return;
            if(message.content.startsWith('-kick')) {
                const user = message.mentions.users.first();
                if(user) {
                    const member = message.guild.member(user);
                    if(member) {
                        member
                            .kick(`This ${user.tag} has been kicked by ${message.author}`)
                            .then(() => {
                            message.reply(`Successfully kicked ${user.tag}!`);
                        });
                    } else {
                        message.reply("That user isn't in this guild!");
                    }
                } else {
                    message.reply("You didn't mention the user to kick!");
                }
            }
        }
    }
}
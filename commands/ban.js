module.exports = {
    name: "ban",
    description: "This command is for ban the members from the discord server!",
    execute(message, args){
        if(message.guild.id == '672018546125045760') {
            if(!message.guild) return;
            if(message.content.startsWith('-ban')) {
                const user = message.mentions.users.first();
                if(user) {
                    const member = message.guild.member(user);
                    if(member) {
                        member
                            .ban(`This ${user.tag} has been banned by ${message.author}`)
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
module.exports.run = async (bot, message, args) => {
    if(message.content.includes('add')) {
        message.channel.send('The add command has been executed! ')
    }

    if(message.content.includes('remove')) {
        message.channel.send('The remove command has been executed!')
    }
}

module.exports.config = {
    name: "",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ["nick", "nickname"]
}
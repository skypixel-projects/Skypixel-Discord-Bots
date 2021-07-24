const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    const msg = args;
    if (!msg) {
        return message.channel.send("What you want the cat to say?");
    }
    message.lineReply({
        files: [
        {
            attachment: `https://cataas.com/cat/cute/says/${msg}`,
            name: "catsay.png",
        },
        ],
    });
    
}

module.exports.config = {
    name: "catsay",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}
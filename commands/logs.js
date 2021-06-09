const botsettings = require('../botsettings.json');
// const lang_en = require(`../languages/${botsettings.default_lang_for_discord_bot}.json`);
const { create } = require('sourcebin')
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    message.delete();

    const content = fs.readFileSync('./message.txt', {"encoding": "utf-8"})
    if(!content) return message.reply("Please give contents");

        create(
            [
                {
                    name: "dakota-av-ac.675342",
                    content,
                    language: "javascript",
                },
            ],
            {
                title: "Skypixel Projects",
                description: "This is a experimental command for discord moderator logs!",
            }
        ).then((value) => {
            message.channel.send(`Here is the moderator logs code: ${value.url}`).then(sentMessage => {
                sentMessage.delete({timeout: 5000});
            });
        });
}

module.exports.config = {
    name: "logs",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: []
}
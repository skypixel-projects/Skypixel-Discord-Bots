const languages = require('quick.db');
const util = require('minecraft-server-util');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    if(args === "-minecraft") return;

    util.status(args) // port is default 25565
        .then((response) => {
            message.channel.send("This ip address: " + response.host + " has " + response.onlinePlayers + " / " + response.maxPlayers)
    })
        .catch((error) => {
            console.error(error);
    });
}

module.exports.config = {
    name: "minecraft",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["mc", "mcsv"]
}
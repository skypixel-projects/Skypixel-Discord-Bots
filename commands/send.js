const Discord = require("discord.js");
const bot = new Discord.Client();

const botsettings = require('../botsettings.json');
const lang_en = require(`../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send(msg)
        } else {
            // msg = args.join(" ");
            message.channel.send(msg)
        }
}

module.exports.config = {
    name: "say",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ["send", "say"]
}
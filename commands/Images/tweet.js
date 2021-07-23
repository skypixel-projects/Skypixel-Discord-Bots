const discord = require("discord.js");
const fetch = require('node-fetch');
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    let user = message.author.username;
        let m = await message.lineReply(lang_en.commands_tweet_wait);
        if(!args){
            return m.edit(lang_en.commands_tweet_enter_message);
        }

        else {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user}&text=${args}`));
            let json = await res.json();
            let attachment = new discord.MessageAttachment(json.message, "tweet.png");
            await message.lineReply(`${lang_en.commands_tweet_new_tweet} <@${message.author.id}>`, attachment);
            m.delete({ timeout: 5000});
		}
}

module.exports.config = {
    name: "tweet",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ["tweet"]
}
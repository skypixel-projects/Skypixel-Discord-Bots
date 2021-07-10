const discord = require("discord.js");
const fetch = require('node-fetch');

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    let user = message.author.username;
        let m = await message.channel.send("**Please wait...**");
        if(!args){
            return m.edit("You must enter a message!");
        }

        else {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user}&text=${args}`));
            let json = await res.json();
            let attachment = new discord.MessageAttachment(json.message, "tweet.png");
            await message.channel.send(`**New tweet by **<@${message.author.id}>`, attachment);
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
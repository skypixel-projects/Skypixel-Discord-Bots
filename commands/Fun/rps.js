const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports = {
    async run (bot, message, args) {
        const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

        let embed = new Discord.MessageEmbed()
            .setTitle(lang_en.commands_rps_title)
            .setDescription(lang_en.commands_rps_description)
            .setTimestamp()
            
        let msg = await message.channel.send(embed)
            await msg.react("🗻")
            await msg.react("✂")
            await msg.react("📰")

        const filter = (reaction, user) => {
            return ['🗻', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🗻', '✂', '📰']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max: 1, time: 60000, error: ["time"]}).then(
            async(collected) => {
                const reaction = collected.first()
                let result = new Discord.MessageEmbed()
                    .setTitle(lang_en.commands_rps_result)
                    .addField(lang_en.commands_rps_member_choice, `${reaction.emoji.name}`)
                    .addField(lang_en.commands_rps_bot_choice, `${me}`)
                await msg.edit(result)

                if ((me === "🗻" && reaction.emoji.name === "✂") || (me === "✂" && reaction.emoji.name === "📰") || (me === "📰" && reaction.emoji.name === "🗻")) {
                    message.reply(lang_en.commands_rps_lose);
                } else if (me === reaction.emoji.name) {
                    return message.reply(lang_en.commands_rps_tie);
                } else {
                    return message.reply(lang_en.commands_rps_win);
                }
            }
        )
    }
}

module.exports.config = {
    name: "rps",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}
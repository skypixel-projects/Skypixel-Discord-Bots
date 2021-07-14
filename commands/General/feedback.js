const Discord = require("discord.js");

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);


module.exports.run = async (bot, message, args) => {
    

    let feednumber = message.content.split(" ").slice(1)
    let feedstr = message.content.split(" ").slice(2).join(" ");
    let feednumber1 = parseInt(feednumber)
    if (!feedstr) return message.lineReply(`:x: Please rate that bot on a scale of 1 - 5 with a reason \`E.g ^feedback 5 has awesome utilities\``)
    if (!feednumber1 || isNaN(parseInt(feednumber)) || parseInt(feednumber) <= 0 || parseInt(feednumber) > 5) return message.lineReply(`:x:`)
    if (feednumber1 > 5) return message.lineReply(`:x: Please rate the bot on a scale of 1 - 5 with a reason \`E.g ^feedback 5 has awesome utilities\``)
    let stararray = []
    for (i = 0; i < feednumber1; i++) {
        stararray.push("⭐")
    }
    let embed = new Discord.MessageEmbed()
        .setTitle(`New review`)
        .addField(`Stars:`, `${stararray.join("")}`)
        .setColor("RANDOM")
        .addField(`Comment:`, `${feedstr}`)
        .addField(`From:`, `${message.author}`)
        .setThumbnail(message.author.displayAvatarURL({
            dynamic: true
        }))
        .setTimestamp()
        .setFooter(`${message.guild.name}`);
    await message.lineReply(embed)
}

module.exports.config = {
    name: "feedback",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["feedback"]
}
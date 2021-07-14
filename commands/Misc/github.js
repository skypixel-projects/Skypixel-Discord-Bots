const Discord = require("discord.js");
const fetch = require('node-fetch')
const moment = require('moment')

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    if (!args[0]) return message.lineReply({
        embed:{
            description: `**Please Give Me A Github Username!**`
        }
    })
    fetch(`https://api.github.com/users/${args}`)
      .then(res => res.json()).then(body => {
        if(body.message) return message.lineReply({
            embed:{
                description: ` **User Not Found | Please Give Me A Valid Username!**`
            }
        });
      let { login, avatar_url, name, id, html_url, public_repos, followers, following, location, created_at, bio } = body;
  
              const embed = new Discord.MessageEmbed()
              .setAuthor(`${login} Information!`, avatar_url)
              .setColor(`RANDOM`)
              .setThumbnail(`${avatar_url}`)
              .addField(`Username`, `${login}`)
              .addField(`ID`, `${id}`)
              .addField(`Bio`, `${bio || "No Bio"}`)
              .addField(`Public Repositories`, `${public_repos || "None"}`, true)
              .addField(`Followers`, `${followers}`, true)
              .addField(`Following`, `${following}`, true)
              .addField(`Location`, `${location || "No Location"}`)
              .addField(`Account Created`, moment.utc(created_at).format("dddd, MMMM, Do YYYY"))
              .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
              .setTimestamp()
              message.lineReply(embed)

      })
}

module.exports.config = {
    name: "github",
    description: "",
    usage: "",
    accessableby: "Member",
    aliases: ["github"]
}
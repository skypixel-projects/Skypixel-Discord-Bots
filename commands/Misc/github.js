const Discord = require("discord.js");
const fetch = require('node-fetch')
const moment = require('moment')
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    if (!args[0]) return message.lineReply({
        embed:{
            description: lang_en.commands_github_error_username
        }
    })
    fetch(`https://api.github.com/users/${args}`)
      .then(res => res.json()).then(body => {
        if(body.message) return message.lineReply({
            embed:{
                description: lang_en.commands_github_not_found_username
            }
        });
      let { login, avatar_url, name, id, html_url, public_repos, followers, following, location, created_at, bio } = body;
  
              const embed = new Discord.MessageEmbed()
              .setAuthor(`${login} ${lang_en.commands_github_username_information}`, avatar_url)
              .setColor(botsettings.embed_color_message_discord_bot)
              .setThumbnail(`${avatar_url}`)
              .addField(lang_en.commands_github_username, `${login}`)
              .addField(lang_en.commands_github_id, `${id}`)
              .addField(lang_en.commands_github_bio, `${bio || lang_en.commands_github_no_bio}`)
              .addField(lang_en.commands_github_public_repositories, `${public_repos || "None"}`, true)
              .addField(lang_en.commands_github_followers, `${followers}`, true)
              .addField(lang_en.commands_github_following, `${following}`, true)
              .addField(lang_en.commands_github_location, `${location || "No Location"}`)
              .addField(lang_en.commands_github_account_created, moment.utc(created_at).format("dddd, MMMM, Do YYYY"))
              .setFooter(`${lang_en.embed_asked} ` + message.author.username, message.author.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
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
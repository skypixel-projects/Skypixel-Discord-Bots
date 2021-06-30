const Discord = require('discord.js');
const fs = require("fs")
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

const botsettings = require('../botsettings.json');
const lang_en = require(`../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    // message.delete();

    // var embed = new Discord.MessageEmbed()
    //     .setAuthor(lang_en.maintenance)
    //     .setColor(botsettings.embed_color_message_discord_bot)
    //     .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            
    // message.channel.send(embed);

    if (message.channel.nsfw === true) {
        if(args === "anal") {
            const image = await nsfw.anal()
            const embed = new Discord.MessageEmbed()
                .setTitle(`Nsfw Image`)
                .setColor(botsettings.embed_color_message_discord_bot)
                .setImage(image)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            message.channel.send(embed);
        }
        if(args === "fourk") {
            const image = await nsfw.fourk()
            const embed = new Discord.MessageEmbed()
                .setTitle(`Nsfw Image`)
                .setColor(botsettings.embed_color_message_discord_bot)
                .setImage(image)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            message.channel.send(embed);
        }
        if(args === "ass") {
            const image = await nsfw.ass()
            const embed = new Discord.MessageEmbed()
                .setTitle(`Nsfw Image`)
                .setColor(botsettings.embed_color_message_discord_bot)
                .setImage(image)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            message.channel.send(embed);
        }
        if(args === "gonewild") {
            const image = await nsfw.gonewild()
            const embed = new Discord.MessageEmbed()
                .setTitle(`Nsfw Image`)
                .setColor(botsettings.embed_color_message_discord_bot)
                .setImage(image)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            message.channel.send(embed);
        }
        if(args === "pgif") {
            const image = await nsfw.pgif()
            const embed = new Discord.MessageEmbed()
                .setTitle(`Nsfw Image`)
                .setColor(botsettings.embed_color_message_discord_bot)
                .setImage(image)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            message.channel.send(embed);
        }
        if(args === "pussy") {
            const image = await nsfw.pussy()
            const embed = new Discord.MessageEmbed()
                .setTitle(`Nsfw Image`)
                .setColor(botsettings.embed_color_message_discord_bot)
                .setImage(image)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            message.channel.send(embed);
        }
        if(args === "thigh") {
            const image = await nsfw.thigh()
            const embed = new Discord.MessageEmbed()
                .setTitle(`Nsfw Image`)
                .setColor(botsettings.embed_color_message_discord_bot)
                .setImage(image)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            message.channel.send(embed);
        }
        if(args === "boobs") {
            const image = await nsfw.boobs()
            const embed = new Discord.MessageEmbed()
                .setTitle(`Nsfw Image`)
                .setColor(botsettings.embed_color_message_discord_bot)
                .setImage(image)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            message.channel.send(embed);
        }
        if(args === "hentaiass") {
            const image = await nsfw.hentaiass()
            const embed = new Discord.MessageEmbed()
                .setTitle(`Nsfw Image`)
                .setColor(botsettings.embed_color_message_discord_bot)
                .setImage(image)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            message.channel.send(embed);
        }
        if(args === "hentai") {
            const image = await nsfw.hentai()
            const embed = new Discord.MessageEmbed()
                .setTitle(`Nsfw Image`)
                .setColor(botsettings.embed_color_message_discord_bot)
                .setImage(image)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            message.channel.send(embed);
        }
        if(args === "hmidriff") {
            const image = await nsfw.hmidriff()
            const embed = new Discord.MessageEmbed()
                .setTitle(`Nsfw Image`)
                .setColor(botsettings.embed_color_message_discord_bot)
                .setImage(image)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            message.channel.send(embed);
        }
        if(args === "hentaithigh") {
            const image = await nsfw.hentaithigh()
            const embed = new Discord.MessageEmbed()
                .setTitle(`Nsfw Image`)
                .setColor(botsettings.embed_color_message_discord_bot)
                .setImage(image)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            message.channel.send(embed);
        }
        if(args === "erokemo") {
            const image = await nsfw.erokemo()
            const embed = new Discord.MessageEmbed()
                .setTitle(`Nsfw Image`)
                .setColor(botsettings.embed_color_message_discord_bot)
                .setImage(image)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            message.channel.send(embed);
        }
        if(args === "kitsune") {
            const image = await nsfw.kitsune()
            const embed = new Discord.MessageEmbed()
                .setTitle(`Nsfw Image`)
                .setColor(botsettings.embed_color_message_discord_bot)
                .setImage(image)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            message.channel.send(embed);
        }
        if(args === "lewd") {
            const image = await nsfw.lewd()
            const embed = new Discord.MessageEmbed()
                .setTitle(`Nsfw Image`)
                .setColor(botsettings.embed_color_message_discord_bot)
                .setImage(image)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            message.channel.send(embed);
        }
        if(args === "nekofeet") {
            const image = await nsfw.nekofeet()
            const embed = new Discord.MessageEmbed()
                .setTitle(`Nsfw Image`)
                .setColor(botsettings.embed_color_message_discord_bot)
                .setImage(image)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            message.channel.send(embed);
        }
        if(args === "nekopussy") {
            const image = await nsfw.nekopussy()
            const embed = new Discord.MessageEmbed()
                .setTitle(`Nsfw Image`)
                .setColor(botsettings.embed_color_message_discord_bot)
                .setImage(image)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            message.channel.send(embed);
        }
        if(args === "nekotits") {
            const image = await nsfw.nekotits()
            const embed = new Discord.MessageEmbed()
                .setTitle(`Nsfw Image`)
                .setColor(botsettings.embed_color_message_discord_bot)
                .setImage(image)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            message.channel.send(embed);
        }
        if(args === "solo") {
            const image = await nsfw.solo()
            const embed = new Discord.MessageEmbed()
                .setTitle(`Nsfw Image`)
                .setColor(botsettings.embed_color_message_discord_bot)
                .setImage(image)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            message.channel.send(embed);
        }
        if(args === "wallpaper") {
            const image = await nsfw.wallpaper()
            const embed = new Discord.MessageEmbed()
                .setTitle(`Nsfw Image`)
                .setColor(botsettings.embed_color_message_discord_bot)
                .setImage(image)
                .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            message.channel.send(embed);
        }
    } else {
        message.channel.send("This isn't NSFW channel!")
    }
}

module.exports.config = {
    name: "secsy",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["secsy", "porn", "nsfw"]
}
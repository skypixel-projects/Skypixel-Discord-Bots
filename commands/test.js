const discord = require('discord.js');
require('discord-reply');
const bot = new discord.Client();

const botsettings = require('../botsettings.json');
const lang_en = require(`../languages/${botsettings.default_lang_for_discord_bot}.json`);

const fs = require('fs');
const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports.run = async (bot, message, args) => {

    // Aici este commanda pentru a juca un voice recorder!
    if(args === 'voice') {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const broadcast = bot.voice.createBroadcast();
            const dispatcher = broadcast.play('commands/audio.mp3');
            connection.play(broadcast);
        }
    }

    // Aici este commanda pentru a crea un mesaj temporal!
    if(args === 'message') {
        message.channel.send('```This message will been deleted after 25000 milliseconds!```')
        .then(msg => {
            msg.delete({ timeout: 25000 /*time unitl delete in milliseconds*/});
            msg.react("👎"),
            msg.react("👍"),
            msg.react('🍎'),
            msg.react('🍊'),
            msg.react('🍇')
        })
        .catch('error...');
    }

    // Aici este commanda pentru a crea un button embed!
    if(args === 'button') {
        const embed = new discord.MessageEmbed()
        .setTitle(`:space_invader:  **ANUNTURII IMPORTANTE**  :space_invader:`)
        .setDescription(`*Salutare! Deci faza este ca trebuie sa te verificam daca nu esti un robot sau ceva!
        Mda... Suna cam dubios dar trebuie so facem pentru siguranta server-ului!
        Deci pentru a intra trebuie sa apesi pe capul lupului acolo la reactii :sweat_smile:
        Sii... Puff... Ai intrat cu success in server-ul meu :). Sa te distrezi. Si sa fii sanatos!!!
        Daca te rog ceva mult atunci o so faci? Poti sa promovezi acest server de discord ( https://discord.io/maxwastaked )*`)
        .setColor("RED")

        const btn1 = new MessageButton()
        .setStyle("green")
        .setLabel("DA ACCEPT")
        .setID("button1")

        const btn2 = new MessageButton()
        .setStyle("red")
        .setLabel("NU ACCEPT")
        .setID("button2")

        const yes = new MessageActionRow()
        .addComponent(btn1)
        .addComponent(btn2)

        message.channel.send ({
            embed: embed,
            component: yes
        });
    }

    // Aici este commanda pentru a crea un text channel!
    if(args === 'create-channel') {
        message.guild.channels.create('Text', {
            type: 'text',
            permissionOverwrites: [{
                id: message.guild.id,
                allow: ['VIEW_CHANNEL'],
            }]
        });
        message.channel.send("Channel Created!");
    }

    // Aici este commanda pentru a crea un voice channel!
    if(args === 'create-voice') {
        message.guild.channels.create('Text', {
            type: 'voice',
            permissionOverwrites: [{
                id: message.guild.id,
                allow: ['VIEW_CHANNEL'],
            }]
        });
        message.channel.send("Channel Created!");
    }
}

module.exports.config = {
    name: "test",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ['dev', 'ping']
}
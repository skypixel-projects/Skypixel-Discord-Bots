const discord = require('discord.js');
require('discord-reply'); //⚠️ IMPORTANT: put this before your discord.Client()
const bot = new discord.Client();
// require('discord-buttons')(bot);

const botsettings = require('../botsettings.json');
const lang_en = require(`../languages/${botsettings.default_lang_for_discord_bot}.json`);

const fs = require('fs');
const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports.run = async (bot, message, args) => {
    if(args === 'voice') {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const broadcast = bot.voice.createBroadcast();
            const dispatcher = broadcast.play('commands/audio.mp3');
            connection.play(broadcast);
        }
    }

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
}

module.exports.config = {
    name: "test",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ['dev', 'ping']
}
const discord = require('discord.js');
const bot = new discord.Client();
const fetch = require('node-fetch');
const fs = require('fs');
const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);
const { MessageMenu, MessageMenuOption, MessageActionRow } = require("discord-buttons");
const languages = require('quick.db');
require('discord-reply');

module.exports.run = async (bot, message, args) => {

    // if(args === 'dropdown') {
    //     const Option1 = new MessageMenuOption()
    //         .setLabel('Testing1')
    //         .setDescription('This is a testing command!')
    //         .setEmoji(':joy:')
    //         .setValue('Testing1')

    //     const Option2 = new MessageMenuOption()
    //         .setLabel('Testing2')
    //         .setDescription('This is a testing command!')
    //         .setEmoji(':joy:')
    //         .setValue('Testing2')

    //     const Option3 = new MessageMenuOption()
    //         .setLabel('Testing3')
    //         .setDescription('This is a testing command!')
    //         .setEmoji(':joy:')
    //         .setValue('Testing3')

    //     const Menu = new MessageMenu()
    //         .setID('menu1')
    //         .setPlaceholder('Choose you ideeas')
    //         .addOption(Option1)
    //         .addOption(Option2)
    //         .addOption(Option3)

    //     await message.channel.send(Menu)
    // }

    // Aici este commanda pentru a juca un voice recorder!
    if(args === 'voice') {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const broadcast = bot.voice.createBroadcast();
            const dispatcher = broadcast.play('commands/audio.mp3');
            connection.play(broadcast);
        }
    }

    if(args === "count") {
        message.lineReply(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }

    if(args === "live") {
        getJSON("https://api.twitch.tv/kraken/streams/insym", function(err, res) {
            if (res.stream == null) {
                message.reply(message, "currently not live");
            } else {
                message.reply(message, "currently live");
            }
        });
    }

    // Aici este commanda pentru a crea un mesaj temporal!
    if(args === 'message') {
        message.lineReply('```This message will been deleted after 25000 milliseconds!```')
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

        message.lineReply ({
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
        message.lineReply("Channel Created!");
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
        message.lineReply("Channel Created!");
    }

    if(args.includes('getlang')) {
        message.channel.send(languages.get(message.guild.id));
    }
}

module.exports.config = {
    name: "dev",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ['dev', 'test']
}
const discord = require('discord.js');
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');
require('discord-reply');

const { MessageEmbed } = require('discord.js')
const { MessageMenuOption, MessageMenu, MessageActionRow } = require('discord-buttons')

module.exports.run = async (bot, message, args) => {

    if(args === 'dropdown') {
        const Role1 = new MessageMenuOption()
            .setLabel('WikiPedia') // Label
            .setDescription('Get WikiPedia Role') // Description, Limit Is 50
            .setEmoji('811297151069323274') // Emoji ID
            .setValue('wiki') // To Make Its Funtion When Use Click It

            // Second Option In Menu
            const Role2 = new MessageMenuOption()
            .setLabel('YouTube') // Label
            .setDescription('Get YouTube Role') // Description, Limit Is 50
            .setEmoji('806408246733832232') // Emoji ID
            .setValue('yt') // To Make Its Funtion When Use Click It

            // Third Option In Menu
            const Role3 = new MessageMenuOption()
            .setLabel('Visual Studio Code') // Label
            .setDescription('Get Visual Studio Code Role') // Description, Limit Is 50
            .setEmoji('811297141669888040') // Emoji ID
            .setValue('vscode') // To Make Its Funtion When Use Click It

            // Fourth Option In Menu
            const Role4 = new MessageMenuOption()
            .setLabel('GitHub') // Label
            .setDescription('Get GitHub Role') // Description, Limit Is 50
            .setEmoji('811297109953347595') // Emoji ID
            .setValue('git') // To Make Its Funtion When Use Click It

            const Menu = new MessageMenu()
            .setID('menu') // To Make Its Funtion When Use Click It
            .setPlaceholder('Choose Roles')
            .addOption(Role1)
            .addOption(Role2)
            .addOption(Role3)
            .addOption(Role4)
            // .setMaxValues(4) // How Many Roles They Can Select // How Many Selection They Can Make // Maximum
            // .setMinValues(1) // How Many Roles They Can Select // How Many Selection They Can Make // Minimum

            const RoleMenu = new MessageActionRow()
            .addComponent(Menu)

            message.channel.send(`Select Roles By Choosing Options Below In Menu`, {
                component: RoleMenu
            })

            // Making Its Function
            bot.on('clickMenu', async m => {
                if(m.values[0] === 'wiki') { // If User Click WikiPedia Then This Will Happen
                    m.reply.defer()
                    // m.clicker.member.roles.add('811328887120199720') // Add WikiPedia Role
                    m.channel.send(`<@${m.clicker.id}> Added WikiPedia Role`).then(msg => { // Send A Message In That Channel
                        msg.delete({ timeout: 4000 }) // Delete After 4 Seconds
                    })
                    // m.clicker.member.send(`Added WikiPedia Role`) // Send A DM Also
                } else if(m.values[0] === 'yt') { // If User Click YouTube Then This Will Happen
                    m.reply.defer()
                    // m.clicker.member.roles.add('811328860414541884') // Add YouTube Role
                    m.channel.send(`<@${m.clicker.id}> Added YouTube Role`).then(msg => { // Send A Message In That Channel
                        msg.delete({ timeout: 4000 }) // Delete After 4 Seconds
                    })
                    // m.clicker.member.send(`Added YouTube Role`) // Send A DM Also
                } else if(m.values[0] === 'vscode') { // If User Click VS Code Then This Will Happen
                    m.reply.defer()
                    // m.clicker.member.roles.add('811328908468420628') // Add VS Code Role
                    m.channel.send(`<@${m.clicker.id}> Added VS Code Role`).then(msg => { // Send A Message In That Channel
                        msg.delete({ timeout: 4000 }) // Delete After 4 Seconds
                    })
                    // m.clicker.member.send(`Added VS Code Role`) // Send A DM Also
                } else if(m.values[0] === 'git') { // If User Click GitHub Then This Will Happen
                    m.reply.defer()
                    // m.clicker.member.roles.add('811328963049553931') // Add GitHub Role
                    m.channel.send(`<@${m.clicker.id}> Added GitHub Role`).then(msg => { // Send A Message In That Channel
                        msg.delete({ timeout: 4000 }) // Delete After 4 Seconds
                    })
                    // m.clicker.member.send(`Added GitHub Role`) // Send A DM Also
                }
            })
    }

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
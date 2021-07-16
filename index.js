const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const lang_en = require(`./languages/${botsettings.default_lang_for_discord_bot}.json`);
const bot = new Discord.Client({ presence: { status: "idle" }});
const fs = require("fs");
const { error, time } = require('console');
const { badwords } = require('./swearing/blacklist.json');
const { MessageButton, MessageActionRow } = require('discord-buttons');
const { default: fetch } = require('node-fetch');
const { AsyncResource } = require('async_hooks');
const distube = require("distube")

require('dotenv').config();
require("./util/eventHandler")(bot)
require("./util/commandHandler")(bot)
require('discord-buttons')(bot)

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.distube = new distube(bot, { searchSongs: false, emitNewSongOnly: true, leaveOnFinish: true, leaveOnEmpty: true })

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.substring(message.content.indexOf(' ')+1);
    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)
})

bot.on('message', async message => {
    if(message.bot) return;
    if (message.channel.type === 'dm'){ 
        console.log("[" + message.author.username + "]: " + message.content)
    }
});

bot.on("message", async (message, guild) => {
    if(message.author.bot || message.author.bot) return;

    if(message.channel.type === 'dm'){
        fetch.default(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}`)
        .then(res => res.json())
        .then(data => {
            message.lineReply(data.response)
        });
    }
});

bot.on('message', (msg) => {
    if(msg.author.bot || msg.author.bot) return;
    if(msg.channel.type === 'dm') return;
    let confirm = false;
   
    var i;
    for (i = 0;i < badwords.length; i++) {
        if (msg.content.toLowerCase().includes(badwords[i].toLowerCase()))
            confirm = true;
            if (confirm) {
                return msg.lineReplyNoMention("You are not allowed to swear!");
            }   
    } 
});

bot.on("message", function(message){
    var logger = fs.createWriteStream('message.txt', {
        flags: 'a'
    });

    logger.write(` [${message.guild}] - ` + message.author.username + ` => ${message}` + '\n')
});

bot.on("guildMemberAdd", member => {
    if(member.bot) return;
    console.log(`+ (${member.displayName}) has join to (${member.guild}) server!`)

    const role = member.guild.roles.cache.find(role => role.name.toLowerCase().includes('member') || role.name.toLowerCase().includes('membru') || role.name.toLowerCase().includes('tag'));
    if(!role) return;
    member.roles.add(role);

    const join = member.guild.channels.cache.find((channel) => channel.name.toLowerCase().includes('welcome') || channel.name.toLowerCase().includes('bun-venit') || channel.name.toLowerCase().includes('isten-hozott'))
    const joinEmbed = new Discord.MessageEmbed()
        .setColor(botsettings.embed_color_message_discord_bot)
        .setTitle(`:wave: **Welcome ${member.displayName} to the ${member.guild} discord server!**`)
        .setDescription(`I hope do you have a grate time and fun on this server!`)
        .setThumbnail(member.user.avatarURL())
        .setTimestamp()

    if(!join) return;
    join.send(joinEmbed);
});

bot.on("guildMemberRemove", member => {
    if(member.bot) return;
    console.log(`- (${member.displayName}) has quit to (${member.guild}) server!`)

    const quit = member.guild.channels.cache.find((channel) => channel.name.toLowerCase().includes('bye') || channel.name.toLowerCase().includes('la-revedere') || channel.name.toLowerCase().includes('viszontlátásra'))
    const quitEmbed = new Discord.MessageEmbed()
        .setColor(botsettings.embed_color_message_discord_bot)
        .setTitle(`:wave: **Goodbye ${member.displayName} from the ${member.guild} discord server!**`)
        .setDescription(`I hope do you have a grate time and fun on this server!`)
        .setThumbnail(member.user.avatarURL())
        .setTimestamp()

    if(!quit) return;
    quit.send(quitEmbed);
})

bot.on('clickButton', async (button) => {
    if(button.id == 'button1') {
        button.clicker.user.send(`Okay! ${button.clicker.user} just hit the yes button`)
    }
    if(button.id == 'button2') {
        button.clicker.user.send(`Okay! ${button.clicker.user} just hit the no button`)
    }
});

async function createAPIMessage(interaction, content) {
    const apiMessage = await Discord.APIMessage.create(bot.channels.resolve(interaction.channel_id), content)
        .resolveData()
        .resolveFiles();
    return { ...apiMessage.data, files: apiMessage.files };
}

bot.distube
    .on("playSong", (message, queue, song) => {
        var embed = new Discord.MessageEmbed()
            .setTitle('Music:')
            .setDescription(`Playing \`${song.name}\` - \`${song.formattedDuration}\``)
            .setImage(song.thumbnail)
            .setColor(botsettings.embed_color_message_discord_bot)
            .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
        message.lineReply(embed)
    })

    .on("addSong", (message, queue, song) => {
        var embed = new Discord.MessageEmbed()
            .setTitle('Music:')
            .setDescription(`Added ${song.name} - \`${song.formattedDuration}\` to the queue`)
            .setImage(song.thumbnail)
            .setColor(botsettings.embed_color_message_discord_bot)
            .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
        message.lineReply(embed)
    })

    .on("playList", (message, queue, playlist, song) => {
        var embed = new Discord.MessageEmbed()
            .setTitle('Music:')
            .setDescription(`Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`})`)
            .setImage(song.thumbnail)
            .setColor(botsettings.embed_color_message_discord_bot)
            .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
        message.lineReply(embed)
    })

    .on("addList", (message, queue, playlist) => {
        var embed = new Discord.MessageEmbed()
            .setTitle('Music:')
            .setDescription(`Added \`${playlist.name}\` playlist (${playlist.songs.length} songs to the queue`)
            .setImage(song.thumbnail)
            .setColor(botsettings.embed_color_message_discord_bot)
            .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
        message.lineReply(embed)
    })

    .on("searchResult", (message, result) => {
        let i = 0;
        message.lineReply(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`);
    })

    .on("searchCancel", (message) => message.lineReply(`Searching canceled`))
    .on("error", (message, e) => {
        console.error(e)
        message.lineReply("An error encountered: " + e);
    });

// bot.on('ready', () => {
//     bot.api.applications(bot.user.id).commands.post({
//         data: {
//             name: "echo",
//             description: "Echos your text as an embed!",

//             options: [
//                 {
//                     name: "content",
//                     description: "Content of the embed",
//                     type: 3,
//                     required: true
//                 }
//             ]
//         }
//     });

//     bot.ws.on('INTERACTION_CREATE', async interaction => {
//         const command = interaction.data.name.toLowerCase();
//         const args = interaction.data.options;
//         if(command == "echo") {
//             const description = args.find(arg => arg.name.toLowerCase() == "content").value;

//             // bot.channels.cache.get('852084741645533234').send('Hello here!');

//             const embed = new Discord.MessageEmbed()
//                 .setFooter("This command is in development!")
//                 .setTitle(description)

//                 bot.api.interactions(interaction.id, interaction.token).callback.post({
//                 data: {
//                     type: 4,
//                     data: await createAPIMessage(interaction, embed)
//                 }
//             });
//         }
//     });
// });

bot.login(process.env.DISCORD_TOKEN);
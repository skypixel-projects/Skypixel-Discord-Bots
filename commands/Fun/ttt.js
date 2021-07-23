const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    if(message.mentions.members.first() === message.member) return message.lineReply(lang_en.commands_ttt_error_member)

    let opponent = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!opponent) return message.lineReply(lang_en.commands_ttt_member_game)
        let fighters = [message.member.id, opponent.id].sort(() => (Math.random() > .5) ? 1 : -1)
        let Args = {
            user: 0,
            a1: {
                style: "gray",
                label: "➖",
                disabled: false
            },
            a2: {
                style: "gray",
                label: "➖",
                disabled: false
            },
            a3: {
                style: "gray",
                label: "➖",
                disabled: false
            },
            b1: {
                style: "gray",
                label: "➖",
                disabled: false
            },
            b2: {
                style: "gray",
                label: "➖",
                disabled: false
            },
            b3: {
                style: "gray",
                label: "➖",
                disabled: false
            },
            c1: {
                style: "gray",
                label: "➖",
                disabled: false
            },
            c2: {
                style: "gray",
                label: "➖",
                disabled: false
            },
            c3: {
                style: "gray",
                label: "➖",
                disabled: false
            }
        }
        let { MessageButton, MessageActionRow } = require('discord-buttons')
        let msg = await message.lineReply(`**TicTacToe** | <@!${Args.userid}>'s ${lang_en.commands_ttt_turn} (⭕)`)
        tictactoe(msg)
        async function tictactoe(m) {
            Args.userid=fighters[Args.user]
            let won = {
                "⭕": false,
                "❌": false
            }
            if (Args.a1.label == "⭕" && Args.b1.label == "⭕" && Args.c1.label == "⭕") won["⭕"] = true
            if (Args.a2.label == "⭕" && Args.b2.label == "⭕" && Args.c2.label == "⭕") won["⭕"] = true
            if (Args.a3.label == "⭕" && Args.b3.label == "⭕" && Args.c3.label == "⭕") won["⭕"] = true
            if (Args.a1.label == "⭕" && Args.b2.label == "⭕" && Args.c3.label == "⭕") won["⭕"] = true
            if (Args.a3.label == "⭕" && Args.b2.label == "⭕" && Args.c1.label == "⭕") won["⭕"] = true
            if (Args.a1.label == "⭕" && Args.a2.label == "⭕" && Args.a3.label == "⭕") won["⭕"] = true
            if (Args.b1.label == "⭕" && Args.b2.label == "⭕" && Args.b3.label == "⭕") won["⭕"] = true
            if (Args.c1.label == "⭕" && Args.c2.label == "⭕" && Args.c3.label == "⭕") won["⭕"] = true
            if (won["⭕"] != false) return m.edit(`⭕ ${lang_en.commands_ttt_win_message}`)
            if (Args.a1.label == "❌" && Args.b1.label == "❌" && Args.c1.label == "❌") won["❌"] = true
            if (Args.a2.label == "❌" && Args.b2.label == "❌" && Args.c2.label == "❌") won["❌"] = true
            if (Args.a3.label == "❌" && Args.b3.label == "❌" && Args.c3.label == "❌") won["❌"] = true
            if (Args.a1.label == "❌" && Args.b2.label == "❌" && Args.c3.label == "❌") won["❌"] = true
            if (Args.a3.label == "❌" && Args.b2.label == "❌" && Args.c1.label == "❌") won["❌"] = true
            if (Args.a1.label == "❌" && Args.a2.label == "❌" && Args.a3.label == "❌") won["❌"] = true
            if (Args.b1.label == "❌" && Args.b2.label == "❌" && Args.b3.label == "❌") won["❌"] = true
            if (Args.c1.label == "❌" && Args.c2.label == "❌" && Args.c3.label == "❌") won["❌"] = true
            if (won["❌"] != false) return m.edit(`❌ ${lang_en.commands_ttt_win_message}`)
            let a1 = new MessageButton()
                .setStyle(Args.a1.style)
                .setLabel(Args.a1.label)
                .setID('a1')
                .setDisabled(Args.a1.disabled);
            let a2 = new MessageButton()
                .setStyle(Args.a2.style)
                .setLabel(Args.a2.label)
                .setID('a2')
                .setDisabled(Args.a2.disabled);
            let a3 = new MessageButton()
                .setStyle(Args.a3.style)
                .setLabel(Args.a3.label)
                .setID('a3')
                .setDisabled(Args.a3.disabled);
            let b1 = new MessageButton()
                .setStyle(Args.b1.style)
                .setLabel(Args.b1.label)
                .setID('b1')
                .setDisabled(Args.b1.disabled);
            let b2 = new MessageButton()
                .setStyle(Args.b2.style)
                .setLabel(Args.b2.label)
                .setID('b2')
                .setDisabled(Args.b2.disabled);
            let b3 = new MessageButton()
                .setStyle(Args.b3.style)
                .setLabel(Args.b3.label)
                .setID('b3')
                .setDisabled(Args.b3.disabled);
            let c1 = new MessageButton()
                .setStyle(Args.c1.style)
                .setLabel(Args.c1.label)
                .setID('c1')
                .setDisabled(Args.c1.disabled);
            let c2 = new MessageButton()
                .setStyle(Args.c2.style)
                .setLabel(Args.c2.label)
                .setID('c2')
                .setDisabled(Args.c2.disabled);
            let c3 = new MessageButton()
                .setStyle(Args.c3.style)
                .setLabel(Args.c3.label)
                .setID('c3')
                .setDisabled(Args.c3.disabled);
            let a = new MessageActionRow()
                .addComponents([a1, a2, a3])
            let b = new MessageActionRow()
                .addComponents([b1, b2, b3])
            let c = new MessageActionRow()
                .addComponents([c1, c2, c3])
            let buttons = { components: [a, b, c] }
            m.edit(`**TicTacToe** | <@!${Args.userid}>'s ${lang_en.commands_ttt_turn} (${Args.user == 0 ? "⭕" : "❌"})`, buttons)
            const filter = (button) => button.clicker.user.id === Args.userid;
            const collector = m.createButtonCollector(filter, { max: 1, time: 30000 });

            collector.on('collect', b => {
                if (Args.user == 0) {
                    Args.user = 1
                    Args[b.id] = {
                        style: "green",
                        label: "⭕",
                        disabled: true
                    }
                } else {
                    Args.user = 0
                    Args[b.id] = {
                        style: "red",
                        label: "❌",
                        disabled: true
                    }
                }
                b.defer()
                const map = (obj, fun) =>
                    Object.entries(obj).reduce(
                        (prev, [key, value]) => ({
                            ...prev,
                            [key]: fun(key, value)
                        }),
                        {}
                    );
                const objectFilter = (obj, predicate) =>
                    Object.keys(obj)
                        .filter(key => predicate(obj[key]))
                        .reduce((res, key) => (res[key] = obj[key], res), {});
                let Brgs = objectFilter(map(Args, (_, fruit) => fruit.label == "➖"), num => num == true);
                if (Object.keys(Brgs).length == 0) return m.edit(lang_en.commands_ttt_tie_message)
                tictactoe(m)
            });
            collector.on('end', collected => {
                if (collected.size == 0) m.edit(`<@!${Args.userid}> ${lang_en.commands_ttt_time_end}`)
            });
        }
}

module.exports.config = {
    name: "ttt",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["ttt", "tic tac toe"]
}
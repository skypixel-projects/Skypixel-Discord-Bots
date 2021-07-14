const Discord = require("discord.js");
const ms = require('ms');

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);


module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.lineReply('You are not allowed to start giveaways');

        let channel = message.mentions.channels.first();

        if (!channel) return message.lineReply('Please provide a channel');

        let giveawayDuration = args[1];

        if (!giveawayDuration || isNaN(ms(giveawayDuration))) return message.lineReply('Please provide a valid duration');

        let giveawayWinners = args[2];

        if (isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.lineReply('Please provide a valid number of winners!');

        let giveawayPrize = args.slice(3).join(" ");

        if (!giveawayPrize) return message.lineReply('Ok then, I\'ll give away nothing');

        client.giveawaysManager.start(channel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayWinners,
            hostedBy: client.config.hostedBy ? message.author : null,

            messages: {
                giveaway: (client.config.everyoneMention ? "@everyone\n\n" : "") + "GIVEAWAY",
                giveawayEned: (client.config.everyoneMention ? "@everyone\n\n" : "") + "GIVEAWAY ENDED",
                timeRemaining: "Time remaining: **{duration}**",
                inviteToParticipate: "React with 🎉 to enter",
                winMessage: "Congrats {winners}, you won **{prize}**",
                embedFooter: "Giveaway time!",
                noWinner: "Couldn't determine a winner",
                hostedBy: "Hosted by {user}",
                winners: "winner(s)",
                endedAt: "Ends at",
                units: {
                    seconds: "seconds",
                    minutes: "minutes",
                    hours: "hours",
                    days: "days",
                    pluralS: false
                }
            }
        })

        message.lineReply(`Giveaway starting in ${channel}`);
}

module.exports.config = {
    name: "giveaway",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: []
}
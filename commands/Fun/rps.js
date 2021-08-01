const Discord = require("Discord.js");
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

const hands = ['rock', 'paper', 'scissors'];

module.exports = {
    async run (bot, message, args) {
        if (message.channel instanceof Discord.DMChannel) {
        if (message.author === game.players[0]) {
            if (
            isNaN(args['choice']) ||
            (!isNaN(args['choice']) && (args['choice'] < 1 || args['choice'] > 3))
            ) {
            game.players[0].send('Please choose a valid number');
            } else {
            game.hand1 = args['choice'];
            }

            //reads the message of players[1] to determine their hand
        } else if (message.author === game.players[1]) {
            if (
            isNaN(args['choice']) ||
            (!isNaN(args['choice']) && args['choice'] < 1 && args['choice'] > 3)
            ) {
            game.players[1].send('Please choose a valid number');
            } else {
            game.hand2 = args['choice'];
            }
        }

        if (game.hand1 !== '' && game.hand2 !== '') {
            //determines the winner by comparing the two messages using the helper function
            game.channel.send(
            determineWinner(
                hands[parseInt(game.hand1) - 1],
                hands[parseInt(game.hand2) - 1],
                game
            )
            );

            //deleting the game as it has ended
            games.splice(game);
        }
        }
    },
    };

    //compares the two hands and determines the winner
    function determineWinner(hand1, hand2, game) {
    if (hand1 === hand2) {
        return 'tie!';
    }
    if (hand1 === 'paper') {
        if (hand2 === 'rock') {
        return `Congratulations! Player ${game.players[0].username} won the game!`;
        }
        if (hand2 === 'scissors') {
        return `Congratulations! Player ${game.players[1].username} won the game!`;
        }
    }
    if (hand1 === 'rock') {
        if (hand2 === 'paper') {
        return `Congratulations! Player ${game.players[1].username} won the game!`;
        }
        if (hand2 === 'scissors') {
        return `Congratulations! Player ${game.players[0].username} won the game!`;
        }
    }
    if (hand1 === 'scissors') {
        if (hand2 === 'rock') {
        return `Congratulations! Player ${game.players[1].username} won the game!`;
        }
        if (hand2 === 'paper') {
        return `Congratulations! Player ${game.players[0].username} won the game!`;
        }
    }
    return 'error lmao';
}

module.exports.config = {
    name: "rps",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}
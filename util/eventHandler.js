const Discord = require("discord.js");
const fs = require("fs");

module.exports = bot => {
    const eventFiles_events = fs.readdirSync('././events').filter(file => file.endsWith('.js'));

    for (const file of eventFiles_events) {
        const event = require(`../events/${file}`);
        if (event.once) {
            bot.once(event.name, (...args) => event.execute(...args, Discord, bot));
        } else {
            bot.on(event.name, (...args) => event.execute(...args, Discord, bot));
        }
    }

    const eventFiles_servers = fs.readdirSync('././events/Servers/').filter(file => file.endsWith('.js'));

    for (const file of eventFiles_servers) {
        const event = require(`../events/Servers/${file}`);
        if (event.once) {
            bot.once(event.name, (...args) => event.execute(...args, Discord, bot));
        } else {
            bot.on(event.name, (...args) => event.execute(...args, Discord, bot));
        }
    }
}
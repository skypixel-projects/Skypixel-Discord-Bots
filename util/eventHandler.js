const Discord = require("discord.js");
const fs = require("fs");

module.exports = bot => {
    const eventFiles = fs.readdirSync('././events').filter(file => file.endsWith('.js'));

    for (const file of eventFiles) {
        const event = require(`../events/${file}`);
        if (event.once) {
            bot.once(event.name, (...args) => event.execute(...args, Discord, bot));
        } else {
            bot.on(event.name, (...args) => event.execute(...args, Discord, bot));
        }
    }
}

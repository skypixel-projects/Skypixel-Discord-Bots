const Discord = require("discord.js");
const reqEvent = (event) => require(`../events/${event}`)

module.exports = bot => {
    bot.on("ready", function() {reqEvent("ready") (bot) })
    bot.on("ready", function() {reqEvent("activity") (bot) })
    bot.on("guildMemberAdd", () => reqEvent("security/AltAccount")(bot));
}

const reqEvent = (event) => require(`../events/${event}`)

module.exports = bot => {

    // bot.on("ready", function() {reqEvent("ready"<-- File name here!
    // bot.on("ready"<-- Event name here!


<<<<<<< HEAD
    bot.on("ready", function() {reqEvent("ready") (bot) })
    bot.on("ready", function() {reqEvent("activity") (bot) })
    bot.on("messageReactionAdd", function() {reqEvent("react") (bot) })
 }
=======
    bot.on("ready", function() {reqEvent("ready") (bot) });
    bot.on("ready", function() {reqEvent("activity") (bot) });
    bot.on("ready", function() {reqEvent("dakota") (bot) });
    bot.on("guildMemberAdd", function() {reqEvent("announce") (bot) });
}
>>>>>>> d3c7147546fbff93bcf0f1d3e5dd64eb7b12bb66

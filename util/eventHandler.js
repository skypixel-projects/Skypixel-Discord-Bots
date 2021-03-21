const reqEvent = (event) => require(`../events/${event}`)

module.exports = bot => {
    bot.on("ready", function() {reqEvent("ready") (bot) });
    bot.om("Presence", function() {reqEvent("Presence" (bot))});
 }
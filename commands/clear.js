const botsettings = require('../botsettings.json');

module.exports.run = async (bot, message, args) => {
    message.delete();
            
    if (message.deletable) {
        message.delete();
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Missing Permissions!").then(m => m.delete(5000));
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.reply("This is not a number").then(m => m.delete(5000));
    }

    let deleteAmount;
    if (parseInt(args[0]) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true);

}

module.exports.config = {
    name: "clear",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ['c', 'purge']
}
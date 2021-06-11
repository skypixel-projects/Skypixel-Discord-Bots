const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.last() || message.author;
    const devices = user.presence?.clientStatus || {};

    const description = () => {
        if(devices > 1) {
            const entries = Object.entries(devices).map(
                (value) => value[0]
            );
            return `Device: ${entries}`;
        } else {
            const entries = Object.entries(devices)
                .map((value, index) => `${index + 1}) ${value[0]}`)
                .join("\n");
            return `Devices: \n${entries}`;
        }
    }
        var embed = new Discord.MessageEmbed()
            .setAuthor(user.tag, user.displayAvatarURL())
            .setDescription(description());
        
        message.channel.send(`This command is in developer mode!`)
        message.channel.send(embed)
}

module.exports.config = {
    name: "device",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ["device", "devices"]
}
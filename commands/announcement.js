module.exports.run = async (bot, message, args) => {
    message.delete();
}

module.exports.config = {
    name: "announce",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ["ac", "announce", "announcement"]
}
const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first();

    if (!member) return message.lineReply("Please specify a member!");

    const arguments = args.slice(22);

    if (!arguments) return message.lineReply("Please specify a nickname!");

    try {
      member.setNickname(arguments);
    } catch (err) {
      console.log(err);
      message.lineReply(
        "I do not have permission to set " + member.toString() + " nickname!"
      );
    }
}

module.exports.config = {
    name: "setnick",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ["set-nickname"]
}
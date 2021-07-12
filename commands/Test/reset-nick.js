const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
  const member = message.mentions.members.first();

  if (!member) return message.reply("Please specify a member!");

  try {
    member.setNickname(null);
  } catch (err) {
    message.reply(
      "I do not have permission to reset " + member.toString() + " nickname!"
    );
  }
}

module.exports.config = {
    name: "reset-nick",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ["reset-nickname"]
}
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
  const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

  if(!message.guild.me.hasPermission()) return;

  const member = message.mentions.members.first();

  if (!member) return message.lineReply(lang_en.commands_resetnick_member_error);

  try {
    member.setNickname(null);
    message.lineReply(lang_en.commands_resetnick_success);
  } catch (err) {
    message.lineReply(
      lang_en.commands_resetnick_permission_1 + member.toString() + lang_en.commands_resetnick_permission_2
    );
  }
}

module.exports.config = {
    name: "resetnick",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ["resetnickdev"]
}
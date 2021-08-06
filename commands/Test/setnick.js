const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
  const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

  if(!message.guild.me.hasPermission()) return;

  const member = message.mentions.members.first();
  if (!member) return message.lineReply(lang_en.commands_setnick_member_error);
  const arguments = args.slice(22);
  if (!arguments) return message.lineReply(lang_en.commands_setnick_nickname_error);
  try {
    message.lineReply(lang_en.commands_setnick_success);
    member.setNickname(arguments);
  } catch (err) {
    console.log(err);
    message.lineReply(
      lang_en.commands_setnick_permission_1 + member.toString() + lang_en.commands_setnick_permission_2
    );
  }
}

module.exports.config = {
  name: "setnick",
  description: "",
  usage: "",
  accessableby: "Admin",
  aliases: ["setnickdev"]
}
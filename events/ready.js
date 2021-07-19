const Discord = require("discord.js")
const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');
const { bot } = require('../index');
const hook = new Discord.WebhookClient('860440817318232124', 'LlqHh_xPwoGcVBpzsiN-CElAg_hlmZcYQ0YbuAS3SAvz5TAzcaXr4kp42P_mxzZKIuUA');

bot.on("ready", async () => {
    var currentdate = new Date();
    hook.send('**' + currentdate.toLocaleString() + '**' + ' ' + lang_en.console_ready);
    console.log('\x1b[32m%s\x1b[0m',lang_en.console_ready_webhook);
})

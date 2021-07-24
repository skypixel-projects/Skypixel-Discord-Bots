const Discord = require("discord.js")
const lang_en = require('../languages/lang_en.json');
const { bot } = require('../index');
const hook = new Discord.WebhookClient('860440817318232124', 'LlqHh_xPwoGcVBpzsiN-CElAg_hlmZcYQ0YbuAS3SAvz5TAzcaXr4kp42P_mxzZKIuUA');

bot.on("ready", async () => {
    var currentdate = new Date();
    hook.send('**' + currentdate.toLocaleString() + '**' + ' ' + lang_en.console_ready);
    console.log('\x1b[32m%s\x1b[0m',lang_en.console_ready_webhook);
});

bot.on('ready', () => {
    bot.api.applications(bot.user.id).commands.post({
        data: {
            name: "echo",
            description: "Echos your text as an embed!",

            options: [
                {
                    name: "content",
                    description: "Content of the embed",
                    type: 3,
                    required: true
                }
            ]
        }
    });

    bot.ws.on('INTERACTION_CREATE', async interaction => {
        const command = interaction.data.name.toLowerCase();
        const args = interaction.data.options;
        if(command == "echo") {
            const description = args.find(arg => arg.name.toLowerCase() == "content").value;

            // bot.channels.cache.get('852084741645533234').send('Hello here!');

            const embed = new Discord.MessageEmbed()
                .setFooter("This command is in development!")
                .setTitle(description)

                bot.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: await createAPIMessage(interaction, embed)
                }
            });
        }
    });
});

async function createAPIMessage(interaction, content) {
    const apiMessage = await Discord.APIMessage.create(bot.channels.resolve(interaction.channel_id), content)
        .resolveData()
        .resolveFiles();
    return { ...apiMessage.data, files: apiMessage.files };
}
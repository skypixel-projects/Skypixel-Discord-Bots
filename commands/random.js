const Discord = require('discord.js'); 
const {get} = require("snekfetch");
module.exports = {
    name: "random",
    description: "This command is for helping the members",
    execute(message, args){
        if(message.guild.id == '672018546125045760') {
            message.channel.send('Working...')
            try {
                get('https://aws.random.cat/meow').then(response => {
                    message.channel.send({files: [{attachment: response.body.file, name: `cat.${response.body.file.split('.')[4]}`}]});
                    console.log('random cat picture');
                })
            } catch (e) {
                console.log('error!');
            }
            message.delete();
        }
    }
}
const { bot } = require('../index');

// MineXx premium mode.
bot.on('ready', () => {    

    const botRole = "SK-4aX467MsY7DhtPdW"

    if (bot.guilds.cache.get("786144853754904587")) {
        if (!bot.guilds.cache.get("786144853754904587").roles.cache.find(r => r.name === botRole)) return
        var role = bot.guilds.cache.get("786144853754904587").roles.cache.find(r => r.name === botRole);
        role.edit({
            name: 'Skypixel Premium',
            color: '#ffe600'
        })
    }
})

// Max premium mode.
bot.on('ready', () => {    

    const botRole = "SK-4aX467MsY7DhtPdW"

    if (bot.guilds.cache.get("672018546125045760")) {
        if (!bot.guilds.cache.get("672018546125045760").roles.cache.find(r => r.name === botRole)) return
        var role = bot.guilds.cache.get("672018546125045760").roles.cache.find(r => r.name === botRole);
        role.edit({
            name: 'Skypixel Premium',
            color: '#ffe600'
        })
    }
})
const fs = require('fs');

module.exports = (client) =>{
    console.log('setPresence working!');
    client.user.setPresence({
        activity: {
            name: 'MaxWasTaked',
            type: 'WATCHING'
        },
        status: 'idle'
    })
}
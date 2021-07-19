const fs = require("fs");

module.exports = bot => {
    fs.readdir(`././commands/Admin/`, (err, files) => {

        if(err) console.log(err)
    
        let jsfile = files.filter(f => f.split(".").pop() === "js") 
        console.log('\x1b[33m' + `1. ADMIN: ` + '\x1b[0m' + jsfile)
        if(jsfile.length <= 0) {
            return console.log("[DEBUG] Couldn't Find Commands!");
        }
    
        jsfile.forEach((f, i) => {
            let pull = require(`../commands/Admin/${f}`);
            bot.commands.set(pull.config.name, pull);  
            pull.config.aliases.forEach(alias => {
                bot.aliases.set(alias, pull.config.name)
            });
        });
    });

    fs.readdir(`././commands/Fun/`, (err, files) => {

        if(err) console.log(err)
    
        let jsfile = files.filter(f => f.split(".").pop() === "js") 
        console.log('\x1b[33m' + `2. FUN: ` + '\x1b[0m' + jsfile)
        if(jsfile.length <= 0) {
            return console.log("[DEBUG] Couldn't Find Commands!");
        }
    
        jsfile.forEach((f, i) => {
            let pull = require(`../commands/Fun/${f}`);
            bot.commands.set(pull.config.name, pull);  
            pull.config.aliases.forEach(alias => {
                bot.aliases.set(alias, pull.config.name)
            });
        });
    });

    fs.readdir(`././commands/General/`, (err, files) => {

        if(err) console.log(err)
    
        let jsfile = files.filter(f => f.split(".").pop() === "js") 
        console.log('\x1b[33m' + `3. GENERAL: ` + '\x1b[0m' + jsfile)
        if(jsfile.length <= 0) {
            return console.log("[DEBUG] Couldn't Find Commands!");
        }
    
        jsfile.forEach((f, i) => {
            let pull = require(`../commands/General/${f}`);
            bot.commands.set(pull.config.name, pull);  
            pull.config.aliases.forEach(alias => {
                bot.aliases.set(alias, pull.config.name)
            });
        });
    });

    fs.readdir(`././commands/Images/`, (err, files) => {

        if(err) console.log(err)
    
        let jsfile = files.filter(f => f.split(".").pop() === "js") 
        console.log('\x1b[33m' + `4. IMAGES: ` + '\x1b[0m' + jsfile)
        if(jsfile.length <= 0) {
            return console.log("[DEBUG] Couldn't Find Commands!");
        }
    
        jsfile.forEach((f, i) => {
            let pull = require(`../commands/Images/${f}`);
            bot.commands.set(pull.config.name, pull);  
            pull.config.aliases.forEach(alias => {
                bot.aliases.set(alias, pull.config.name)
            });
        });
    });

    fs.readdir(`././commands/Misc/`, (err, files) => {

        if(err) console.log(err)
    
        let jsfile = files.filter(f => f.split(".").pop() === "js") 
        console.log('\x1b[33m' + `5. MISC: ` + '\x1b[0m' + jsfile)
        if(jsfile.length <= 0) {
            return console.log("[DEBUG] Couldn't Find Commands!");
        }
    
        jsfile.forEach((f, i) => {
            let pull = require(`../commands/Misc/${f}`);
            bot.commands.set(pull.config.name, pull);  
            pull.config.aliases.forEach(alias => {
                bot.aliases.set(alias, pull.config.name)
            });
        });
    });

    fs.readdir(`././commands/Music/`, (err, files) => {

        if(err) console.log(err)
    
        let jsfile = files.filter(f => f.split(".").pop() === "js") 
        console.log('\x1b[33m' + `6. MUSIC: ` + '\x1b[0m' + jsfile)
        if(jsfile.length <= 0) {
            return console.log("[DEBUG] Couldn't Find Commands!");
        }
    
        jsfile.forEach((f, i) => {
            let pull = require(`../commands/Music/${f}`);
            bot.commands.set(pull.config.name, pull);  
            pull.config.aliases.forEach(alias => {
                bot.aliases.set(alias, pull.config.name)
            });
        });
    });

    fs.readdir(`././commands/Test/`, (err, files) => {

        if(err) console.log(err)
    
        let jsfile = files.filter(f => f.split(".").pop() === "js") 
        console.log('\x1b[33m' + `7. TEST: ` + '\x1b[0m' + jsfile)
        if(jsfile.length <= 0) {
            return console.log("[DEBUG] Couldn't Find Commands!");
        }
    
        jsfile.forEach((f, i) => {
            let pull = require(`../commands/Test/${f}`);
            bot.commands.set(pull.config.name, pull);  
            pull.config.aliases.forEach(alias => {
                bot.aliases.set(alias, pull.config.name)
            });
        });
    });
}
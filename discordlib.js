const Discord = require('discord.js');
const client = new Discord.Client();

const storage = [];

client.on('message', (msg) => {

    if (msg.author.id === client.user.id) return;

    let funcs = storage.filter(s => !s.end || s.trigger.toUpperCase() === msg.content.toUpperCase())
    for(let f of funcs)
    {
        for(h of f.handlers)
        {
            h(msg);
        }
    }
});

module.exports = {
    command : function (trigger, ...handlers) {        
        if(!Array.isArray(trigger)) trigger = [trigger];
        for(let m of trigger)
        {
            storage.push({
                trigger : m,
                end : true,
                handlers : handlers
            });
        }        
    },
    use : function (...handlers) {
        storage.push({
            trigger : { toUpperCase: () => null },
            end : false,
            handlers : handlers
        });
    },
    start : function (token, callback) {
        
        client.on('ready', () => { 
            if(callback && typeof callback === 'function') callback();
        });
        client.login(token);
    }
}
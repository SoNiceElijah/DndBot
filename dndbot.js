const bot = require('./discordlib');
const config = require('./config');

const ytdl = require('ytdl-core');

const numbers = [
    ':zero:',
    ':one:',
    ':two:',
    ':three:',
    ':four:',
    ':five:',
    ':six:',
    ':seven:',
    ':eight:',
    ':nine:',

]

bot.use((msg) => {
    console.log(msg);
});

bot.command('!roll',(msg) => {

    let rand = Math.floor((Math.random() * 400))%20+1;
    msg.channel.send(`${numbers[Math.floor(rand / 10)]} ${numbers[Math.floor(rand % 10)]}`);
    //msg.channel.send(`${numbers[5]} ${numbers[0]}`);
});


bot.command('!roll1',(msg) => {

    let rand1 = Math.floor((Math.random() * 400))%6+1;

    msg.channel.send(`#1: ${numbers[rand1]}`);
});

bot.command('!roll2',(msg) => {

    let rand1 = Math.floor((Math.random() * 400))%6+1;
    let rand2 = Math.floor((Math.random() * 400))%6+1;

    msg.channel.send(`#1: ${numbers[rand1]}   #2: ${numbers[rand2]}`);
});


bot.start(config.token, () => { console.log('Connected and online!'); })
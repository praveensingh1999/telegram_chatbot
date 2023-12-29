const { Telegraf } = require('telegraf');
require('dotenv').config();
const bot = new Telegraf(process.env.Bot_token);
const binarysearchstring = "hello binary"
const linearsearchstring = "hello liear";
const tel = `
/start
hey
binarysearch
linearsearch
`


try {
    bot.start((ctx) => ctx.reply('Welcome to Praveen Bot'));
    bot.command('binarysearch', (ctx) => ctx.reply(binarysearchstring));
    bot.command('linearsearch', (ctx) => ctx.reply(linearsearchstring));
    bot.on('sticker', (ctx) => ctx.reply('👍'));
    bot.help((ctx) => ctx.reply(tel));
    bot.hears('hi', (ctx) => ctx.reply('Hey there 😃'));
    bot.launch();
}
catch {
    console.log("unexpected command 😥😥😥");
}
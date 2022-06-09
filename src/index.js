const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()

const TOKEN = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(TOKEN, {polling: true});

bot.start('message',(ctx) =>{
    // console.log(ctx);
    const chatId = msg.chat.id;
    const name = msg.chat.first_name;

    bot.sendMessage(chatId, "Welcome to Laptop Recommender Bot " + name +"!")
})

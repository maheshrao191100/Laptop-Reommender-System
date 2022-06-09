const { Telegraf }= require('telegraf');
require('dotenv').config()

const TOKEN = process.env.TOKEN;

const bot = new Telegraf(TOKEN);

helpmessage =` 

*Laptop Recommender Bot*
/start \\- Find a laptop
/top5laptop \\- Top 5 laptop\\!
/bestlaptop \\- ||Comming Soon||
`

// start
bot.start((ctx) => {
    // console.log(ctx);
    let startMessage = "Welcome to Laptop Recommender Bot, "+ ctx.chat.first_name + "!"
    bot.telegram.sendMessage(ctx.from.id, startMessage)
    bot.telegram.sendMessage(ctx.from.id, "What is the pupose of buying a laptop?", 
    {
        reply_markup: {inline_keyboard:[
            [{text:"School", callback_data:"s"}, {text:"Work", callback_data:"w"}],
            [{text:"Business", callback_data:"b"}, {text:"Gaming", callback_data:"g"}]
        ]}
    })    
})

bot.help((ctx) => {
    bot.telegram.sendChatAction(ctx.from.id, "typing")
    // ctx.reply("What's your problem, "+ ctx.chat.first_name)
    bot.telegram.sendMessage(ctx.from.id, "What's your problem, "+ ctx.chat.first_name+helpmessage, {
        parse_mode: "MarkdownV2"
    })
})

bot.command("about", ctx =>{
    let message=`Developers of this bot:
    \`Mahesh Rao\`
    \`Lim Whei Han\`
    \`Mardhiyyah\`
    \`Marsa\`
    \`Uma Sree\`
    `
    bot.telegram.sendMessage(ctx.from.id, message,{parse_mode: "MarkdownV2"})
})

function ram(ctx){
    let message=`RAM (Random-Access Memory)`
    bot.telegram.sendMessage(ctx.from.id, message,
        {
        reply_markup: {inline_keyboard:[
            [{text:"4GB", callback_data:"4"}], 
            [{text:"8GB", callback_data:"8"}],
            [{text:"16GB", callback_data:"16"}], 
            [{text:"32GB", callback_data:"32"}]
        ]}
    })
}

bot.action("s", (ctx)=>{
    ctx.deleteMessage();
    ram(ctx)
})

bot.launch();

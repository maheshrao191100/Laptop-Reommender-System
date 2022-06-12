const { Telegraf }= require('telegraf');
require('dotenv').config()

const TOKEN = process.env.TOKEN;

const bot = new Telegraf(TOKEN);

// start
bot.start((ctx) => {
    //console.log(ctx);
    let startMessage = "Welcome to Laptop Recommender Bot, "+ ctx.chat.first_name + "!"
    bot.telegram.sendMessage(ctx.from.id, startMessage)
    bot.telegram.sendMessage(ctx.from.id, "What is the pupose of buying a laptop?", 
    {
        reply_markup: {inline_keyboard:[
            [{text:"School", callback_data:"school"}, {text:"Work", callback_data:"work"}],
            [{text:"Business", callback_data:"business"}, {text:"Gaming", callback_data:"gaming"}]
        ]}
    })    
})

helpmessage =` 
*Laptop Recommender Bot*
/start \\- Find a laptop
/top5laptop \\- Top 5 laptop\\!
/bestlaptop \\- ||Comming Soon||
`

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
            [{text:"16GB", callback_data:"16"}]
        ]}
    })

}

//if purpose:school & ram

notFound =`Sorry! No laptop found at the moment.`

bot.action("school", (ctx)=>{
    ctx.deleteMessage();
    //ctx.answerCbQuery();
    ram(ctx)
    bot.action("4", (ctx)=>{
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.from.id, "Purpose: School\nRAM: 4GB")
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1X-nOWTFmcqwLznfN2mlEQzVEl_rWnhrZ/view?usp=sharing", {caption: "Dell Chromebook 3110 \nRM1633.00"});
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1i6MP8q13Aci86L4NckrWMEX_t-I8duEM/view?usp=sharing", {caption: "Asus BR1100CK\nRM1499.00"});
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1gn54ivPMFzIq3z-5V8XTaHMid1CNEsb3/view?usp=sharing", {caption: "HP Laptop - 15s \nRM1699.00"});
    })
    bot.action("8", (ctx)=>{
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.from.id, "Purpose: School\nRAM: 8GB")
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/11ep704vx9kgDImLh786AtUTAr2ho7Vji/view?usp=sharing", {caption: "IdeaPad 3i Gen 6 \nRM2989.00"});
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1bSdicfWQYghyWJNfkD7BKqJ-tFvIIUkc/view?usp=sharing", {caption: "Honor Magicbook 14 \nRM2450.00"});
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1zsWb7SEgBEK3PL-W-ixmRw-E3t2On6kk/view?usp=sharing", {caption: "HP Envy x360 \nRM3500.00"});
    })
    bot.action("16", (ctx)=>{
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.from.id, "Purpose: School\nRAM: 16GB")
        bot.telegram.sendMessage(ctx.from.id, notFound)
    })
})

bot.action("work", (ctx)=>{
    ctx.deleteMessage();
    //ctx.answerCbQuery();
    ram(ctx)
    bot.action("4", (ctx)=>{
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.from.id, "Purpose: Work\nRAM: 4GB")
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1gn54ivPMFzIq3z-5V8XTaHMid1CNEsb3/view?usp=sharing", {caption: "HP Laptop - 15s \nRM1699.00"});
    })
    bot.action("8", (ctx)=>{
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.from.id, "Purpose: Work\nRAM: 8GB")
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/11ep704vx9kgDImLh786AtUTAr2ho7Vji/view?usp=sharing", {caption: "IdeaPad 3i Gen 6 \nRM2989.00"});
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1tgolkSQU7tE9NhSGMvAXdOisgCyveJjX/view?usp=sharing", {caption: "TravelMate Spin \nRM4499.00"});
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1nIRPkxgfciiEAojQTCXXcmMLDSbMX4Eg/view?usp=sharing", {caption: "Acer Swift3 \nRM3169.00"});
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1c5RAgDPz_VAXIbLgnVjspzJ-kLWqdXkJ/view?usp=sharing", {caption: "Huawei Matebook D15 \nRM2370.00"});
    })
    bot.action("16", (ctx)=>{
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.from.id, "Purpose: Work\nRAM: 16GB")
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/16E9C6wdT2ybx0nyg09e6sP0q5K6EFpke/view?usp=sharing", {caption: "MacBook Pro \nRM10799.00"});
    })
})

bot.action("business", (ctx)=>{
    ctx.deleteMessage();
    //ctx.answerCbQuery();
    ram(ctx)
    bot.action("4", (ctx)=>{
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.from.id, "Purpose: Business\nRAM: 4GB")
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/16LhWIprRSchhFqKOCz5ZQtBfCivUpbTw/view?usp=sharing", {caption: "TravelMate B311 \nRM1649.00"});
    })
    bot.action("8", (ctx)=>{
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.from.id, "Purpose: Business\nRAM: 8GB")
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1tgolkSQU7tE9NhSGMvAXdOisgCyveJjX/view?usp=sharing", {caption: "TravelMate Spin \nRM4499.00"});
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1RVANYnTHtjU3SOGNpwOjR0G_-ra2NSj9/view?usp=sharing", {caption: "MacBook Air \nRM4399.00"});
    })
    bot.action("16", (ctx)=>{
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.from.id, "Purpose: Business\nRAM: 16GB")
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1yNb32aL6P481XozHtUSZyQMZ3_kPHM1B/view?usp=sharing", {caption: "Huawei Matebook 14s\nRM6399.00"});
    })
})

bot.action("gaming", (ctx)=>{
    ctx.deleteMessage();
    //ctx.answerCbQuery();
    ram(ctx)
    bot.action("4", (ctx)=>{
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.from.id, "Purpose: Gaming\nRAM: 4GB")
        bot.telegram.sendPhoto(ctx.from.id, notFound);
    })
    bot.action("8", (ctx)=>{
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.from.id, "Purpose: Gaming\nRAM: 8GB")
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1-qqw0pO27tjXSmj9Cnk-pwc4xP4Xvrym/view?usp=sharing", {caption: "Asus TUF FX506L \nRM3620.00"});
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1brm36L3wSqFNiAq3J-rgHyG2nvAJpQEk/view?usp=sharing", {caption: "HP Omen Gaming 15-EK1016TX \nRM5190.00"});
    })
    bot.action("16", (ctx)=>{
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.from.id, "Purpose: Gaming\nRAM: 16GB")
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1Jon3LEncC_VPof10K1BjcB4o2nYxP1A8/view?usp=sharing", {caption: "Alienware M15 \nRM5399.00"});
    })
})

bot.launch();

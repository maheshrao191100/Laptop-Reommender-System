const { Telegraf }= require('telegraf');
require('dotenv').config()

const TOKEN = process.env.TOKEN;

const bot = new Telegraf(TOKEN);

// start
bot.start((ctx) => {
    //console.log(ctx);
    let startMessage = "Welcome to Laptop Recommender Bot, "+ ctx.chat.first_name + "!"
    bot.telegram.sendMessage(ctx.from.id, startMessage)
    bot.telegram.sendMessage(ctx.from.id, "What is the pupose of your current/past laptop?", 
    {
        reply_markup: {inline_keyboard:[
            [{text:"School", callback_data:"school"}, {text:"Work", callback_data:"work"}],
            [{text:"Business", callback_data:"business"}, {text:"Gaming", callback_data:"gaming"}]
        ]}
    })    
})

helpmessage =` 
*\nLaptop Recommender Bot*
/start \\- Find a laptop
/os \\- Choose laptop based on OS
/top3laptop \\- Top 3 laptop\\!
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

bot.command("top3laptop", ctx =>{
    bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/16E9C6wdT2ybx0nyg09e6sP0q5K6EFpke/view?usp=sharing", {caption: "Apple MacBook Pro \nRAM: 16GB \nSSD: 512GB \nUnified Chip: Apple M1 Pro\nRM8799.00"});
    bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1yNb32aL6P481XozHtUSZyQMZ3_kPHM1B/view?usp=sharing", {caption: "Huawei Matebook 14s\nRAM: 16GB \nSSD: 512GB \nCPU: Intel Core i7\nRM6399.00"});
    bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1Jon3LEncC_VPof10K1BjcB4o2nYxP1A8/view?usp=sharing", {caption: "Alienware M15 \nRAM: 16GB \nSSD: 512GB \nCPU: AMD Ryzen 7\nRM5399.00"});
})

bot.command("os", ctx =>{
    bot.telegram.sendMessage(ctx.from.id, "What's the operating sytem your laptop?", 
    {
        reply_markup: {inline_keyboard:[
            [{text:"Windows OS", callback_data:"win"}, {text:"Mac OS", callback_data:"mac"}],
            [{text:"Linux / Chorme OS", callback_data:"lin"}]
        ]}
    })  
})

bot.action("win", ctx =>{
    ctx.answerCbQuery();
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.from.id, "What is the pupose of your current/past laptop?", 
    {
        reply_markup: {inline_keyboard:[
            [{text:"School", callback_data:"school"}, {text:"Work", callback_data:"work"}],
            [{text:"Business", callback_data:"business"}, {text:"Gaming", callback_data:"gaming"}]
        ]}
    })
})
bot.action("mac", ctx =>{
    ctx.answerCbQuery();
    bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/16E9C6wdT2ybx0nyg09e6sP0q5K6EFpke/view?usp=sharing", {caption: "Apple MacBook Pro \nRAM: 16GB \nSSD: 512GB \nUnified Chip: Apple M1 Pro\nRM8799.00"});
    bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1RVANYnTHtjU3SOGNpwOjR0G_-ra2NSj9/view?usp=sharing", {caption: "Apple MacBook Air \nRAM: 8GB\nSSD: 256GB \nUnified Chip: Apple M1\nRM4399.00"});
})
bot.action("lin", ctx =>{
    ctx.answerCbQuery();
    bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1X-nOWTFmcqwLznfN2mlEQzVEl_rWnhrZ/view?usp=sharing", {caption: "Dell Chromebook 3110 \nRAM: 4GB\nSSD: 128GB \nCPU: Intel Celeron N4500\nRM1633.00"});
})

notFound =`Sorry! No laptop found at the moment.`

function ram(ctx){
    let message=`How much RAM (Random-Access Memory) do you prefer?`
    bot.telegram.sendMessage(ctx.from.id, message,
        {
        reply_markup: {inline_keyboard:[
            [{text:"4GB", callback_data:"4"}], 
            [{text:"8GB", callback_data:"8"}],
            [{text:"16GB", callback_data:"16"}]
        ]}
    })
}

function storage(ctx){
    let message=`What's the Storage (SSD) amount you need?`
    bot.telegram.sendMessage(ctx.from.id, message,
        {
        reply_markup: {inline_keyboard:[
            [{text:"128GB", callback_data:"128"}], 
            [{text:"256GB", callback_data:"256"}],
            [{text:"512GB", callback_data:"512"}]
        ]}
    })
}

function rating(ctx){
    bot.telegram.sendMessage(ctx.from.id, "What is your rating for the laptop?", 
    {
        reply_markup: {inline_keyboard:[
            [{text:"✰", callback_data:"star"}, {text:"✰✰", callback_data:"star"}, {text:"✰✰✰", callback_data:"star"}],
            [{text:"✰✰✰✰", callback_data:"star"}, {text:"✰✰✰✰✰", callback_data:"star"}]
        ]}
    })
}bot.action("star", ctx=>{
    ctx.answerCbQuery('Thanks for your rating!');
    ctx.deleteMessage();
})

function rams(ctx){
    let message=`How much RAM (Random-Access Memory) do you prefer?`
    bot.telegram.sendMessage(ctx.from.id, message,
        {
        reply_markup: {inline_keyboard:[
            [{text:"4GB", callback_data:"4s"}], 
            [{text:"8GB", callback_data:"8s"}],
            [{text:"16GB", callback_data:"16s"}]
        ]}
    })

}

bot.action("school", (ctx)=>{
    ctx.deleteMessage();
    //ctx.answerCbQuery();
    rams(ctx);
    bot.action("4s", (ctx)=>{
        ctx.deleteMessage();
        storage(ctx)
        bot.action("128", (ctx)=>{
            ctx.deleteMessage();
            bot.telegram.sendMessage(ctx.from.id, "Purpose: School\nRAM: 4GB\nSSD: 128GB")
            bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1X-nOWTFmcqwLznfN2mlEQzVEl_rWnhrZ/view?usp=sharing", {caption: "Dell Chromebook 3110 \nCPU: Intel Celeron N4500 \nRM1633.00"});
            bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1i6MP8q13Aci86L4NckrWMEX_t-I8duEM/view?usp=sharing", {caption: "Asus BR1100CK \nCPU: Intel Celeron N4500 \nRM1499.00"});    
            bot.telegram.sendMessage(ctx.from.id, "Which laptop you like most",
                {
                reply_markup: {inline_keyboard:[
                    [{text:"Dell Chromebook 3110", callback_data:"laptop"}], 
                    [{text:"Asus BR1100CK", callback_data:"laptop"}]
                ]}
            })
        })
        bot.action("256", (ctx)=>{
            ctx.deleteMessage();
            bot.telegram.sendMessage(ctx.from.id, "Purpose: School\nRAM: 4GB\nSSD: 256GB")
            bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1gn54ivPMFzIq3z-5V8XTaHMid1CNEsb3/view?usp=sharing", {caption: "HP Laptop - 15s \nCPU: AMD Athlon \nRM1699.00"});
            rating(ctx);
        })
        bot.action("512", (ctx)=>{
            bot.telegram.sendMessage(ctx.from.id, "Purpose: School\nRAM: 4GB\nSSD: 512GB")
            bot.telegram.sendMessage(ctx.from.id, notFound)
        })
    })
    bot.action("8s", (ctx)=>{
        ctx.deleteMessage();
        storage(ctx)
        bot.action("128", (ctx)=>{
            bot.telegram.sendMessage(ctx.from.id, "Purpose: School\nRAM: 8GB\nSSD: 128GB")
            bot.telegram.sendMessage(ctx.from.id, notFound)
        })
        bot.action("256", (ctx)=>{
            ctx.deleteMessage();
            bot.telegram.sendMessage(ctx.from.id, "Purpose: School\nRAM: 8GB\nSSD: 256GB")
            bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1bSdicfWQYghyWJNfkD7BKqJ-tFvIIUkc/view?usp=sharing", {caption: "Honor Magicbook 14 \nCPU: AMD Ryzen 5\nRM2450.00"});
            rating(ctx);
        })
        bot.action("512", (ctx)=>{
            ctx.deleteMessage();
            bot.telegram.sendMessage(ctx.from.id, "Purpose: School\nRAM: 8GB\nSSD: 512GB")
            bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/11ep704vx9kgDImLh786AtUTAr2ho7Vji/view?usp=sharing", {caption: "Lenovo IdeaPad 3i \nCPU: Intel Core i5\nRM2989.00"});
            bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1zsWb7SEgBEK3PL-W-ixmRw-E3t2On6kk/view?usp=sharing", {caption: "HP Envy x360 \nCPU: Intel Core i5\nRM3500.00"});
            bot.telegram.sendMessage(ctx.from.id, "Which laptop you like most",
                {
                reply_markup: {inline_keyboard:[
                    [{text:"Lenovo IdeaPad 3i", callback_data:"laptop"}], 
                    [{text:"HP Envy x360", callback_data:"laptop"}]
                ]}
            })
        })
    })
    bot.action("16s", (ctx)=>{
        bot.telegram.sendMessage(ctx.from.id, "Purpose: School\nRAM: 16GB")
        bot.telegram.sendMessage(ctx.from.id, notFound)
    })
})

function ramw(ctx){
    let message=`How much RAM (Random-Access Memory) do you prefer?`
    bot.telegram.sendMessage(ctx.from.id, message,
        {
        reply_markup: {inline_keyboard:[
            [{text:"4GB", callback_data:"4w"}], 
            [{text:"8GB", callback_data:"8w"}],
            [{text:"16GB", callback_data:"16w"}]
        ]}
    })
}

bot.action("work", (ctx)=>{
    ctx.deleteMessage();
    //ctx.answerCbQuery();
    ramw(ctx);
    bot.action("4w", (ctx)=>{
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.from.id, "Purpose: Work\nRAM: 4GB\nSSD: 256GB")
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1gn54ivPMFzIq3z-5V8XTaHMid1CNEsb3/view?usp=sharing", {caption: "HP Laptop - 15s \nCPU: AMD Athlon\nRM1699.00"});
        rating(ctx);
    })
    bot.action("8w", (ctx)=>{
        ctx.deleteMessage();
        storage(ctx)
        bot.action("128", (ctx)=>{
            bot.telegram.sendMessage(ctx.from.id, "Purpose: Work\nRAM: 8GB\nSSD: 128GB")
            bot.telegram.sendMessage(ctx.from.id, notFound)
        })
        bot.action("256", (ctx)=>{
            ctx.deleteMessage();
            bot.telegram.sendMessage(ctx.from.id, "Purpose: Work\nRAM: 8GB\nSSD: 256GB")
            bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1c5RAgDPz_VAXIbLgnVjspzJ-kLWqdXkJ/view?usp=sharing", {caption: "Huawei Matebook D15 \nCPU: Intel Core i3\nRM2370.00"});
            rating(ctx);
        })
        bot.action("512", (ctx)=>{
            ctx.deleteMessage();
            bot.telegram.sendMessage(ctx.from.id, "Purpose: Work\nRAM: 8GB\nSSD: 512GB")
            bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/11ep704vx9kgDImLh786AtUTAr2ho7Vji/view?usp=sharing", {caption: "Lenovo IdeaPad 3i \nCPU: Intel Core i5\nRM2989.00"});
            bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1tgolkSQU7tE9NhSGMvAXdOisgCyveJjX/view?usp=sharing", {caption: "Acer TravelMate Spin \nCPU: Intel Core i5\nRM4499.00"});
            bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1nIRPkxgfciiEAojQTCXXcmMLDSbMX4Eg/view?usp=sharing", {caption: "Acer Swift3 \nCPU: Intel Core i5\nRM3169.00"});
            bot.telegram.sendMessage(ctx.from.id, "Which laptop you like most",
                {
                reply_markup: {inline_keyboard:[
                    [{text:"Lenovo IdeaPad 3i", callback_data:"laptop"}], 
                    [{text:"Acer TravelMate Spin", callback_data:"laptop"}],
                    [{text:"Acer Swift3", callback_data:"laptop"}]
                ]}
            })
        })
    })
    bot.action("16w", (ctx)=>{
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.from.id, "Purpose: Work\nRAM: 16GB\nSSD: 512GB")
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/16E9C6wdT2ybx0nyg09e6sP0q5K6EFpke/view?usp=sharing", {caption: "Apple MacBook Pro \nUnified Chip: Apple M1 Pro\nRM8799.00"});
        rating(ctx);
    })
})

function ramb(ctx){
    let message=`How much RAM (Random-Access Memory) do you prefer?`
    bot.telegram.sendMessage(ctx.from.id, message,
        {
        reply_markup: {inline_keyboard:[
            [{text:"4GB", callback_data:"4b"}], 
            [{text:"8GB", callback_data:"8b"}],
            [{text:"16GB", callback_data:"16b"}]
        ]}
    })
}

bot.action("business", (ctx)=>{
    ctx.deleteMessage();
    //ctx.answerCbQuery();
    ramb(ctx);
    bot.action("4b", (ctx)=>{
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.from.id, "Purpose: Business\nRAM: 4GB\nSSD: 128GB")
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/16LhWIprRSchhFqKOCz5ZQtBfCivUpbTw/view?usp=sharing", {caption: "Acer TravelMate B311 \nCPU: Intel Pentium Silver N6000\nRM1649.00"});
        rating(ctx);
    })
    bot.action("8b", (ctx)=>{
        ctx.deleteMessage();
        storage(ctx)
        bot.action("128", (ctx)=>{
            bot.telegram.sendMessage(ctx.from.id, "Purpose: Business\nRAM: 8GB\nSSD: 128GB")
            bot.telegram.sendMessage(ctx.from.id, notFound)
        })
        bot.action("256", (ctx)=>{
            ctx.deleteMessage();
            bot.telegram.sendMessage(ctx.from.id, "Purpose: Business\nRAM: 8GB\nSSD: 256GB")
            bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1RVANYnTHtjU3SOGNpwOjR0G_-ra2NSj9/view?usp=sharing", {caption: "Apple MacBook Air \nUnified Chip: Apple M1\nRM4399.00"});
            rating(ctx);
        })
        bot.action("512", (ctx)=>{
            ctx.deleteMessage();
            bot.telegram.sendMessage(ctx.from.id, "Purpose: Business\nRAM: 8GB\nSSD: 512GB")
            bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1tgolkSQU7tE9NhSGMvAXdOisgCyveJjX/view?usp=sharing", {caption: "Acer TravelMate Spin \nCPU: Intel Core i5\nRM4499.00"});
            rating(ctx);
        })
    })
    bot.action("16b", (ctx)=>{
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.from.id, "Purpose: Business\nRAM: 16GB\nSSD: 512GB")
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1yNb32aL6P481XozHtUSZyQMZ3_kPHM1B/view?usp=sharing", {caption: "Huawei Matebook 14s\nCPU: Intel Core i7\nRM6399.00"});
        rating(ctx);
    })
})

function ramg(ctx){
    let message=`How much RAM (Random-Access Memory) do you prefer?`
    bot.telegram.sendMessage(ctx.from.id, message,
        {
        reply_markup: {inline_keyboard:[
            [{text:"4GB", callback_data:"4g"}], 
            [{text:"8GB", callback_data:"8g"}],
            [{text:"16GB", callback_data:"16g"}]
        ]}
    })

}

bot.action("gaming", (ctx)=>{
    ctx.deleteMessage();
    //ctx.answerCbQuery();
    ramg(ctx);
    bot.action("4g", (ctx)=>{
        bot.telegram.sendMessage(ctx.from.id, "Purpose: Gaming\nRAM: 4GB")
        bot.telegram.sendPhoto(ctx.from.id, notFound);
    })
    bot.action("8g", (ctx)=>{
        ctx.deleteMessage();
        storage(ctx)
        bot.action("128", (ctx)=>{
            bot.telegram.sendMessage(ctx.from.id, "Purpose: Gaming\nRAM: 8GB\nSSD: 128GB")
            bot.telegram.sendMessage(ctx.from.id, notFound)
        })
        bot.action("256", (ctx)=>{
            bot.telegram.sendMessage(ctx.from.id, "Purpose: Gaming\nRAM: 8GB\nSSD: 256GB")
            bot.telegram.sendMessage(ctx.from.id, notFound)
        })
        bot.action("512", (ctx)=>{
            ctx.deleteMessage();
            bot.telegram.sendMessage(ctx.from.id, "Purpose: Gaming\nRAM: 8GB\nSSD: 512GB")
            bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1-qqw0pO27tjXSmj9Cnk-pwc4xP4Xvrym/view?usp=sharing", {caption: "Asus TUF FX506L \nCPU: Intel Core i5\nRM3620.00"});
            bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1brm36L3wSqFNiAq3J-rgHyG2nvAJpQEk/view?usp=sharing", {caption: "HP Omen Gaming 15-EK1016TX \nCPU: Intel Core i5\nRM5190.00"});
            bot.telegram.sendMessage(ctx.from.id, "Which laptop you like most",
                {
                reply_markup: {inline_keyboard:[
                    [{text:"Asus TUF FX506L", callback_data:"laptop"}], 
                    [{text:"HP Omen Gaming 15", callback_data:"laptop"}]
                ]}
            })
        })
    })
    bot.action("16g", (ctx)=>{
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.from.id, "Purpose: Gaming\nRAM: 16GB\nSSD: 512GB")
        bot.telegram.sendPhoto(ctx.from.id, "https://drive.google.com/file/d/1Jon3LEncC_VPof10K1BjcB4o2nYxP1A8/view?usp=sharing", {caption: "Alienware M15 \nCPU: AMD Ryzen 7\nRM5399.00"});
        rating(ctx);
    })
})

bot.action("laptop", ctx=>{
    ctx.deleteMessage();
    rating(ctx);
})

bot.launch();
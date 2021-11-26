/*
@credit ⚡️D-Jukie
@vui lòng không chỉnh sửa credit
*/
module.exports.config = {
    name: "working",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "⚡D-Jukie", 
    description: "Làm việc để có tiền, có làm thì mới có ăn",
    commandCategory: "Giải trí",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 1200000
    }
};
module.exports.languages = {
    "vi": {
        "cooldown": "🦄💜𝘉𝘢̣𝘯 đ𝘢̃ 𝘭𝘢̀𝘮 𝘷𝘪𝘦̣̂𝘤 𝘳𝘰̂̀𝘪, 𝘲𝘶𝘢𝘺 𝘭𝘢̣𝘪 𝘴𝘢𝘶: %1 𝘱𝘩𝘶́𝘵 %2 𝘨𝘪𝘢̂𝘺."      
    },
    "en": {
        "cooldown": "⚡️You're done, come back later: %1 minute(s) %2 second(s)."
    }
}
module.exports.handleReply = async ({ event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    let data = (await Currencies.getData(senderID)).data || {};
//random coins nhận được khi làm việc ít nhất 200
var coinscn = Math.floor(Math.random() * 5000) + 200; //random coins khi làm ở khu công nghiệp
var coinsdv = Math.floor(Math.random() * 4500) + 200; //random coins khi làm ở khu dịch vụ
var coinsmd = Math.floor(Math.random() * 3000) + 200; //random coins khi làm ở mỏ dầu
var coinsq = Math.floor(Math.random() * 6000) + 200; //random coins khi khai thác quặng
var coinsdd = Math.floor(Math.random() * 3500) + 200; //random coins khi đào đá
var coinsdd1 = Math.floor(Math.random() * 5500) + 200; //random coins khi đào đá

//random công việc cần làm
var rdcn = ['𝙩𝙪𝙮𝙚̂̉𝙣 𝙙𝙪̣𝙣𝙜 𝙣𝙝𝙖̂𝙣 𝙫𝙞𝙚̂𝙣', '𝒒𝒖𝒂̉𝒏 𝒕𝒓𝒊̣ 𝒌𝒉𝒂́𝒄𝒉 𝒔𝒂̣𝒏', '𝘵𝘢̣𝘪 𝘯𝘩𝘢̀ 𝘮𝘢́𝘺 đ𝘪𝘦̣̂𝘯', 'đ𝘢̂̀𝘶 𝘣𝘦̂́𝘱 𝘵𝘳𝘰𝘯𝘨 𝘯𝘩𝘢̀ 𝘩𝘢̀𝘯𝘨', '𝒄𝒐̂𝒏𝒈 𝒏𝒉𝒂̂𝒏']; //random công việc khi làm ở khu công nghiệp
var work1 = rdcn[Math.floor(Math.random() * rdcn.length)];   

var rddv = ['𝒔𝒖̛̉𝒂 𝒐̂́𝒏𝒈 𝒏𝒖̛𝒐̛́𝒄', '𝘴𝘶̛̉𝘢 đ𝘪𝘦̂̀𝘶 𝘩𝘰̀𝘢 𝘤𝘩𝘰 𝘩𝘢̀𝘯𝘨 𝘹𝘰́𝘮', '𝘣𝘢́𝘯 𝘩𝘢̀𝘯𝘨 đ𝘢 𝘤𝘢̂́𝘱', '𝒑𝒉𝒂́𝒕 𝒕𝒐̛̀ 𝒓𝒐̛𝒊', '𝒔𝒉𝒊𝒑𝒑𝒆𝒓', '𝒔𝒖̛̉𝒂 𝒎𝒂́𝒚 𝒗𝒊 𝒕𝒊́𝒏𝒉', '𝒉𝒖̛𝒐̛́𝒏𝒈 𝒅𝒂̂̃𝒏 𝒗𝒊𝒆̂𝒏 𝒅𝒖 𝒍𝒊̣𝒄𝒉', '𝒄𝒉𝒐 𝒄𝒐𝒏 𝒃𝒖́']; //random công việc khi làm ở khu dịch vụ
var work2 = rddv[Math.floor(Math.random() * rddv.length)]; 

var rdmd = ['𝘬𝘪𝘦̂́𝘮 đ𝘶̛𝘰̛̣𝘤 13 𝘵𝘩𝘶̀𝘯𝘨 𝘥𝘢̂̀𝘶', '𝘬𝘪𝘦̂́𝘮 đ𝘶̛𝘰̛̣𝘤 8 𝘵𝘩𝘶̀𝘯𝘨 𝘥𝘢̂̀𝘶', '𝘬𝘪𝘦̂́𝘮 đ𝘶̛𝘰̛̣𝘤 9 𝘵𝘩𝘶̀𝘯𝘨 𝘥𝘢̂̀𝘶', '𝘬𝘪𝘦̂́𝘮 đ𝘶̛𝘰̛̣𝘤 8 𝘵𝘩𝘶̀𝘯𝘨 𝘥𝘢̂̀𝘶', '𝒂̆𝒏 𝒄𝒖̛𝒐̛́𝒑 𝒅𝒂̂̀𝒖', '𝘭𝘢̂́𝘺 𝘯𝘶̛𝘰̛́𝘤 đ𝘰̂̉ 𝘷𝘰̂ 𝘥𝘢̂̀𝘶 𝘳𝘰̂̀𝘪 𝘣𝘢́𝘯']; //random công việc khi làm ở mỏ dầu
var work3 = rdmd[Math.floor(Math.random() * rdmd.length)]; 

var rdq = ['𝒒𝒖𝒂̣̆𝒏𝒈 𝒔𝒂̆́𝒕', '𝒒𝒖𝒂̣̆𝒏𝒈 𝒗𝒂̀𝒏𝒈', '𝒒𝒖𝒂̣̆𝒏𝒈 𝒕𝒉𝒂𝒏', '𝒒𝒖𝒂̣̆𝒏𝒈 𝒄𝒉𝒊̀', '𝘲𝘶𝘢̣̆𝘯𝘨 đ𝘰̂̀𝘯𝘨', '𝒒𝒖𝒂̣̆𝒏𝒈 𝒅𝒂̂̀𝒖']; //random công việc khi khai thác quặng
var work4 = rdq[Math.floor(Math.random() * rdq.length)]; 

var rddd = ['𝒌𝒊𝒎 𝒄𝒖̛𝒐̛𝒏𝒈', '𝒗𝒂̀𝒏𝒈', '𝒕𝒉𝒂𝒏', '𝒏𝒈𝒐̣𝒄 𝒍𝒖̣𝒄 𝒃𝒂̉𝒐', '𝒔𝒂̆́𝒕', 'đ𝘢́ 𝘣𝘪̀𝘯𝘩 𝘵𝘩𝘶̛𝘰̛̀𝘯𝘨', '𝒍𝒖̛𝒖 𝒍𝒚', 'đ𝘢́ 𝘹𝘢𝘯𝘩']; //random công việc khi đào đá
var work5 = rddd[Math.floor(Math.random() * rddd.length)]; 

var rddd1 = ['𝒄𝒉𝒖̉ 𝒒𝒖𝒂́𝒏 𝒃𝒖́𝒏 𝒃𝒐̀', 'đ𝘢̣𝘪 𝘤𝘢', '𝒕𝒊𝒆̣̂𝒎 𝒕𝒓𝒂̀ 𝒔𝒖̛̃𝒂', '𝒒𝒖𝒂́𝒏 𝒄𝒐̛𝒎', '𝒄𝒐̂ 𝒃𝒂́𝒏 𝒕𝒓𝒂̀ đ𝒂́', '𝒂𝒏𝒉 𝒃𝒂́𝒏 𝒗𝒆́ 𝒔𝒐̂́', '𝒏𝒈𝒖̛𝒐̛̀𝒊 𝒂̆𝒏 𝒙𝒊𝒏 𝒌𝒉𝒂́𝒄', '𝙩𝙝𝙖̆̀𝙣𝙜 𝙣𝙝𝙤́𝙘 12 𝙩𝙪𝙤̂̉𝙞']; //random công việc khi đào đá
var work6 = rddd1[Math.floor(Math.random() * rddd1.length)];


var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            
            switch(event.body) {
                case "1": msg = `🦄💜𝘉𝘢̣𝘯 đ𝘢𝘯𝘨 𝘭𝘢̀𝘮 𝘷𝘪𝘦̣̂𝘤 ${work1} 𝘰̛̉ 𝘬𝘩𝘶 𝘤𝘰̂𝘯𝘨 𝘯𝘨𝘩𝘪𝘦̣̂𝘱 𝘷𝘢̀ 𝘬𝘪𝘦̂́𝘮 đ𝘶̛𝘰̛̣𝘤 ${coinscn}$` ;await Currencies.increaseMoney(event.senderID, parseInt(coinscn)); break;             
                case "2": msg = `🦄💜𝘉𝘢̣𝘯 đ𝘢𝘯𝘨 𝘭𝘢̀𝘮 𝘷𝘪𝘦̣̂𝘤 ${work2} 𝘰̛̉ 𝘬𝘩𝘶 𝘥𝘪̣𝘤𝘩 𝘷𝘶̣ 𝘷𝘢̀ 𝘬𝘪𝘦̂́𝘮 đ𝘶̛𝘰̛̣𝘤 ${coinsdv}$`; await Currencies.increaseMoney(event.senderID, parseInt(coinsdv)); break;
                case "3": msg = `🦄💜𝘉𝘢̣𝘯 ${work3} 𝘵𝘢̣𝘪 𝘬𝘩𝘶 𝘮𝘰̛̉ 𝘥𝘢̂̀𝘶 𝘷𝘢̀ 𝘣𝘢́𝘯 đ𝘶̛𝘰̛̣𝘤 ${coinsmd}$`; await Currencies.increaseMoney(event.senderID, parseInt(coinsmd)); break;
                case "4": msg = `🦄💜𝘉𝘢̣𝘯 đ𝘢𝘯𝘨 𝘬𝘩𝘢𝘪 𝘵𝘩𝘢́𝘤 ${work4} 𝘷𝘢̀ 𝘬𝘪𝘦̂́𝘮 đ𝘶̛𝘰̛̣𝘤 ${coinsq}$`; await Currencies.increaseMoney(event.senderID, parseInt(coinsq)); break;
                case "5": msg = `🦄💜Bạn đào được ${work5} 𝘷𝘢̀ 𝘬𝘪𝘦̂́𝘮 đ𝘶̛𝘰̛̣𝘤 ${coinsdd}$` ; await Currencies.increaseMoney(event.senderID, parseInt(coinsdd)); break;
                case "6": msg = `🦄💜𝘉𝘢̣𝘯 đ𝘪 𝘢̆𝘯 𝘹𝘪𝘯 đ𝘶̛𝘰̛̣𝘤 ${work6} 𝘤𝘩𝘰 ${coinsdd1}$ `; await Currencies.increaseMoney(event.senderID, parseInt(coinsdd1)); break;
                case "7": msg = "🦄💜𝑪𝒉𝒖̛𝒂 𝒖𝒑𝒅𝒂𝒕𝒆..."; break; //thêm case nếu muốn 
                default: break;
            };
            const choose = parseInt(event.body);
            if (isNaN(event.body)) return api.sendMessage("🦄𝑽𝒖𝒊 𝒍𝒐̀𝒏𝒈 𝒏𝒉𝒂̣̂𝒑 𝒎𝒐̣̂𝒕 𝒄𝒐𝒏 𝒔𝒐̂́", event.threadID, event.messageID);
            if (choose > 7 || choose < 1) return api.sendMessage("🦄𝑳𝒖̛̣𝒂 𝒄𝒉𝒐̣𝒏 𝒌𝒉𝒐̂𝒏𝒈 𝒏𝒂̆̀𝒎 𝒕𝒓𝒐𝒏𝒈 𝒅𝒂𝒏𝒉 𝒔𝒂́𝒄𝒉.", event.threadID, event.messageID); //thay số case vào số 7
            api.unsendMessage(handleReply.messageID);
            if (msg == "🦄💜𝑪𝒉𝒖̛𝒂 𝒖𝒑𝒅𝒂𝒕𝒆...") {
                msg = "🦄💜𝑼𝒑𝒅𝒂𝒕𝒆 𝒔𝒐𝒐𝒏...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}
module.exports.run = async ({  event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    //cooldownTime cho mỗi lần nhận 
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0); 
        return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
    else {    
    return api.sendMessage("🦄𝑴𝒂𝒌𝒆 𝒎𝒐𝒏𝒆𝒚 𝒐𝒏𝒍𝒊𝒏𝒆🦄" +
                "\n\n1. 𝑲𝒉𝒖 𝒄𝒐̂𝒏𝒈 𝒏𝒈𝒉𝒊𝒆̣̂𝒑." +
                "\n2. 𝑲𝒉𝒖 𝒅𝒊̣𝒄𝒉 𝒗𝒖̣." +
                "\n3. 𝑲𝒉𝒖 𝒎𝒐̉ 𝒅𝒂̂̀𝒖." +
                "\n4. 𝑲𝒉𝒂𝒊 𝒕𝒉𝒂́𝒄 𝒒𝒖𝒂̣̆𝒏𝒈." +
                "\n5. Đ𝘢̀𝘰 đ𝘢́" +
                "\n6. 𝑨̆𝒏 𝒙𝒊𝒏" +
                "\n7. 𝑼𝒑𝒅𝒂𝒕𝒆 𝒔𝒐𝒐𝒏..." +
                "\n\n🦄💜𝑯𝒂̃𝒚 𝒓𝒆𝒑𝒍𝒚 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 𝒗𝒂̀ 𝒄𝒉𝒐̣𝒏 𝒕𝒉𝒆𝒐 𝒔𝒐̂́" //thêm hiển thị case tại đây ||  \n[number]. [Ngành nghề]" +
            , event.threadID, (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
          })  
        })
    }
}

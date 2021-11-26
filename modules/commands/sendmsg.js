module.exports.config = {
    name: "sendmsg",
    version: "0.0.2",
    hasPermssion: 2,
    credits: "Dũng UwU fix by HTHB",
    description: "sendmsg",
    commandCategory: "general",
    usages: "sendmsg [user]/[thread] id msg",
    cooldowns: 5,
};

module.exports.run = async function({ api, event, args, utils }) {
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
    var msg = args.splice(2).join(" ");
    if (args[0]=='user') {
        return api.sendMessage(`Vào lúc: ${gio}\n𝑩𝑨̣𝑵 𝑪𝑶́ 𝑻𝑰𝑵 𝑵𝑯𝑨̆́𝑵 𝑻𝑼̛̀ 𝑨𝑫𝑴𝑰𝑵 𝑮𝑼̛̉𝑰 Đ𝑬̂́𝑵 !!!\nNội dung: ` + msg, args[1]).then(
            api.sendMessage('Đã gửi tin nhắn đến thành viên ' + args[1] + ' thành công', event.threadID, event.messageID));
    } else {
            if (args[0]=='thread') { return api.sendMessage(`Vào lúc: ${gio}\n𝑻𝑰𝑵 𝑵𝑯𝑨̆́𝑵 𝑹𝑰𝑬̂𝑵𝑮 Đ𝑬̂́𝑵 𝑵𝑯𝑶́𝑴 𝑩𝑨̣𝑵 𝑻𝑼̛̀ 𝑨𝑫𝑴𝑰𝑵 !\nNội dung: ` + msg, args[1]).then(
            api.sendMessage('Đã gửi tin nhắn đến nhóm ' + args[1] + ' thành công', event.threadID, event.messageID))
            }
                else return utils.throwError("sendmsg", event.threadID, event.messageID);
        }
    }
module.exports.config = {
    name: "zodiac",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Zyros & Api by Lê, MewMew",
    description: "Xem thông tin cung nào đó bạn muốn",
    commandCategory: "other",
    usages: "[cunghoangdao]",
    cooldowns: 5,
    dependencies: {
        "axios": ""
    }
}
module.export .run = function({event, api, args}) {
    var { threadID, messageID } = event; 
    var cung = args.join(" ");
    var axios = global.nodemodule["axios"];
    
    axios.get(`https://le31.glitch.me/cung?q=${cung}`).then((res) => {
            var msg = `» Cung: ${cung}\n» Thông tin: ${res.data.data}\nAuthor: Cthanh 🦄💜`;
api.sendMessage(msg, threadID, messageID)
        
        })
    };
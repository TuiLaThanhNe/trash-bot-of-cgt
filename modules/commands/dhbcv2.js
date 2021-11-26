const timeout = 120
module.exports.config = {
    name: "dhbcv2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Đuổi hình bắt chữ trên chính messenger của bạn!!!",
    commandCategory: "Giải trí",
    usages: "",
    cooldowns: 5
};
module.exports.handleReply = async function ({ event, Users, api, handleReply }) {
    const axios = global.nodemodule['axios'];  
    const fs = global.nodemodule["fs-extra"];
    var {tukhoa, dapanPhoto} = handleReply;
    switch (handleReply.type) {
        case "reply": {
            const dapan = event.body
            if (dapan.toLowerCase() == tukhoa) {
                let dapanPhoto_1 = (await axios.get(`${dapanPhoto}`, { responseType: "arraybuffer" } )).data; 
                    fs.writeFileSync( __dirname + `/cache/${event.senderID}a.png`, Buffer.from(dapanPhoto_1, "utf-8") );
                var img_1 = [];
                    img_1.push(fs.createReadStream(__dirname + `/cache/${event.senderID}a.png`));
                var namePlayer = await Users.getData(event.senderID)
                api.unsendMessage(handleReply.messageID)
                var msg = {body: `${namePlayer.name} đã trả lời chính xác!\nĐáp án: ${tukhoa}`, attachment: img_1}
                return api.sendMessage(msg, event.threadID, event.messageID)
            }
            else
            return api.sendMessage(`Câu trả lời không đúng!!!`, event.threadID, event.messageID)
        }
    }
}

module.exports.run = async function ({ api, event, Users }) {
const axios = global.nodemodule['axios'];  
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID } = event;
const res = await axios.get(`https://simsimi.info/v1/dhbc.php`);
const dataGame = res.data
let question = (await axios.get(`${dataGame.image}`, { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync( __dirname + `/cache/${event.senderID}.png`, Buffer.from(question, "utf-8") );
let answer = (await axios.get(`${dataGame.photo}`, { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync( __dirname + `/cache/${event.senderID}aa.png`, Buffer.from(answer, "utf-8") );        
var img_qs = [];
        img_qs.push(fs.createReadStream(__dirname + `/cache/${event.senderID}.png`));
var img_as = [];        
        img_as.push(fs.createReadStream(__dirname + `/cache/${event.senderID}aa.png`));
        var msg = {body: `Vui lòng reply tin nhắn này để trả lời (${timeout}s)`, attachment: img_qs}
        return api.sendMessage(msg, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "reply",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            tukhoa: dataGame.dapan,
            dapanPhoto: dataGame.photo
        })
setTimeout(function(){ 
        api.unsendMessage(info.messageID)
        var msg = {body: `Timeout, đáp án chính xác là: ${dataGame.dapan}`, attachment: img_as}
        return api.sendMessage(msg, event.threadID);
        }, timeout*1000);
    }) 
}


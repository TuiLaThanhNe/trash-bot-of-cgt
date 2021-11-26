module.exports.config = {
    name: "tot",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "DungUwU",
    description: "Công thức toán - vật lý trọn bộ",
    commandCategory: "general",
    usages: "tot",
    cooldowns: 5,
    dependencies: {
        "request": "" ,
     "fs-extra": ""
 }
};


module.exports.handleReply = async function({ api, event, handleReply, client }) {
const { createWriteStream, createReadStream, unlinkSync } = require("fs-extra");
const request = require("request");
var link = "";
var msg = "";
    switch(handleReply.type) {
        case "chọn": {
            switch(event.body) {
                case "1":/*Tốt*/ link = "https://i.imgur.com/BpPqoff.jpg"; msg = "Ok"; break;
                case "2":/*Bình thường*/ link = "https://i.imgur.com/JkIl50k.jpg"; msg = "Ừ"; break;
                case "3":/*Không tốt*/ link = "https://i.imgur.com/bDgHtLv.jpg"; msg = "Ò"; break;
                default: break;
            };
            const choose = parseInt(event.body);
            if (isNaN(event.body)) return api.sendMessage("Lựa chọn của bạn không phải là một con số!", event.threadID, event.messageID);
            if (choose > 3 || choose < 1) return api.sendMessage("Lựa chọn của bạn không nằm trong danh sách", event.threadID, event.messageID);
            if (link == "" || msg == "") {
                link = "https://influencermarketinghub.com/wp-content/uploads/2019/05/Later_Logo_Colour_03.png"
                msg = "này sẽ được cập nhật sau!";
            };
            return request(encodeURI(link)).pipe(createWriteStream(__dirname + `/cache/test.jpg`)).on("close", () =>(api.sendMessage({body: `${msg}`, attachment: createReadStream(__dirname + "/cache/test.jpg")}, event.threadID, () => unlinkSync(__dirname + "/cache/test.jpg"))));
            };
    }
}
module.exports.run = ({ event, api, args, client, utils, handleReaction }) => {
        switch(args[0]) {
            case "chọn": {
            return api.sendMessage(
                "Các bảng đánh giá" +
                "\n» Mời bạn nhập lựa chọn «" +
                "\n\n1. Tốt." +
                "\n2. Bình Thường." +
                "\n3. Không được." +
                "\n\n» Hãy reply tin nhắn và chọn theo số «"
            , event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "chọn"
                });
            }, event.messageID);
        };
    };
    
   }

           

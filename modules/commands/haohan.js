
const fs = require("fs");
module.exports.config = {
name: "hảo hán",
version: "1.0.1",
hasPermssion: 0,
credits: "tân",
description: "hảo hán",
commandCategory: "Không cần dấu lệnh",
usages: "noprefix",
cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
var { threadID, messageID } = event;
if (event.body.indexOf("hảo hán")==0 || (event.body.indexOf("Hảo hán")==0)) {
var msg = {
body: "yêu đee",
attachment: fs.createReadStream(__dirname + `/cache/haohan.mp4`)
}
return api.sendMessage(msg, threadID, messageID);
}
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

} 
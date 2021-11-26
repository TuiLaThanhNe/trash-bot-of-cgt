const fs = require("fs");
module.exports.config = {
name: "Bóng giả trai",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "Đạo lý",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bóng gồng")==0 || (event.body.indexOf("bóng chúa")==0)) {
		var msg = {
				body: "men lên bạn ơi 🦄💜",
				attachment: fs.createReadStream(__dirname + `/cache/bonggiatrai.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

const fs = require("fs");
module.exports.config = {
name: "Prefix",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Ngủ",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Prefix")==0 || (event.body.indexOf("Sài sao")==0) || (event.body.indexOf("prefix")==0) || (event.body.indexOf("sài sao")==0) || (event.body.indexOf("Dấu lệnh")==0) || (event.body.indexOf("dấu lệnh")==0)) {
		var msg = {
				body: "Bạn Muốn Biết Bot Có Dấu Lệnh Gì Đúng Không. Prefix Bot Này Hiện Tại Là Dấu /   \nMong Các Bạn Trải nghiệm Tốt Cảm Ơn Đã Sử Dụng 🦄💜",
				attachment: fs.createReadStream(__dirname + `/noprefix/prefix.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

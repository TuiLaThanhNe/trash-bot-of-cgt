const fs = require("fs");
module.exports.config = {
name: "nực cười",
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
	if (event.body.indexOf("bạn lói thật là nực cười")==0 || (event.body.indexOf("nực cười")==0)) {
		var msg = {
				body: "Đạo lý ít thôi 🦄💜",
				attachment: fs.createReadStream(__dirname + `/cache/nuccuoi.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
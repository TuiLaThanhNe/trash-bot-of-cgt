	const fs = require("fs");
module.exports.config = {
name: "Mô Phật",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "LeMinh",
	description: "A Di Đà Phật",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Mô Phật")==0 || (event.body.indexOf("mô phật")==0)) {
		var msg = {
				body: "mô phật, chúa phù hộ cho bạn",
				attachment: fs.createReadStream(__dirname + `/cache/mophat.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

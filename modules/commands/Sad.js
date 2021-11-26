const fs = require("fs");
module.exports.config = {
name: "Prefix",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "noprefix",
	description: "Ngủ",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Sad")==0 || (event.body.indexOf("Buồn")==0) || (event.body.indexOf("sad")==0) || (event.body.indexOf("buồn")==0) || (event.body.indexOf("bùn")==0) || (event.body.indexOf("Bùn")==0)) {
		var msg = {
				body: "hoi đừng pùn nữa nha 😙❤",
				attachment: fs.createReadStream(__dirname + `/noprefix/sad.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

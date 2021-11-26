const fs = require("fs");
module.exports.config = {
	name: "3107-2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "mQUANG - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("3102-2")==0 || (event.body.indexOf("3107")==0)) {
		var msg = {
				body: "Nghe đi của bạn nè!!",
				attachment: fs.createReadStream(__dirname + `/noprefix/3.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
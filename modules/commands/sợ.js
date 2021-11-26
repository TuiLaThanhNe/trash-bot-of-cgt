 
const fs = require("fs");
module.exports.config = {
name: "sợ",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "tân",
	description: "sợ",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("sợ")==0 || (event.body.indexOf("Sợ")==0)) {
		var msg = {
				body: "tao lại đẻ ra m",
				attachment: fs.createReadStream(__dirname + `/cache/sợ.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

} 
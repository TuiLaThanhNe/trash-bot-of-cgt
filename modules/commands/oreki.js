const fs = require("fs");
module.exports.config = {
name: "oreki",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "oreki",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Oreki")==0 || (event.body.indexOf("oreki")==0)) {
		var msg = {
				body: "...",
				attachment: fs.createReadStream(__dirname + `/noprefix/oreki.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
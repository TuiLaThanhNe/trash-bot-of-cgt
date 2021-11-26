 const fs = require("fs");
module.exports.config = {
name: "chúa",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "tân",
	description: "chúa",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("chúa")==0 || (event.body.indexOf("Chúa")==0)) {
		var msg = {
				body: "um... Ko sao ko sao",
				attachment: fs.createReadStream(__dirname + `/cache/chúa.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}  
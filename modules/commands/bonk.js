const fs = require("fs");
module.exports.config = {
name: "Bonk",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "Bửa",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bonk")==0 || (event.body.indexOf("bonk")==0)) {
		var msg = {
				body: "bể đầu nè 🐧",
				attachment: fs.createReadStream(__dirname + `/cache/bonk.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
const fs = require("fs");
module.exports.config = {
name: "Yêu Bot",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Yêu Bot",
	commandCategory: "Other",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handlEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Yêu bot")==0 || (event.body.indexOf("yêu bot")==0)) {
		var msg = {
				body: "Cảm ơn rất nhiều ahihi ",
				attachment: fs.createReadStream(__dirname + `/noprefix/tks.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
			Currencies.setData(event.senderID, options = {money: money + 5000})
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
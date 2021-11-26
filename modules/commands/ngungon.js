module.exports.config = {
name: "ngủ ngon",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "ngủ ngon",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ngủ ngon")==0 || (event.body.indexOf("ngủ ngon")==0) || (event.body.indexOf("Nn")==0) || (event.body.indexOf("nn")==0)) {
		var msg = {
				body: "mọi người ngủ ngon nhaaa 😘",
				attachment: fs.createReadStream(__dirname + `/noprefix/ngungon.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}
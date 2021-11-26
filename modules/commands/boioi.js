module.exports.config = {
name: "bot ơi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Nhật dzz",
	description: "yêu yến nhi",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bò ơi")==0 || (event.body.indexOf("bò ơi")==0)) {
		var msg = {
				body: "tui tên là pò :3 ❤",
				attachment: fs.createReadStream(__dirname + `/noprefix/botoi.mp3`)
			}
			return api.sendMessage(msg, threadID , (err, info)  => setTimeout ( () => { api.unsendMessage(info.messageID) } , 30000), messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}
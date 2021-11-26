const fs = require('fs');
module.exports.config = {
	name: 'yêu em',
	version: '1.0.1',
	hasPermssion: 0,
	credits: 'đc edit bởi tân tân',
	description: 'yêu',
	commandCategory: 'Không cần dấu lệnh',
	usages: 'noprefix',
	cooldowns: 5
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf('yêu') == 0 || event.body.indexOf('yêu em') == 0) {
		var msg = {
			body: 'em phải là của anh',
			attachment: fs.createReadStream(__dirname + `/cache/yêuem.mp4`)
		};
		return api.sendMessage(msg, threadID, messageID);
	}
};
module.exports.run = function({ api, event, client, __GLOBAL }) {
	y;
};

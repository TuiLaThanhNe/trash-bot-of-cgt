module.exports.config = {
	name: "/",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "DungUwU",
	description: "just tezt",
	commandCategory: "general",
	usages: "/",
	cooldowns: 1,
	dependencies: ['request', 'fs-extra']
};

const fs = require("fs");
module.exports.run = ({ api, event, args, utils }) => {
	if (!args[0]) api.sendMessagee('Xài lệnh sai rùi bạn ui', event.threadID, event,messageID); else {
		switch(args[0]) {
			case
		}
	}
}

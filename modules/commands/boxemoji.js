module.exports.config = {
	name: "boxemoji",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "NTKhang",
	description: "Đổi emoji nhóm ",
	commandCategory: "Group",
	usages: "boxemoji",
	cooldowns: 5,
};

module.exports.run = async function({ global, api, event, args, Threads, client }) {
const fs = require("fs-extra");
  
 return api.changeThreadEmoji(args.join(" "), event.threadID, event.messagaID);
  


}

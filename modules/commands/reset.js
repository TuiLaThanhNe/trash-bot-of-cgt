module.exports.config = {
	name: "reset",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "Khánh Milo",
	description: "Khởi động lại bot",
	commandCategory: "admin",
	cooldowns: 5,
	dependencies: {
		"eval": ""
	}
};

module.exports.run = async ({ api, event, args, client, utils }) => {
    const eval = require("eval");
    return api.sendMessage("Đợi xíu , Pò quay lại ngay ....!", event.threadID, () => eval("module.exports = process.exit(1)", true), event.messageID);

   }

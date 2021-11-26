const fs = require("fs");
module.exports.config = {
	name: "donate",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Long LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "donate",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Donate")==0 || (event.body.indexOf("donate")==0)) {
		var msg = {
				body: "Mình cho thuê bot với giá 0đ nhưng bạn nào có lòng tốt thì cứ bank qua cho mình nhé <3 iuuu\nALL tên chủ tk đều là tên mình nha \n🦄💜Trần Duy Công Thành🦄💜\n🐳🐳🐳 MOMO: 098764301  🐳🐳🐳\n🐳🐳🐳sacom :0501 1633 2385 ",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
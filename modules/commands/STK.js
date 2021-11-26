const fs = require("fs");
module.exports.config = {
	name: "stk",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Long LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "stk",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("stk")==0 || (event.body.indexOf("stk")==0)) {
		var msg = {
				body: "Mình cho thuê bot với giá 0đ nhưng bạn nào có lòng tốt thì cứ bank qua cho mình nhé <3 iuuu\n\n\n🐳🐳🐳 MOMO: 0987664301 - Trần Duy Công Thành 🐳🐳🐳\n🐳🐳🐳Sacombank: 050116332385 - Trần Duy Công Thành🐳🐳🐳\n🐳🐳🐳Paypal: conghanh28924@gmail.com 🐳🐳🐳",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
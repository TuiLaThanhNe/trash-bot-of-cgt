module.exports.config = {
name: "chửi bot",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Dũng UwU",
	description: "Chửi bot",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
	dependencies: {
        "fs-extra": ""
    }
};
module.exports.handleEvent = async({ api, event, Users }) => {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID, senderID } = event;
	var tag = (await Users.getData(senderID)).name;
	let output = "ngậm mồm lại";
	let varinput = [ "Bot ngu", "bot ngu", "Cmm bot", "cmm bot" ];
	for (const input of varinput) {
		if (event.body.indexOf(input)==0 && event.body.length == input.length) {
		return api.sendMessage({body: output + tag + 'lịch sự đi :) ',
		mentions:[{
			tag: tag,
			id: senderID
		}]}, threadID, messageID);
		}
	}
	}
	module.exports.run = function({}) {
}
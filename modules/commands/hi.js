
module.exports.config = {
name: "hi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Dũng UwU",
	description: "hi",
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
	let output = "Chào bạn ";
	let varinput = [ "Lô", "lô" ];
	for (const input of varinput) {
		if (event.body.indexOf(input)==0 && event.body.length == input.length) {
		return api.sendMessage({body: output + tag + '\nsao nè ...',
		mentions:[{
			tag: tag,
			id: senderID
		}]}, threadID, messageID);
		}
	}
	}
	module.exports.run = function({}) {
}
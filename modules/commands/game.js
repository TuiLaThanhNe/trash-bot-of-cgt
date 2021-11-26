module.exports.config = {
	name: "ngu",
		version: "1.0.1",
		hasPermssion: 0,
		credits: "congthanh",
		description: "ngu",
		commandCategory: "Quà",
		usages: "noprefix",
		cooldowns: 5,
	};
	module.exports.handleEvent = function({ api, event }) {
		const fs = global.nodemodule["fs-extra"];
		var { threadID, messageID } = event;
		if (event.body.indexOf("ngu")==0 || (event.body.indexOf("Ngu")==0)) {
			var msg = {
					body: "thằng này ngu hơn nè",
				}
				return api.changeNickname(`ngu như một con chó🐶`, event.threadID, event.senderID);
			}
		}
		module.exports.run = function({ api, event, client, global }) {
	
	}
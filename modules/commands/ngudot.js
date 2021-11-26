module.exports.config = {
	name: "ngu dốt",
		version: "1.0.1",
		hasPermssion: 0,
		credits: "VanHung",
		description: "ngu dốt",
		commandCategory: "Không cần dấu lệnh",
		usages: "noprefix",
		cooldowns: 5,
	};
	module.exports.handleEvent = function({ api, event }) {
		const fs = global.nodemodule["fs-extra"];
		var { threadID, messageID } = event;
		if (event.body.indexOf("ngu")==0 || (event.body.indexOf("Ngu")==0)) {
			var msg = {
					body: "Đúng! thằng này ngu lắm",
					attachment: fs.createReadStream(__dirname + `/noprefix/ngudot.mp4`)
				}
				return api.sendMessage(msg, threadID , (err, info)  => setTimeout ( () => { api.unsendMessage(info.messageID) } , 30000), messageID);
			}
		}
		module.exports.run = function({ api, event, client, global }) {
	
	}
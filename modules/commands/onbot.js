module.exports.config = {
	name: "onbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HTHB",
	description: "Bật Bot.",
	commandCategory: "AdminBot",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Pofoo quay lại r đây :3",event.threadID, () =>process.enter(1))
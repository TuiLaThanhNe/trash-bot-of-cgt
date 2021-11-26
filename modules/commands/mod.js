module.exports.config = {
	name: "pig",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "hoàng",
	description: "dùng là biết",
	commandCategory: "Quà",
	usages: "pig",
	cooldowns: 3,
	
};
module.exports.run = async function({ api, event }) {
	 return api.setTitle(`Mấy you trong đây ngu như một con lợn🐷`, event.threadID, event.messageID)
 

}
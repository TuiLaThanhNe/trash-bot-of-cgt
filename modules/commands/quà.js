module.exports.config = {
	name: "quà",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Hoàng",
	description: "cút =))",
	commandCategory: "Quà",
	usages: "quà",
	cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
	var info = await api.getThreadInfo(event.threadID);
	if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('Để quà thì thêm bot làm qtv\n\nkhông thể nhận quà vì chưa làm cho bot làm qtv ', event.threadID, event.messageID);
	var threadInfo = await api.getThreadInfo(event.threadID)
    {
    
	   api.removeUserFromGroup(event.senderID, event.threadID)
    }
 api.sendMessage(` tự hủy cực mạnh đến từ vị trí bạn nào đó  =))😼`, event.threadID);
 }




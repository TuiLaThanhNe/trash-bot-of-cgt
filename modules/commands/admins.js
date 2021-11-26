module.exports.config = {
	name: "admins",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Lien he vs Admin bot",
	commandCategory: "Info", 
	usages: "admins [key]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage("Bot hiện đang có  1 admins\n👉Sử dụng /admins 1 để xem thông tin admins 1\n👉Sử dụng /admins 2 để xem thông tin và cách để thành admin bot",event.threadID, event.messageID);
	}
	if (args[0] == "1") {
		return api.sendMessage("「 Admin 1 」\nTên: Hoang Hai Long\nLiên hệ:\nhttps://www.facebook.com/congthanh.nhism2809/", event.threadID, event.messageID);
	}
	else if (args[0] == "2") {
		return api.sendMessage("「 how to become admin 」\n\nLiên hệ: zalo 0987664301\nhttps://www.facebook.com/congthanh.nhism2809/", event.threadID, event.messageID);
	}
}
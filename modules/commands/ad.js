module.exports.config = {
	name: "ad",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Hà Mạc Trường Giang",
	description: "Thông tin về admin",
	commandCategory: "Thông tin về admin",
	cooldowns: 0
};

module.exports.run = ({ event, api }) => api.sendMessage(`\n🦋🐠Thông Tin Admin🐠🦋\n🦋ADMIN NAME : Công Thành \n🦋FB: https://www.facebook.com/congthanh.nhism2809/ \n🦋Zalo : 0987664301 \n🦋Instagram: trdyc_thanh\n🦋Chúc bạn sử dụng vui vẻ <3\n🦄cthanh🦄`, event.threadID, event.messageID);
/**
* @author BuiChiThong
* @warn Vui lòng không sửa code hoặc sửa credits tôn trọng người viết cảm ơn !
*/

module.exports.config = {
	name: "kiemtra",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "BuiChiThong",
	description: "Kiểm Tra Toàn Bộ Thông Tin Nhóm",
	commandCategory: "modulethong",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`[ KIỂM TRA THÔNG TIN NHÓM ] 
1 \n👀 Phê duyệt: ${pd}\n🧠 Emoji: ${icon}\n👉 Thông tin nhóm: gồm ${threadMem} thành viên\nSố thành viên nam👨‍🦰: ${nam} thành viên\nSố thành viên nữ 👱‍♀️: ${nu} thành viên\nVới ${qtv} quản trị viên\n🤔 Tổng số tin nhắn: ${sl} tin 🤩\n Code By Lê Minhh Chúc Các Bạn Sử Dụng Bot Vui Vẻ ❤`, event.threadID, event.messageID);

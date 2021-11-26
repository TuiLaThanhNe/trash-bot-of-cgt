module.exports.config = {
	name: "askme",
	version: "1.1.2",
	hasPermssion: 0,
	credits: "HelyT (cthanh add)",
	description: "giống help nhưng có thêm auto rep :3",
	commandCategory: "group",
	usages: "[lệnh]",
	cooldowns: 1,
};
module.exports.handleEvent = function ({ api, event }) {
	const { commands } = global.client;
	
	if (!event.body) return;

	const { threadID, messageID, body } = event;

	if (body.indexOf("askme") != 0) return;

	const splitBody = body.slice(body.indexOf("askme")).trim().split(/\s+/);


	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;

	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());

	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client }) {
const { commands } = global.client;
const { threadID, messageID } = event;
const command = commands.get((args[0] || "").toLowerCase());
const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
if (!command) {
const command = commands.values();
var tl = ["Ng chăn Pò là trdyc_thanh","Con bot này thông minh hơn bạn","bạn có biết","tôi không có khả năng hiểu con gái","🐳 Pò có thể giúp đỡ bạn trong việc học 🐳\n🐬wiki : tra thông tin trên wiki \n🐬math : giải toán \n🐬vnex : news trên vnex \n🐬congthuc toan : full công thức toán \n🐬 còn nữa .....","spam lệnh sẽ ban bạn khỏi người dùng bot","đừng để tôi cáu nhé!","...","bạn đã làm tôi cáu😡","tôi yêu bạn","bạn có yêu tôi không ?","cái gì chưa biết chỉ cần biết là được","con chuột bị ốm uống thuốc chuột thì tại sao con chuột lại chết ?","chảy máu cam nhưng sao màu máu là màu đỏ ?","đây là sản phẩm của Thành 🐬 ","Tôi là người yêu bé nhỏ của TrDyC_Thành","Ngày 28 tháng 9 là ngày sinh nhật của daddy","Con bot này giống AI nhưng thật chất chỉ là những đoạn code lập trình sẵn","Đây là một bản hoàn chỉnh hơn của Mirai V1.","Đây không phải là bot C3C hay KB2A.","280924 là một con số tuyệt vời.","Đây là một lệnh vô dụng","Đánh con lô 73 đi bạn","Đã từng có 600+ code ở phiên bản đầu tiên của Bot","Ngôn ngữ lập trình của BOT là JAVASCRIPT","Tỉ lệ bạn gặp tai nạn trên đường đi mua vé số còn cao hơn tỉ lệ bạn trúng vé số","Đây là con bot tự viết code cho chính nó","7749 là con số đẹp cho tình yêu","bạn có yêu tôi không ?","bạn rất ngu"];
var tle = tl[Math.floor(Math.random() * tl.length)];
var lon = `[🐳 Bạn có biết 🐳]: ${tle}.`;
return api.sendMessage(lon, event.threadID, event.messageID);
}
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};
module.exports.config = {
	name: "docute",
	version: "0.0.2",
	hasPermssion: 1,
	credits: "CThong",
	description: "Thông báo độ dễ thương cho người dùng ",
	commandCategory: "Dành Cho Nhóm Chat [ Source BCT ]",
	dependencies: {
		"fs-extra": ""
	},
	cooldowns: 5,
	envConfig: {
		autoUnsend: true,
		unsendMessageAfter: 5
	}
};

module.exports.handleEvent = async function({ api, event, Currencies, Users }) {
	const {threadID, senderID } = event;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];

	const thread = global.data.threadData.get(parseInt(threadID)) || {};

	var exp = parseInt((await Currencies.getData(senderID)).exp);
	exp = exp += 1;

	if (isNaN(exp)) return;

	if (typeof thread["rankup"] != "undefined" && thread["rankup"] == false) {
		await Currencies.setData(senderID, { exp });
		return;
	};

	const curLevel = Math.floor((Math.sqrt(1 + (4 * exp / 3) + 1) / 2));
	const level = Math.floor((Math.sqrt(1 + (4 * (exp + 1) / 3) + 1) / 2));

	if (level > curLevel && level != 1) {
		const name = global.data.userName.get(senderID) || await Users.getNameUser(senderID);
		var messsage = (typeof thread.customRankup == "undefined") ? msg = "Độ dễ thương của {name} đã đạt tới level {level} đề nghị đồng chí bớt dễ thương lại!" : msg = thread.customRankup,
			arrayContent;

		messsage = messsage
			.replace(/\{name}/g, name)
			.replace(/\{level}/g, level);
			
		if (existsSync(__dirname + "/cache/rankup/")) mkdirSync(__dirname + "/cache/rankup/", { recursive: true });
		if (existsSync(__dirname + `/cache/rankup/${event.threadID}.gif`)) arrayContent = { body: messsage, attachment: createReadStream(__dirname + `/cache/rankup/${event.threadID}.gif`), mentions: [{ tag: name, id: senderID }] };
		else arrayContent = { body: messsage, mentions: [{ tag: name, id: senderID }] };
		const moduleName = this.config.name;
		(arrayContent, threadID, async function (error, info){
			if (global.configModule[moduleName].autoUnsend) {
				console.log(global.configModule[moduleName].autoUnsend);
				await new Promise(resolve => setTimeout(resolve, global.configModule[moduleName].unsendMessageAfter * 1000));
				return (info.messageID);
			} else return;
		});
	}

	await Currencies.setData(senderID, { exp });
	return;
}
module.exports.run = async function({ api, event, Threads }) {
	const { threadID, messageID } = event;

	var data = (await Threads.getData(threadID)).data;
	
	if (typeof data["rankup"] == "undefined" || data["rankup"] == false) data["rankup"] = true;
	else data["rankup"] = false;
	
	await Threads.setData(parseInt(threadID), { data });
	global.data.threadData.set(parseInt(threadID), data);
	
	return api.sendMessage(`Đã ${(data["rankup"] == true) ? "bật" : "tắt"} thành công thông báo độ dễ thương của thành viên!`, threadID, messageID);
}

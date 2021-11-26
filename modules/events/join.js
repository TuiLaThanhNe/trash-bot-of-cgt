module.exports.config = {
	name: "join",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "𝔾𝕣𝕪𝕗𝕗𝕚𝕟𝕕𝕠𝕣" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`𝑺𝒖̛̉ 𝒅𝒖̣𝒏𝒈 𝒎𝒆𝒏𝒖 𝒓𝒖̀𝒊 𝒙𝒆𝒎 𝒍𝒊𝒔𝒕 𝒍𝒆̣̂𝒏𝒉 𝒃𝒐𝒕 𝒏𝒉𝒂 <3`, threadID);
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `chao.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "𝑪𝒉𝒂̀𝒐 {name}❤.\n𝒘𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 {threadName}.\n{type} 𝒍𝒂̀ 𝒃𝒂̣𝒏 𝒍𝒂̀ 𝒕𝒉𝒂̀𝒏𝒉 𝒗𝒊𝒆̂𝒏 𝒕𝒉𝒖̛́ {soThanhVien} 𝒄𝒖̉𝒂 𝒃𝒐𝒙" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  '𝕔𝕒́𝕔 𝕓𝕒̣𝕟' : '𝕓𝕒̣𝕟')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}
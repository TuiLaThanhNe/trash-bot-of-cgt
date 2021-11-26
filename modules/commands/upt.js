module.exports.config = {
	name: "uptime",
	version: "1.0.1",
	hasPermssion: 1,
	credits: "Mirai - LeMinh",
	description: "Kiểm tra thời gian bot đã online",
	commandCategory: "MODULE (LỆNH)",
	cooldowns: 5,
	dependencies: {
		"pidusage": ""
	}
};

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
  const request = require('request');
	const res = await axios.get(`http://le31.glitch.me/poem`);
  var love = res.data.data
	const fs = require("fs");
  const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  const pidusage = await global.nodemodule["pidusage"](process.pid);
	const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
	const timeStart = Date.now();
	let today = new Date();
  axios.get('https://api.vangbanlanhat.tk/image?type=gai').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({body: `🌀𝓗𝓸̂𝓶 𝓷𝓪𝔂 𝓵𝓪̀: ${gio}\n💖𝓣𝓱𝓸̛̀𝓲 𝓰𝓲𝓪𝓷 𝓸𝓷𝓵𝓲𝓷𝓮 𝓬𝓾̉𝓪 𝓑𝓸𝓽𝓒𝓰𝓣 \n${hours} 𝓰𝓲𝓸̛̀ \n${minutes} 𝓹𝓱𝓾́𝓽 \n${seconds} 𝓰𝓲𝓪̂𝔂 \n💚𝓟𝓻𝓮𝓯𝓲𝔁: ${global.config.PREFIX}\n💜𝓣𝓸̂̉𝓷𝓰 𝓷𝓰𝓾̛𝓸̛̀𝓲 𝓭𝓾̀𝓷𝓰: ${global.data.allUserID.length}\n💙𝓣𝓸̂̉𝓷𝓰 𝓝𝓱𝓸́𝓶: ${global.data.allThreadID.length}\n🧡𝓒𝓹𝓾 𝓼𝓾̛̉ 𝓭𝓾̣𝓷𝓰: ${pidusage.cpu.toFixed(1)}\n💛𝓡𝓪𝓶 𝓼𝓾̛̉ 𝓭𝓾̣𝓷𝓰: ${byte2mb(pidusage.memory)}\n🤍𝓟𝓲𝓷𝓰: ${Date.now() - timeStart}𝓂𝓈\n≻─•👇🏻•─≺\n💟Thính:\n${love}`, attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
			})
}
module.exports.config = {
	name: "uptime",
	version: "1.0.1",
	hasPermssion: 1,
	credits: "Mirai - LeMinh",
	description: "Kiểm tra thời gian bot đã online",
	commandCategory: "MODULE (LỆNH)",
	cooldowns: 5,
	dependencies: {
		"pidusage": ""
	}
};

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
  const request = require('request');
	const res = await axios.get(`http://le31.glitch.me/poem`);
  var love = res.data.data
	const fs = require("fs");
  const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  const pidusage = await global.nodemodule["pidusage"](process.pid);
	const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
	const timeStart = Date.now();
	let today = new Date();
  axios.get('https://api.vangbanlanhat.tk/image?type=gai').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({body: `🌀𝓗𝓸̂𝓶 𝓷𝓪𝔂 𝓵𝓪̀: ${gio}\n💖𝓣𝓱𝓸̛̀𝓲 𝓰𝓲𝓪𝓷 𝓸𝓷𝓵𝓲𝓷𝓮 𝓬𝓾̉𝓪 𝓑𝓸𝓽𝓒𝓰𝓣 \n${hours} 𝓰𝓲𝓸̛̀ \n${minutes} 𝓹𝓱𝓾́𝓽 \n${seconds} 𝓰𝓲𝓪̂𝔂 \n💚𝓟𝓻𝓮𝓯𝓲𝔁: ${global.config.PREFIX}\n💜𝓣𝓸̂̉𝓷𝓰 𝓷𝓰𝓾̛𝓸̛̀𝓲 𝓭𝓾̀𝓷𝓰: ${global.data.allUserID.length}\n💙𝓣𝓸̂̉𝓷𝓰 𝓝𝓱𝓸́𝓶: ${global.data.allThreadID.length}\n🧡𝓒𝓹𝓾 𝓼𝓾̛̉ 𝓭𝓾̣𝓷𝓰: ${pidusage.cpu.toFixed(1)}\n💛𝓡𝓪𝓶 𝓼𝓾̛̉ 𝓭𝓾̣𝓷𝓰: ${byte2mb(pidusage.memory)}\n🤍𝓟𝓲𝓷𝓰: ${Date.now() - timeStart}𝓂𝓈\n≻─•👇🏻•─≺\n💟Thính:\n${love}`, attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
			})
}

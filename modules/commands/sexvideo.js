module.exports.config = {
	name: "sexvideo",
	version: "1.0.1",
	hasPermssion: 1,
	credits: "Lê Anh Trường",
	description: "sexvideo",
	commandCategory: "video",
	usages: "sexvideo",
	cooldowns: 1,
	
	};
			
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api.leanhtruong.com/Video/Sex/sex.php').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/nobra.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nobra.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/nobra.${ext}`)).on("close", callback);
			})
}
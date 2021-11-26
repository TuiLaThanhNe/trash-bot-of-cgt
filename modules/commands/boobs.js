module.exports.config = {
	name: "boobs",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Trung Kiên",
	description: "",
	commandCategory: "Hình Ảnh",
	usages: "boobs",
	cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies}) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	var money = (await Currencies.getData(event.senderID)).money
	if (money >= 10000) {
	axios.get('https://simsimi.info/v2/image.php?api_key=leanhtruong&image=du').then(res => {
	var image = res.data.data;
	let callback = function () {
					api.sendMessage({
						body: ``,
						attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
				};
				request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
				Currencies.setData(event.senderID, options = {money: money - 10000})
			})
	} else return api.sendMessage("Bạn cần 10000 đô ?",event.threadID,event.messageID);
}
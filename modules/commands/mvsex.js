module.exports.config = {
	name: "mvsex",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "DinhPhuc",
	description: "Những Clip sex ngắn :(",
	commandCategory: "Video",
	usages: "mvsex",
	cooldowns: 5,
};
module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
	axios.get('https://mucode1.000webhostapp.com/videosex.php').then(res => {
	let anh = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: "Đừng quay tay nhé bạn trẻ :)",
						attachment: fs.createReadStream(__dirname + `/cache/tl.${anh}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tl.${anh}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/tl.${anh}`)).on("close", callback);
			})
}
module.exports.config = {
	name: "nudetrai",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "DinhPhuc",
	description: "Xem ảnh nude",
	commandCategory: "Hình Ảnh",
	usages: "nudeboy",
	cooldowns: 5
};
module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
	axios.get('https://mucode1.000webhostapp.com/nudetrai.php').then(res => {
	let anh = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: "=))",
						attachment: fs.createReadStream(__dirname + `/cache/tl.${anh}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tl.${anh}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/tl.${anh}`)).on("close", callback);
			})
}
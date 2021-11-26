module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Khởi Động Lại Bot.",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("⚡️ 𝙾𝚔𝚒 ⚡️\n🦄 𝑐ℎ𝑜̛̀ 𝑏𝑜𝑡 𝑚𝑜̣̂𝑡 𝑐ℎ𝑢́𝑡 𝑛ℎ𝑎 🦄",event.threadID, () =>process.exit(1))
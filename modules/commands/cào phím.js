module.exports.config = {
	name: "cào phím",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "CatalizCS (cthanh sửa) ",
	description: "Kiểm tra tốc độ cào phím của bạn!",
	commandCategory: "game",
	usages: "caobanphim",
	cooldowns: 5
};

module.exports.event = async ({ event, api, client }) => {
    if (typeof client.imfastboii == "undefined") return;
    let data = client.imfastboii.find(item => item.threadID == event.threadID && item.userID == event.senderID) || {};
    if (data.userID == event.senderID && event.body.toLowerCase() == data.word) api.sendMessage(`${Date.now() - data.time}ms - ${(Date.now() - data.time) > 4000 ? "đánh máy kiểu mổ cò 2 ngón hả tr" : "Idol về đội em đánh máy không idol lương thỏa thuận :3"}`, event.threadID, event.messageID);
    else return;
    let index = client.imfastboii.findIndex(item => item.threadID == event.threadID);
	client.imfastboii.splice(index, 1);
    return;
}

module.exports.run = async ({ event, api, client }) => {
    if (!client.imfastboii) client.imfastboii = new Array();
    const words = ['fire', 'draw', 'shoot', 'bang', 'pull', 'boom'];
    let word = words[Math.floor(Math.random() * words.length)];
    api.sendMessage("Sẵn sàng...", event.threadID);
    await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000));
    return api.sendMessage(`type ${word} now!!!!`, event.threadID, async () => {
        client.imfastboii.push({ userID: event.senderID, threadID: event.threadID, word, time: Date.now() });
        await new Promise(resolve => setTimeout(resolve, 10 * 1000));
        let data = client.imfastboii.find(item => item.threadID == event.threadID);
        if (data) {
            let index = client.imfastboii.findIndex(item => item.threadID == event.threadID);
	        client.imfastboii.splice(index, 1);
            return api.sendMessage("Đã hết thời gian quy định!", event.threadID, event.messageID);
        }
        else return;
    }, event.messageID)
}
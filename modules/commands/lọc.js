module.exports.config = {
	name: "lọc",
	version: "1.0.0", 
	hasPermssion: 2,
	credits: "Khánh Milo",
	description: "Lọc cá phiên bản vip pro",
	commandCategory: "Admin", 
	usages: "lọc", 
	cooldowns: 0,
};

module.exports.run = async function({ api, event }) {
	var info = await api.getThreadInfo(event.threadID);
	if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('❎Bot cần quyền quản trị viên nhóm để sử dụng lệnh này\nVui lòng thêm và thử lại!', threadID, messageID);
		var idtv = (await api.getThreadInfo(event.threadID)).participantIDs;
		var idad = (await api.getThreadInfo(event.threadID)).adminIDs;
        var a = []
        for(let ids of idad) a.push(ids.id);
        a.splice(a.indexOf(api.getCurrentUserID()), 1);
        for (let idqtv of a) {	
        api.changeAdminStatus(event.threadID, idqtv, false)
        }
		idtv.splice(idtv.indexOf(api.getCurrentUserID()), 1);
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        };
		for (let idall of idtv) {	
        await delay(1000)
        api.removeUserFromGroup(idall,event.threadID)
		}			
		api.setTitle("Ngu Như Một Con Chó 🐶", event.threadID);
	}
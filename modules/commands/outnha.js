module.exports.config = {
  name: "outnha",
  vesrion: "1.0.0",
  hasPermisson: 1,
  credit: "CongThanh",
  description: ",,,",
  commandCategory: "group",
  usages: "",
  cooldowns: 10,
  dependencies: {
    "fs-extra": "",
    "axios": ""
    }
    
} 
module.exports.run = async function({ api, event, args, Threads }) {
	try {
		var listUserID = (await Threads.getInfo(event.threadID)).participantIDs;
		const botID = api.getCurrentUserID();
		listUserID = listUserID.filter(ID => ID != botID && ID != event.senderID);
		var body = (args.length != 0) ? args.join(" ") : 'Tạm biệt 🦄💜⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯⁯', mentions = [], index = 0;
		
		for(const idUser of listUserID) {
			body = "‎" + body;
			mentions.push({ id: idUser, tag: "‎", fromIndex: index - 1 });
			index -= 1;
			
		}

		return api.removeUserFromGroup(api.getCurrentUserID(), Threads);

	}
	catch (e) { return console.log(e); }
}
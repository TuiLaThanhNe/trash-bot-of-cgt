module.exports.config = {
	name: "noprefix",
    version: "",
    hasPermssion: 0,
    credits: "Minhtien379 (Khánh Milo Fix)",
	commandCategory: "noprefix",
    description: "",
    commandCategory: ".",
    usages: ""
};

module.exports.run = function() {
}

module.exports.handleEvent = async function({ api, event, Users }) {
	
	
	if ((event.body == "Hi") || (event.body == "hi") || 
		(event.body == "Hello") || (event.body == "hello") || 
		(event.body == "Chào") || (event.body == "chào") || 
		(event.body == "Hj") || (event.body == "hj") || 
		(event.body == "Hí") || (event.body == "hí") || 
		(event.body == "Hì") || (event.body == "hì") || 
		(event.body == "Lô") || (event.body == "lô") || 
		(event.body == "Helo") || (event.body == "helo") || 
		(event.body == "Hé lô") || (event.body == "hé lô") || 
		(event.body == "Lô mn") || (event.body == "lô mn") || 
		(event.body == "Hello mn") || (event.body == "hello mn") || 
		(event.body == "Hi mn") || (event.body == "hi mn") || 
		(event.body == "Hú") || (event.body == "hú") || 
		(event.body == "Alo") || (event.body == "alo") || 
		(event.body == "Lo") || (event.body == "lo") || 
		(event.body == "Hù") || (event.body == "hù")){
		var name = (await Users.getData(event.senderID)).name;
		var job = ['Hello', 'Xin chào', 'Hi', 'Lô', 'Chào', 'Chào nè', 'Hé lô', 'Hù', 'Hú'];
			return api.sendMessage({ body : job[Math.floor(Math.random() * job.length)] + ' ' + `${name}` , mentions: [{ tag: name , id: event.senderID }]}, event.threadID, event.messageID);
	}
	
	
}

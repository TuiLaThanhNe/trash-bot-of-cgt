module.exports.config = {
	name: "setexp",
	version: "0.0.1",
	hasPermssion: 2,
	credits: "loi",
	description: "thay đổi số exp của bản thân hoặc người được tag",
	commandCategory: "Economy",
	usages: "setexp [Tag]",
	cooldowns: 5,
	info: [
		{
			key: 'Tag',
			prompt: 'Để trống hoặc tag một người nào đó, có thể tag nhiều người',
			type: 'Văn Bản',
			example: '@Mirai-chan'
		}
	]
};

module.exports.run = async function({ api, event, args, Currencies, utils, Users}) {
var mention = Object.keys(event.mentions)[0];
    var prefix = ";"
    var {body} = event;
    var kong = 0;
    			var content = body.slice(prefix.length + 9, body.length);
			var sender = content.slice(0, content.lastIndexOf(" "));
			var expSet = content.substring(content.lastIndexOf(" ") + 1);
    			if (args[0]=='me'){
    			 return api.sendMessage(`Đã thay đổi số exp của bạn thành ${expSet}`, event.threadID, async() => {await Currencies.setData(event.senderID, {exp: parseInt(expSet)})}, event.messageID);
			}
			else if(args[0]=="del"){
if (args[1] == 'me'){
			var s = event.senderID;
			const expme =(await Currencies.getData(event.senderID)).exp;
			api.sendMessage(`✅Đã xoá toàn bộ số exp của bạn\nSố exp xoá là ${expme}. 🐮`, event.threadID, async() => {await Currencies.setData(event.senderID, {exp: parseInt(kong)})});
		}	
		else if (Object.keys(event.mentions).length == 1) {
var mention = Object.keys(event.mentions);
		const expdel = (await Currencies.getData(mention)).exp;
		api.sendMessage(`✅Đã xoá toàn bộ số exp của ${event.mentions[mention].replace("@", "")}\nSố exp xoá là ${expdel}.`, event.threadID, async() => {await Currencies.setData(mention, {exp: parseInt(kong)})});
		}
		
		else return	api.sendMessage("nhập sai lệnh rùi kìa 🐮", event.threadID, event.messageID);
		}
			else if (Object.keys(event.mentions).length == 1) {
			return api.sendMessage({
				body: (`Đã thay đổi số exp của ${event.mentions[mention].replace("@", "")} thành ${expSet}`),
				mentions: [{
					tag: event.mentions[mention].replace("@", ""),
					id: parseInt(mention)
				}]
			}, event.threadID, async () => {await Currencies.setData(mention, {exp: parseInt(expSet)})});
		}
		else if(args[0]=="UID"){
		var id = args[1];
		var cut = args[2];
		let nameeee = (await Users.getData(id)).name
		   return api.sendMessage(`Đã thay đổi số exp của ${nameeee} thành ${cut}`, event.threadID, async() => {await Currencies.setData(id, {exp: parseInt(cut)})}, event.messageID);

		}
else {
	api.sendMessage("nhập sai lệnh rùi kìa 🐮", event.threadID, event.messageID)
	}
}
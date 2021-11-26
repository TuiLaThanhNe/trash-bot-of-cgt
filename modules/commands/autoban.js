module.exports.config = {
	name: "autoban",
	version: "1.0.0",
	hasPermssion: 0, 
	credits: "NTKhang",
	description: "tự động cấm người dùng nếu spam bot (random image)",
	commandCategory: "system",
	usages: "x",
	cooldowns: 5
};

module.exports. run = ({api, event}) => {
  return api.sendMessage("tự động cấm người dùng nếu spam bot ", event.threadID, event.messageID);
};

module.exports.handleEvent = async ({ Users, api, event}) => {
	const fs = require("fs-extra");
	const moment = require("moment-timezone");
	
  let { senderID, messageID, threadID } = event;
  const so_lan_spam = 3; // số lần spam, vượt quá sẽ bị ban
  const thoi_gian_spam = 10000; // 60000 millisecond (1 phút)
  const unbanAfter = 600000; // 600000 millisecond (10 phút) 
  const folderRandomImage = __dirname + "/cache/randomImgAutobanUser";
  const allImage = fs.readdirSync(folderRandomImage);
  if (!global.client.autoban) global.client.autoban = {};
  if (!global.client.autoban[senderID]) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  };
  
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = threadSetting.PREFIX || global.config.PREFIX;
	if (!event.body || event.body.indexOf(prefix) != 0) return;
	
	let dataUser = await Users.getData(senderID) || {};
	let data = dataUser.data || {};
	
	if ((global.client.autoban[senderID].timeStart + thoi_gian_spam) <= Date.now()) {
	  global.client.autoban[senderID] = {
	    timeStart: Date.now(),
	    number: 0
	  }
	}
	else {
	  global.client.autoban[senderID].number++;
	  if (global.client.autoban[senderID].number >= so_lan_spam) {
	    const time = moment.tz("Asia/Ho_Chi_minh").format("DD/MM/YYYY HH:mm:ss");
			if (data && data.banned == true) return;
			data.banned = true;
			data.reason = `spam bot ${so_lan_spam} lần/${thoi_gian_spam/60000}phút`;
			data.autoban = {
			  timeStart: Date.now(),
			  unbanAfter
			};
			data.dateAdded = time;
			await Users.setData(senderID, { data });
			global.data.userBanned.set(senderID, { reason: data.reason, dateAdded: data.dateAdded });
			global.client.autoban[senderID] = {
	      timeStart: Date.now(),
	      number: 0
	    };
  		api.sendMessage({
  		  body:"𝑰𝒅𝒐𝒍 𝒄𝒐́ 𝒖𝒊𝒅" + senderID + "\n𝑯𝒂𝒚 𝒄𝒐̀𝒏 𝒈𝒐̣𝒊 𝒍𝒂̀" + dataUser.name + `\n > 𝑩𝑨𝑵𝑵𝑬𝑫 ${unbanAfter/60000} 𝒑𝒉𝒖́𝒕 \n𝒍𝒚́ 𝒅𝒐: 𝒔𝒑𝒂𝒎 𝒃𝒐𝒕 \n> 𝑨𝒖𝒕𝒐 𝒖𝒏𝒃𝒂𝒏 𝒔𝒂𝒖 ${Math.floor(unbanAfter/60000)} 𝒑𝒉𝒖́𝒕`,
  		  attachment: fs.createReadStream(`${folderRandomImage}/${allImage[Math.floor(Math.random()*allImage.length)]}`)}, threadID, () => {
  		    setTimeout(async function() {
  		      delete data.autoban;
      	    data.banned = false;
      			data.reason = null;
      			data.dateAdded = null;
      			await Users.setData(senderID, { data });
      			global.data.userBanned.delete(senderID);
      			console.log("𝑼𝒏𝒃𝒂𝒏 𝒓 𝒏𝒉𝒂")
  		    }, unbanAfter);
  		  });
  		for (let idAdmin of global.config.ADMINBOT) {
  		  api.sendMessage("𝑰𝒅𝒐𝒍 𝒄𝒐́ 𝒖𝒊𝒅 " + senderID + "\n𝑯𝒂𝒚 𝒄𝒐̀𝒏 𝒈𝒐̣𝒊 𝒍𝒂̀ " + dataUser.name + ` 𝒗𝒊 𝒑𝒉𝒂̣𝒎 𝒔𝒑𝒂𝒎 𝒃𝒐𝒕 ${so_lan_spam} 𝒍𝒂̂̀𝒏/𝒑𝒉𝒖́𝒕 \n𝑨𝒖𝒕𝒐 𝒈𝒐̛̃ 𝒃𝒂𝒏 𝒔𝒂𝒖 ${Math.floor(unbanAfter/60000)}𝒑𝒉𝒖́𝒕\n𝑻𝒉𝒐̛̀𝒊 𝒈𝒊𝒂𝒏: ` + time, idAdmin);
		  };
	  }
	}
};

//gửi all admin
// FIX ERROR

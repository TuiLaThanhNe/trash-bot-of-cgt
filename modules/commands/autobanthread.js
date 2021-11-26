module.exports.config = {
 	name: "autobanthread",
 	version: "1.0.0",
 	hasPermssion: 0,
 	credits: "NTKhang",
 	description: "tự động cấm nhóm dùng bot nếu spam bot 10 lần/phút",
 	commandCategory: "system",
 	usages: "",
 	cooldowns: 5
 };
 
 module.exports.run = ({api, event}) => {
   api.sendMessage("auto ban thread nếu spam bot", event.threadID, event.messageID);
 };
 
 module.exports.handleEvent = async ({ Threads, api, event}) => {
   const fs = require("fs-extra");
   const moment = require("moment-timezone");
   
   let { senderID, messageID, threadID } = event;
   const so_lan_spam = 6; // số lần spam, vượt quá sẽ bị ban
   const thoi_gian_spam = 60000; // 60000 millisecond (1 phút)
   const unbanAfter = 600000; // 600000 millisecond (10 phút) 
   const folderRandomImage = __dirname + "/cache/randomImgAutobanThread";
   const allImage = fs.readdirSync(folderRandomImage);
   if (!global.client.autobanthread) global.client.autobanthread = {};
   
   if (!global.client.autobanthread[threadID]) {
     global.client.autobanthread[threadID] = {
       timeStart: Date.now(),
       number: 0
     }
   };
   
   const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
 	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
 	if (!event.body || event.body.indexOf(prefix) != 0) return;
 	
 	let dataThread = (await Threads.getData(threadID)) || {};
 	let data = dataThread.data;
 	
 	if ((global.client.autobanthread[threadID].timeStart + thoi_gian_spam) <= Date.now()) {
 	  global.client.autobanthread[threadID] = {
 	    timeStart: Date.now(),
 	    number: 0
 	  }
 	}
 	else {
 	  global.client.autobanthread[threadID].number++;
 	  if (global.client.autobanthread[threadID].number >= so_lan_spam) {
 	    const time = moment.tz("Asia/Ho_Chi_minh").format("DD/MM/YYYY HH:mm:ss");
 			if (data && data.banned == true) return;
 			data.banned = true;
 			data.reason = `spam bot ${so_lan_spam} lần/${thoi_gian_spam/60000}phút`;
 			data.dateAdded = time;
 			await Threads.setData(threadID, { data });
 			global.data.threadBanned.set(threadID, { reason: data.reason, dateAdded: data.dateAdded });
 			global.client.autobanthread[threadID] = {
 	      timeStart: Date.now(),
 	      number: 0
 	    };
 			api.sendMessage({
 			  body: `🐙 ${threadID} \n ${dataThread.threadInfo.threadName}\n> Nhóm đã bị cấm sử dụng bot \n🐙 lý do: spam bot ${so_lan_spam}lần/${thoi_gian_spam/60000}phút\n> \n🐙 Unban sau ${Math.floor(unbanAfter/60000)}phút ,hẹn gặp lại \n<bye>`,
 			  attachment: fs.createReadStream(`${folderRandomImage}/${allImage[Math.floor(Math.random()*allImage.length)]}`)
 			}, threadID, () => {
 			  setTimeout(async function() {
 			    delete data.autoban;
     	    data.banned = false;
     			data.reason = null;
     			data.dateAdded = null;
     			await Threads.setData(threadID, { data });
     			global.data.threadBanned.delete(threadID);
				api.sendMessage("🤧unban rùi nha🤧 \nđừng có mà spam bot nữa đó 🐛` gke", threadID);
 			  }, unbanAfter);
 			});
 			api.sendMessage(`🐠Đã autoban thread ${threadID} | ${dataThread.threadInfo.threadName} \n🐠Lý do spam bot ${so_lan_spam}lần/${Math.floor(thoi_gian_spam/60000)}phút\nThời gian: ${time}  \n🐠autounban sau 10p`, global.config.ADMINBOT[0]);
 	  }
 	}
 };
 
 // FIX
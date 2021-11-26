module.exports.config = {
	name: "resend",
	version: "2.0.0",
	hasPermssion: 1,
	credits: "𝐺𝑟𝑦𝑓𝑓𝑖𝑛𝑑𝑜𝑟",
	description: "Là resend thôi",
	commandCategory: "SystemS", 
	usages: "resend",
	cooldowns: 0,
  hide:true,
  dependencies: {"request":"",       
                 "fs-extra":"",
                 "axios":""
                }

};

module.exports.handleEvent = async function ({ event, api, client, Users }) {
    const request = global.nodemodule["request"];
    const axios = global.nodemodule["axios"]
    const { writeFileSync, createReadStream } = global.nodemodule["fs-extra"];
    
  let {messageID, senderID, threadID, body:content } = event;
     if (!global.logMessage) global.logMessage = new Map();	
     if (!global.data.botID) global.data.botID = api.getCurrentUserID();
  
  const thread = global.data.threadData.get(parseInt(threadID)) || {};
  
  if (typeof thread["resend"] != "undefined" && thread["resend"] == false) return;
  if (senderID == global.data.botID) return;

        
     if(event.type != "message_unsend") global.logMessage.set(messageID,{
        msgBody: content,
        attachment:event.attachments
      })
    if(event.type == "message_unsend") {
      var getMsg = global.logMessage.get(messageID);
      if(!getMsg) return;
     let name = await Users.getNameUser(senderID);
      if(getMsg.attachment[0] == undefined) return api.sendMessage(`𝑰𝒅𝒐𝒍 ${name} 𝒈𝒐̛̃ 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 𝒗𝒐̛́𝒊 𝒄𝒉𝒖́𝒏𝒈 𝒕𝒐̂𝒊 𝒂̀ :3\n\n𝑵𝒐̣̂𝒊 𝒅𝒖𝒏𝒈:\n ${getMsg.msgBody}`,threadID)
      else {
            let num = 0
            let msg = {
              body:`🦄𝑰𝒅𝒐𝒍 ${name} 𝒗𝒖̛̀𝒂 𝒈𝒐̛̃ ${getMsg.attachment.length} 𝒂̉𝒏𝒉,𝒗𝒊𝒅𝒆𝒐 𝒉𝒐𝒂̣̆𝒄 𝒈𝒊𝒇.${(getMsg.msgBody != "") ? `\n\n𝑵𝒐̣̂𝒊 𝒅𝒖𝒏𝒈: ${getMsg.msgBody}` : ""}`,
              attachment:[],
              mentions:{tag:name,id:senderID}
            }
          for (var i of getMsg.attachment) {
            num += 1;
        var getURL = await request.get(i.url);
        var pathname = getURL.uri.pathname;
        var ext = pathname.substring(pathname.lastIndexOf(".") + 1);
        var path = __dirname + `/cache/${num}.${ext}`;
        var data = (await axios.get(i.url, { responseType: 'arraybuffer' })).data;
        writeFileSync(path, Buffer.from(data, "utf-8"));
      msg.attachment.push(createReadStream(path));
  }
        api.sendMessage(msg, threadID);
        }
      }
   }

module.exports.run = async function({ api, event, Threads }) {
	const { threadID, messageID } = event;

	var data = (await Threads.getData(threadID)).data;
	
	if (typeof data["resend"] == "undefined" || data["resend"] == false) data["resend"] = true;
	else data["resend"] = false;
	
	await Threads.setData(parseInt(threadID), { data });
	global.data.threadData.set(parseInt(threadID), data);
	
	return api.sendMessage(`Đã ${(data["resend"] == true) ? "bật" : "tắt"} resend thành công!`, threadID, messageID);
}

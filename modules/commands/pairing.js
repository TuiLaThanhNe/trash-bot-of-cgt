module.exports.config = {
  name: "pairing",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MewMew",
  description: "Tìm Kiếm Nửa Kia Của Bạn",
  commandCategory: "BOXCHAT",
  usages: "[pairing/boy/girl]",
  cooldowns: 20
}
module.exports.run = async ({ api, event,args, Users }) => {
 const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  if (!args[0]) {
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let u of all) {
                if (u.gender == "MALE") {
                 if ( u != event.senderID) data.push(u.id)   
                }
                if (u.gender == "FEMALE") {
                  if ( u != event.senderID) data.push(u.id)  
              }
            }
            console.log(data)
            if (data.length == 0) return api.sendMessage("Rất tiếc!Pò hong tìm thấy nửa đời của bạn :(", event.threadID, event.messageID);
            let e = data[Math.floor(Math.random() * data.length)]
            let d = await api.getUserInfo(e);
            let a = (Math.random() * 50)+50;
            let n = d[e].name
            let b = d[e].gender
          let url = d[e].profileUrl;
            let getAvatar = (await axios.get(`https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
            fs.writeFileSync(__dirname + "/cache/avt.png", Buffer.from(getAvatar, 'utf-8'));     
            api.sendMessage({ body: `Tìm Kiếm Nửa Kia Của Bạn\nTên: ${n}\nGiới Tính: ${(b == 2) ? "Nam" : (b == 1) ? "Nữ" : "Gay"}\nMối Quan Hệ: Độc Thân (có thể)\nĐộ Phù Hợp: ${a.toFixed(2)}%\nInbox: m.me/${e}\nProfile: ${url}`,
                  attachment: fs.createReadStream(__dirname + `/cache/avt.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avt.png`), event.messageID);
  }
  else {            
    var ThreadInfo = await api.getThreadInfo(event.threadID);
    var all = ThreadInfo.userInfo
            let data = [];
      if(args[0] == "boy"){
            for (let u of all) {
        if (u.gender == "MALE") {
                if (u != event.senderID) data.push(u.id)   
                }
            }}  
     
      else if(args[0] == "girl"){
            for (let u of all) {
                if (u.gender == "FEMALE") {
                if (u != event.senderID) data.push(u.id)  
                }
            }}
            console.log(data)
            if (data.length == 0) return api.sendMessage("Rất tiếc!Pò không tìm thấy nửa đời của bạn :(", event.threadID, event.messageID);
            let e = data[Math.floor(Math.random() * data.length)]
            let d = await api.getUserInfo(e);
            let a = (Math.random() * 50)+50;
            let n = d[e].name
            let b = d[e].gender
          let url = d[e].profileUrl;
            let getAvatar = (await axios.get(`https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
            fs.writeFileSync(__dirname + "/cache/avt.png", Buffer.from(getAvatar, 'utf-8'));     
            api.sendMessage({ body: `Tìm Kiếm Nửa Kia Của Bạn\nTên: ${n}\nGiới Tính: ${(b == 2) ? "Nam" : (b == 1) ? "Nữ" : "Gay"}\nMối Quan Hệ: Độc Thân (có thể)\nĐộ Phù Hợp: ${a.toFixed(2)}%\nInbox: m.me/${e}\nProfile: ${url}`,
                  attachment: fs.createReadStream(__dirname + `/cache/avt.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avt.png`), event.messageID);}

};
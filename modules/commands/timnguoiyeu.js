module.exports.config = {
  name: "timnguoiyeu",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "BuiChiThong",
  description: "Ghép đôi với một người bất kỳ trong nhóm",
  commandCategory: "modulethong", 
  usages: "timnguoiyeu", 
  cooldowns: 0,
  dependencies: [] 
};
module.exports.run = async function({ api, event, args, Users, Threads, Currencies }) {
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];
        var data = await Currencies.getData(event.senderID);
        var money = data.money
        if(money < 500) api.sendMessage("𝑩𝒂̣𝒏 𝒄𝒂̂̀𝒏 500$ 𝒄𝒉𝒐 1 𝒍𝒂̂̀𝒏 𝒈𝒉𝒆́𝒑 \n500$ 𝒃𝒂̣𝒏 𝒄𝒐̀𝒏 𝒌𝒉𝒐̂𝒏𝒈 𝒄𝒐́ 𝒕𝒉𝒊̀ 𝒄𝒐́ 𝒏𝒈𝒊𝒖 𝒌𝒊𝒓𝒖 𝒛𝒊̀",event.threadID,event.messageID)
        else {
        var tl = ['21%', '67%', '19%', '37%', '17%', '96%', '52%', '62%', '76%', '83%', '100%', '99%', "0%", "48%"];
        var tl = tl[Math.floor(Math.random() * tl.length)];
        let dataa = await api.getUserInfo(event.senderID);
        let namee = await dataa[event.senderID].name
        let loz = await api.getThreadInfo(event.threadID);
        var emoji = loz.participantIDs;
        var id = emoji[Math.floor(Math.random() * emoji.length)];
        let data = await api.getUserInfo(id);
        let name = await data[id].name
        var arraytag = [];
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});
        api.changeNickname(`𝑵𝒈𝒖̛𝒐̛̀𝒊 𝒀𝒆̂𝒖 𝑪𝒖̉𝒂 ${name}`, event.threadID, event.senderID);
        api.changeNickname(`𝑵𝒈𝒖̛𝒐̛̀𝒊 𝒀𝒆̂𝒖 𝑪𝒖̉𝒂 ${namee}`, event.threadID, id);
        var sex = await data[id].gender;
        var gender = sex == 2 ? "Nam🧑" : sex == 1 ? "Nữ👩‍🦰" : "Trần Đức Bo";
        Currencies.setData(event.senderID, options = {money: money - 500})
        let Avatar = (await axios.get( `https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );
        let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );
        var imglove = [];
              imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
        var msg = {body: `𝑯𝒐𝒂̀𝒏 𝒕𝒉𝒂̀𝒏𝒉 𝒈𝒉𝒆́𝒑, 𝒃𝒂̣𝒏 𝒎𝒂̂́𝒕 500$ \n𝑵𝒈𝒖̛𝒐̛̀𝒊 𝒈𝒉𝒆́𝒑 𝒗𝒐̛́𝒊 𝒃𝒂̣𝒏 𝒄𝒐́ 𝒈𝒊𝒐̛́𝒊 𝒕𝒊́𝒏𝒉: ${gender}\n𝑻𝒊̉ 𝒍𝒆̣̂ 𝒉𝒐̛̣𝒑 : ${tl}\n`+name+" "+"💓"+" "+name, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID)
      }
}

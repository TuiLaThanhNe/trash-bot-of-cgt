const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "noprefix",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "manhIT",
  description: "không cần dấu lệnh",
  commandCategory: "Không cần dấu lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, args, Threads }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["chào bạn tôi là Pò", "bạn gọi tôi có việc gì?", "sao zạ", "chào cậu", "ahihi, sao nè", "có việc gì không?", "Sử dụng callad để liên lạc với admin!"];
  var rand = tl[Math.floor(Math.random() * tl.length)];

  if ((event.body.toLowerCase() == "bot ngu")) {
    data.reason = reason || null;
    data.dateAdded = time;
    global.data.threadBanned.set(idgr, { reason: data.reason, dateAdded: data.dateAdded });
    return api.sendMessage(`Nhóm ${idgr} của bạn đã bị ban, không thể sử dụng bot!, lý do chửi bot `, threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "Haha")) {
    return api.sendMessage("haha cái gì zay :<?", threadID);
  };

  if ((event.body.toLowerCase() == "@công thành") || (event.body.toLowerCase() == "@Đức")) {
    return api.sendMessage("Thành đi ngủ rùi\ntý ổng dậy tui báo nha :'>", threadID);
  };

  if ((event.body.toLowerCase() == "bot ơi") || (event.body.toLowerCase() == "bot oi")) {
    return api.sendMessage("Dạ, có em đây, yêu admin em không mà gọi <3. hmm...", threadID);
  };

  if ((event.body.toLowerCase() == "alo") || (event.body.toLowerCase() == "Alo")) {
     return api.sendMessage("chào bạn nè 🤑", threadID);
  };

  if ((event.body.toLowerCase() == "yêu pò") || (event.body.toLowerCase() == "yeu po")) {
    return api.sendMessage("Hmm... Bot ko biết yêu, yêu admin bot kia kìa :>>", threadID);
  };

  if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "Hello")) {
    return api.sendMessage("Chào bạn , chúc bạn 1 ngày mới vui vẻ nha❤️", threadID);
  };
  
  if ((event.body.toLowerCase() == "Chào") || (event.body.toLowerCase() == "chào")) {
    return api.sendMessage("có chuyện gì hong nè 🤑", threadID);
  };
  
  if ((event.body.toLowerCase() == "Ngủ") || (event.body.toLowerCase() == "ngủ")) {
    return api.sendMessage("Ngủ nhớ mơ thấy admin nha iuuuuuu❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "Hi")) {
    return api.sendMessage("pò chúc bạn ngày mới vui vẻ nha❤️", threadID);
  };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }

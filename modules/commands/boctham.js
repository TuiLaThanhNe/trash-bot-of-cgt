module.exports.config = {
  name: "boctham",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Lazic Team",
  description: "là trò chơi bốc thăm câu hỏi",
  commandCategory: "game",
  usages: "boctham",
  cooldowns: 1
};

module.exports.run = async ({ api, event, args, Users,__GLOBAL,Currencies }) => {

  const axios = require("axios");

  const fs = require("fs-extra");

  const request = require("request");
   const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
  var emoji = ["𝒏𝒉𝒂̆́𝒏 𝒗𝒔 𝑵𝒚 𝒍𝒂̀ 𝑰 𝒍𝒐𝒗𝒆 𝒚𝒐𝒖 3000 :3","𝘛𝘩𝘢́𝘤𝘩 đ𝘶́ 𝘵𝘳𝘦𝘯𝘥 𝘷𝘴 1 𝘯𝘨𝘶̛𝘰̛̀𝘪 𝘣𝘢̣𝘯 𝘲𝘶𝘦𝘯 𝘲𝘶𝘢 𝘧𝘢𝘤𝘦","𝑸𝒖𝒂 𝑳𝒖̛𝒐̛̣𝒕","Đ𝘦̂̉ 𝘈𝘷𝘵 đ𝘰̂𝘪 𝘷𝘰̛́𝘪 1 𝘯𝘨𝘶̛𝘰̛̀𝘪 𝘭𝘢̣","𝑵𝒉𝒂̆́𝒏 𝑻𝒊𝒏 𝒀𝒆̂𝒖 𝑽𝒐̛́𝒊 1 𝒏𝒈𝒖̛𝒐̛̀𝒊 𝒃𝒂̂́𝒕 𝒌𝒚̀","𝑻𝒐̉ 𝒕𝒊̀𝒏𝒉 𝒄𝒓 𝒉𝒐𝒂̣̆𝒄 1 𝒏𝒈 𝒃𝒂̂́𝒕 𝒌𝒚̀","𝑵𝒐́𝒊 1 𝒔𝒖̛̣ 𝒕𝒉𝒂̣̂𝒕","𝒔𝒉𝒐𝒘 𝒂̉𝒏𝒉 𝒄𝒖̉𝒂 1 𝒏𝒈𝒖̛𝒐̛̀𝒊 𝒃𝒂̣𝒏 đ𝒆̣𝒑 𝒏𝒉𝒂̂́𝒕","𝒄𝒂̀ 𝒌𝒉𝒊̣𝒂 1 đ𝒖̛́𝒂 𝒕𝒓𝒐𝒏𝒈 𝒈𝒓","𝑩𝒐̂́𝒄 𝒑𝒉𝒐̂́𝒕 1 đ𝒖̛́𝒂 𝒕𝒓𝒐𝒏𝒈 𝒈𝒓𝒐𝒖𝒑","𝑯𝒐̂𝒏 1 đ𝒖̛́𝒂 𝒕𝒓𝒐𝒏𝒈 𝒈𝒓𝒐𝒖𝒑 𝒃𝒂̆̀𝒏𝒈 𝒍𝒆̣̂𝒏𝒉 /𝒌𝒊𝒔𝒔 [ 𝒕𝒂𝒈 𝒏𝒐́ 𝒗𝒐̂ ]","𝑯𝒂̃𝒚 𝒏𝒐́𝒊 𝒓𝒂 1 𝒄𝒂̂𝒖 𝒏𝒐́𝒊 𝒌𝒉𝒊𝒆̂́𝒏 𝒃𝒂̣𝒏 𝒃𝒖𝒐̂̀𝒏 𝒏𝒉𝒂̂́𝒕","Đ𝒊𝒆̂̀𝒖 𝒃𝒂̂𝒚 𝒈𝒊𝒐̛̀ 𝒃𝒂̣𝒏 𝒎𝒖𝒐̂́𝒏 𝒏𝒉𝒂̂́𝒕 𝒍𝒂̀ 𝒈𝒊̀","𝑯𝒂̃𝒚 𝒏𝒐́𝒊 𝒙𝒂̂́𝒖 1 đ𝒖̛́𝒂 𝒃𝒂̣𝒏","𝒉𝒂̃𝒚 𝒌𝒆̂̉ 1 𝒗𝒊𝒆̣̂𝒄 𝒃𝒂̣𝒏 𝒕𝒖̛̀𝒏𝒈 𝒍𝒂̀𝒎 𝒌𝒉𝒊𝒆̂́𝒏 𝒎𝒏 𝒌𝒊𝒏𝒉 𝒏𝒈𝒂̣𝒄 :𝒄","𝑻𝒉𝒖̛́ 𝑲𝒉𝒊𝒆̂́𝒏 𝒃𝒂̣𝒏 𝒗𝒖𝒊 𝒏𝒉𝒂̂́𝒕 𝒍𝒂̀ 𝒈𝒊̀","𝑯𝒂̃𝒚 𝒌𝒆̂̉ 1 𝒍𝒂̂̀𝒏 𝒄𝒉𝒐̛𝒊 𝒏𝒈𝒖 𝒄𝒖̉𝒂 𝒆𝒎 😏","𝑩𝒂̣𝒏 𝒕𝒉𝒂̂́𝒚 𝒕𝒓𝒐𝒏𝒈 𝒈𝒓𝒐𝒖𝒑 𝒏𝒂̀𝒚 𝒂𝒊 𝒙𝒊𝒏𝒉 𝒏𝒉𝒂̂́𝒕 ","𝒃𝒂̣𝒏 𝒈𝒊𝒐̉𝒊 𝒎𝒐̂𝒏 𝒈𝒊̀ 𝒏𝒉𝒂̂́𝒕","𝑯𝒂̃𝒚 𝒕𝒂̣𝒐 1 𝒄𝒂̂𝒖 𝒕𝒉𝒐̛ 𝒕𝒐̉ 𝒕𝒊̀𝒏𝒉 𝒄𝒂̉ 𝒈𝒓𝒐𝒖𝒑 💁‍♂️","𝒉𝒂̃𝒚 𝒔𝒖̛̉ 𝒅𝒖̣𝒏𝒈 𝒕𝒊́𝒏𝒉 𝒄𝒉𝒂̂́𝒕 𝒎𝒐̂𝒏 𝒃𝒂̣𝒏 𝒈𝒊𝒐̉𝒊 𝒏𝒉𝒂̂́𝒕 đ𝒆̂̉ 𝒕𝒐̉ 𝒕𝒊̀𝒏𝒉 𝒈𝒓"]

  var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];
api.sendMessage(`𝑻𝒉𝒖̛̉ 𝑻𝒉𝒂́𝒄𝒉 𝑪𝒖̉𝒂` 
 + " {name} "
  .replace(/\{name}/g, nameUser) 
 + `: ${random_emoji}\n\n𝑻𝒉𝒆̂𝒎 𝒕𝒉𝒖̛̉ 𝒕𝒉𝒂́𝒄𝒉 𝒕𝒉𝒐̂𝒏𝒈 𝒒𝒖𝒂 𝒄𝒂𝒍𝒍𝒂𝒅 𝒏𝒉𝒂`, event.threadID, event.messageID);
} 
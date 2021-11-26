module.exports.config = {
  name: "tagadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Other",
  usages: "tagadmin",
  cooldowns: 1,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "none") {//id bot
    var aid = ["@Công Thành","100048760441123"];//id admin(s)
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["𝑮𝒊̀","𝑻𝒂𝒈 𝒈𝒊̀ 𝒛 🥺","𝑯𝒂̉","𝑺𝒂𝒐 𝒂́","𝑵𝒈𝒉𝒆 𝒃𝒂̣𝒏","𝑺𝒂𝒐 𝒏𝒆̀","𝑪𝒐́ 𝒈𝒊̀ 𝒉𝒐𝒏𝒈","👉👈","𝑮𝒐̣𝒊 𝒄𝒉𝒊 𝒂́","𝑵𝒐́𝒊 𝒊 𝒏𝒆̀","𝒁𝒂̣ 𝒏𝒈𝒉𝒆","𝑵𝒐́𝒊 𝒊","𝑪𝒉𝒊̣𝒏 𝒛𝒊̀ 𝒂́","𝑻𝒖𝒊 𝒏𝒈𝒉𝒆 𝒏𝒆̀","𝑵𝒐́𝒊 𝒊 , 𝒕𝒖𝒊 𝒏𝒈𝒉𝒆 𝒏𝒆̀" ,"𝑻𝒖𝒊 𝒏𝒆̀ , 𝒔𝒂𝒐 𝒂́" , "𝑵𝒈𝒉𝒆 𝒃𝒂̣𝒏 𝒐̛𝒊","𝑻𝒖𝒊 𝒏𝒆̀","𝑮𝒐̣𝒊 𝒈𝒊̀ 𝒂́","𝑮𝒐̣𝒊 𝒄𝒐́ 𝒈𝒊̀ 𝒉𝒐𝒏𝒈"];//(các) câu bot rep
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }
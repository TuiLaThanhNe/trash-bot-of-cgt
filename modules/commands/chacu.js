const request = require("request");
const fs = require("fs")

module.exports.config = {
  name: "chacu",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "DinhPhuc",
  description: "Chà cu người bạn tag",
  commandCategory: "general",                                                                                                                                                                                                       usages: "thủ dâm [tag người bạn cần thủ dâm]",
  cooldowns: 5,
};

module.exports.run = function({
  api,
  event,
  args,
  client,
  __GLOBAL
}) {
  var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
  if (!args.join(" ")) return out("Bạn chưa nhập tin nhắn");
  else
  return request('https://nekos.life/api/v2/img/feetg', (err, response, body) => {
    let picData = JSON.parse(body);                                                                                                                                                                                                   var mention = Object.keys(event.mentions)[0];
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    let tag = event.mentions[mention].replace("@", "");
    let callback = function() {
      api.sendMessage({
        body: tag + " Đang Chà Cu Ai Đó Em 🥀",
        mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
        attachment: fs.createReadStream(__dirname + `/cache/anime.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anime.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/anime.${ext}`)).on("close", callback);
  });
}
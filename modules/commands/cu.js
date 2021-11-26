const request = require('request');
const fs = require('fs')
module.exports.config = {
  name: "cù léc",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BerVer",
  description: "cù người bạn tag",
  commandCategory: "hành động",
  usages: "cù [tag người bạn cần cù]",
  cooldowns: 5,
  dependencies: ["request","fs"]
};

module.exports.run = function({
  api,
  event,
  args,
  client,
  __GLOBAL
}) {
  var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
  if (!args.join(" ")) return out("Bạn chưa Tag");
  return request('https://nekos.life/api/v2/img/tickle', (err, response, body) => {
    let picData = JSON.parse(body);
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    var mention = Object.keys(event.mentions)[0];
    let tag = event.mentions[mention].replace("@", "");
    let callback = function() {
      api.sendMessage({
        body: tag + ", Cù léc nè 😗",
        mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
        attachment: fs.createReadStream(__dirname + `/src/anime.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/src/anime.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/src/anime.${ext}`)).on("close", callback);
  });
}
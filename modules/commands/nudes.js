const request = require('request');
const fs = require('fs')

module.exports.config = {
  name: "nudes",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Hoàng ",
  description: "=))",
  commandCategory: "Hình ảnh",
  usages: "nudes",                                                                                                                                                                                                       usages: "địt [tag người bạn cần địt]",
  cooldowns: 5,
  dependencies: {
    "request": "",
  "fs": ""
}
};

module.exports.run = function({
  api,
  event,
  args,
  client,
  __GLOBAL
}) {
  return request('https://4boxvn.com/api/nude.php', (err, response, body) => {
    let picData = JSON.parse(body);                                                                                                                                                                                                   var mention = Object.keys(event.mentions)[0];
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    
    let callback = function() {
      api.sendMessage({
        body:  "ờ",
        attachment: fs.createReadStream(__dirname + `/cache/nudes.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nudes.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/nudes.${ext}`)).on("close", callback);
  });
}
module.exports.config = {
  name: "zerotwo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kanichi",
  description: "Zero Twooo",
  commandCategory: "ramdom-images",
  usages: "zerotwo",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://ztapi.kanichi01.repl.co').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `🌸Zero Two nè <3\n🌸Số ảnh hiện có: ${count} ảnh`,
            attachment: fs.createReadStream(__dirname + `/cache/zt.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/zt.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/zt.${ext}`)).on("close", callback);
      })
}

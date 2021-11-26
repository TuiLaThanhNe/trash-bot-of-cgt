module.exports.config = {
    name: "memevn",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "hoàng",
    description: "hi",
    commandCategory: "Hình ảnh",
    usages: "",
    cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
   return request('https://4boxvn.com/api/meme', (err, response, body) => {
    let picData = JSON.parse(body);                                                                                                                                                                                                   var mention = Object.keys(event.mentions)[0];
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    let callback = function () {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/meme.${ext}`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/meme.${ext}`), event.messageID);
                };
                request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/meme.${ext}`)).on("close", callback);
            })
}
const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "đấm",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "huy hoàng và hoàng",
  description: "Đá người Bạn Muốn",
  commandCategory: "Hình Ảnh",
  usages: "đấm",
  cooldowns: 5,
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
        const request = require('request')
                const fs = require('fs')
                  var mention = Object.keys(event.mentions)[0];
let tag = event.mentions[mention].replace("@", "");
        var link = [
          "https://i.imgur.com/PrTvtfk.gif",
             ];
   var callback = () => api.sendMessage({body: `${tag} Đấm Nè Đau hong 🤕` , mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
  attachment: fs.createReadStream(__dirname + "/cache/đấm.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/đấm.jpg"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/đấm.jpg")).on("close",() => callback());
   };
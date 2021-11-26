const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "bopvu2",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Dương",
  description: "Ảnh bopvu",
  commandCategory: "Hình Ảnh",
  usages: "bopvu",
  cooldowns: 0,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [    
"https://i.imgur.com/d1lrZZJ.gif",
"https://i.imgur.com/p1ZIcBn.gif",
"https://i.imgur.com/BW5mp0G.gif",
"https://i.imgur.com/1NPtQB4.gif",
"https://i.imgur.com/rx3BrA0.gif",
"https://i.imgur.com/g3GHFPW.gif",
"https://i.imgur.com/X30CJDt.gif",
"https://i.imgur.com/3MmuQNP.gif",
"https://i.imgur.com/Pckrm7n.gif",
"https://i.imgur.com/E3Pxe3e.gif",
"https://i.imgur.com/U0caak8.gif",
"https://i.imgur.com/8Lfv92n.gif",
"https://i.imgur.com/5JJy3uf.gif",
"https://i.imgur.com/Y6hDHqd.gif",

   ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
   var callback = () => api.sendMessage({body:`Bị Anh Bóp Vú Đã Không Em ` + `${tag}`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/gaixinh.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/gaixinh.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/gaixinh.jpg")).on("close",() => callback());
   }

 ////đéo có gì đâu =))(cút)
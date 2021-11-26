const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "sex",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hoàng",
  description: "Ảnh Gái 18+ Hot nhất ",
  commandCategory: "Sex",
  usages: "sex",
  cooldowns: 5,
  dependencies: {
    "request": "",
  "fs": "",
  "axios": ""
}
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
    var data = await Currencies.getData(event.senderID);
  var money = data.money
  const moneyUser = (await Currencies.getData(event.senderID)).money;
  if (500000 > moneyUser) return api.sendMessage("bạn kh đủ tiền , vui lòng thử lại sau\n <<500.000 đô 1 tấm nha>> 🐮", event.threadID, event.messageID);
    var link = [
     "https://i.imgur.com/B5ZyErb.jpg",
     "https://i.imgur.com/CrwrKlk.jpg",
     "https://i.imgur.com/tV61WsV.jpg",
     "https://i.imgur.com/66O6j1T.jpg",
     "https://i.imgur.com/R8KKRoN.jpg",
     "https://i.imgur.com/3EkVNe8.jpg",
     "https://i.imgur.com/k0jwRfs.jpg",
     "https://i.imgur.com/we4jvDp.jpg",
     "https://i.imgur.com/mISVkFC.jpg",
     "https://i.imgur.com/fQ5EHVZ.jpg",
     "https://i.imgur.com/GjbA4Ze.jpg",
     "https://i.imgur.com/dIzxU8Q.jpg",
      "https://i.imgur.com/a9o8A1a.jpg",
     "https://i.imgur.com/VwL7Nul.jpg",
     "https://i.imgur.com/tJF0xSU.jpg",
     "https://i.imgur.com/JiRhi00.jpg",
     "https://i.imgur.com/sWqCkwd.jpg",
     "https://i.imgur.com/r2usTzU.jpg",
     "https://i.imgur.com/OxhZsje.jpg",
     "https://i.imgur.com/vIBxhrD.jpg",
     "https://i.imgur.com/BJ0so5w.jpg",
     "https://i.imgur.com/vFANQJv.jpg",
     "https://i.imgur.com/9oU7z8g.jpg",
     "https://i.imgur.com/udTH3a1.jpg",
     "https://i.imgur.com/GV3WdKM.jpg",
     "https://i.imgur.com/1oYHF8W.jpg",
     "https://i.imgur.com/IjvL7BI.jpg",
     "https://i.imgur.com/gVhh9N2.jpg",
     "https://i.imgur.com/RH2zjOe.jpg",
     "https://i.imgur.com/hztZuAX.jpg",
     "https://i.imgur.com/GeVMt9o.jpg",
     "https://i.imgur.com/Q5hNjZX.jpg",
     "https://i.imgur.com/jFCU35N.jpg",
     "https://i.imgur.com/qpeaxY5.jpg",
     "https://i.imgur.com/R1g44xU.jpg",
     "https://i.imgur.com/xfxHrXL.jpg",
     "https://i.imgur.com/ph2qlIf.jpg",
     "https://i.imgur.com/eSf63Uf.jpg",
     "https://i.imgur.com/bTTq9LJ.jpg",
     "https://i.imgur.com/X0RK5T8.jpg",
     "https://i.imgur.com/LDHHAhu.jpg",
     "https://i.imgur.com/W71RsYu.jpg",
     "https://i.imgur.com/TGmFRW6.jpg",
     "https://i.imgur.com/ZyxAOIu.jpg",
     "https://i.imgur.com/Ej2b8aT.jpg",
     "https://i.imgur.com/2Vbu7Gp.jpg",
     "https://i.imgur.com/8XN7mb5.jpg",
     "https://i.imgur.com/wPb4HPU.jpg",
     "https://i.imgur.com/z6dlAn3.jpg",
     "https://i.imgur.com/hITbCDe.jpg",
     "https://i.imgur.com/EGrcRYS.jpg",
     "https://i.imgur.com/poCvruJ.jpg",
     "https://i.imgur.com/ntOZOPe.jpg",
     "https://i.imgur.com/NBqRXsf.jpg",
      "https://i.imgur.com/codSlYk.jpg",
     "https://i.imgur.com/dTsmNI6.jpg",
     ];
     Currencies.setData(event.senderID, options = {money: money - 500000})
   var callback = () =>
    api.sendMessage({
        body:`Bạn đã xem sếch và mất 500.000 Đô :3\nẢnh Gái 18+ \nSố Ảnh: 6760\n tự gỡ sau 7s 🐮`,
        attachment: fs.createReadStream(__dirname + "/cache/49.jpg")},
         event.threadID, (err, info) =>
        setTimeout(() => {api.unsendMessage(info.messageID) } , 7000));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/49.jpg")).on("close",() => callback());
   };
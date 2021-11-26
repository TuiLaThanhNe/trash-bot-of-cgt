module.exports.config = {
    name: "goiban",
    version: "1.0.2",
    hasPermssion: 1,
    credits: "JRT",
    description: "Tag liên tục 10 lần",
    commandCategory: "Nhóm",
    usages: "goiban +[@tag]",
    cooldowns: 5,
    dependencies: { }
}
 
module.exports.run = async function({ api, args, Users, event}) {
const { threadID, messageID, senderID, mentions } = event;
var mention = Object.keys(mentions)[0];
setTimeout(() =>
api.sendMessage({
   body:"Bạn đã sẵn sàng chưa vậy 🦄💜 " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID, messageID), 1000)
setTimeout(() =>
api.sendMessage("Đợi mình lấy hơi :3", threadID), 2000)
 
setTimeout(() =>
api.sendMessage("💜🦄💜🦄💜", threadID), 3000)

var a = Math.floor(Math.random() * 7);
if ( a==0 ) {
setTimeout(() =>
api.sendMessage({
   body:"Triệu hồi " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 5000)
setTimeout(() =>
api.sendMessage({
   body:"Úm ba la " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"Phép thuật winx " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "Echatic "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "Ta sẽ triệu hồi "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "Gái nhật đó mề ta rà xa rà hế "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"ề ế ề ế ê " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "Alo bạn ơiii "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "aloalo... "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"Về nhà đi con " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
}
if (a==1) {
setTimeout(() =>
api.sendMessage({
   body:"Con ở đâu về đi con ơi " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 5000)
setTimeout(() =>
api.sendMessage({
   body:"Về đi vợ con đang trông chờ " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"Về đi con giời " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "Alo lợn nghe rõ trả lời "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "chấm chấm "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "Triệu hồi "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"Alo về giảng hòa nè " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "về nhà đi con "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "Tôi nhớ bạn "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"Về đi mẹ con đang chờ " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
}
if (a==2) {
setTimeout(() =>
api.sendMessage({
   body:"Kìa con bướm vàng " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 5000)
setTimeout(() =>
api.sendMessage({
   body:"Kìa con bướm vàng " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"Xòe đôi cánh " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "Xòe đôi cánh "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "Bươm bướm bay "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "Đôi ba vòng "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"Bươm bướm bay " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "Đôi ba vòng "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "Em ngồi xem "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"Em ngồi xem " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
}
if (a==3) {
setTimeout(() =>
api.sendMessage({
   body:"bé lên ba " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 5000)
setTimeout(() =>
api.sendMessage({
   body:"bé đi mẫu giáo " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"cô thương cháu " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "vì cháu không khóc nhè "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "không khóc nhè "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "..... "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"mình quên lời r " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "bảo Thành cập nhật lại lời nha "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "còn idol này trốn đou r "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"ra đây chơi với mình đi " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
}
if (a==4) {
setTimeout(() =>
api.sendMessage({
   body:"Bạn là nhất, nhất bạn rồi. " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 5000)
setTimeout(() =>
api.sendMessage({
   body:"Rồi rồi bạn thắng, mình thua. " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"Bạn thì hay rồi. " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "Bạn mà sai thì không ai đúng hết á. "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "Xin lỗi, được chưa?. "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "Bạn quá đỉnh r, không ai làm lại bạn hết á. "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"Vâng, bạn nói gì cũng đúng. " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "Cứ cho là bạn đúng đi =)) "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "Bạn là số một "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"Mình còn sợ bạn cơ mà 👏 " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
}
if (a==5){
setTimeout(() =>
api.sendMessage({
   body:"Uống nước dừa hong? " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 5000)
setTimeout(() =>
api.sendMessage({
   body:"Uống cocacola hong? " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"ăn bánh tráng trộn hong " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "ún trà sữa hong "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "ăn gà rán hong "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "KFC hay Lotte nè "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"dậy đi ăn với mình nè " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "aloalo "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "Mình bao "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"rep mình đi , mình dắt đi ăn nè " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
}
}
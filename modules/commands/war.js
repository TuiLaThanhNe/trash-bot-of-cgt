module.exports.config = {
    name: "bolaisomayquaco",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "... - Long LTD",
    description: "War nát cái boxchat",
    commandCategory: "group",
    usages: "bolaisomayquaco",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Nghe bố mày chửi đây mấy thằng nhóc !");
setTimeout(() => {a({body: "Đ!t con mẹ chúng mày" })}, 3000);
setTimeout(() => {a({body: "Mấy thằng ranh con ra nghe bố mày chửi"})}, 5000);
setTimeout(() => {a({body: "Hiện hồn nhanh mấy con chó" })}, 7000);
setTimeout(() => {a({body: "Hiện hồn bố mày hỏi tội" })}, 9000);
setTimeout(() => {a({body: "Mấy thằng nhóc ranh thích sủa lắm à?" })}, 12000);
setTimeout(() => {a({body: "Đ!t cụ chúng mày nữa" })}, 15000);
setTimeout(() => {a({body: "Cho bố mày xin cái tuổi coi m tới đâu rồi" })}, 17000);
setTimeout(() => {a({body: "Nhanh ra chửi nhau với tao" })}, 20000);
setTimeout(() => {a({body: "Mấy thằng nhóc ác vắt mũi chưa sạch bày đặt war với bố mày à?" })}, 23000);
setTimeout(() => {a({body: "đ!t mẹ mày , gáy câu t nghe nào" })}, 25000);
setTimeout(() => {a({body: "Ngon thì ẳng con mẹ lên" })}, 28500);
setTimeout(() => {a({body: "Bạn sợ tôi à , sao kh nói gì thế" })}, 31000);
setTimeout(() => {a({body: "Xin cái tuổi ăn tao phát ?" })}, 36000);
setTimeout(() => {a({body: "Ngon thì ăn bố mày đi này" })}, 39000);
setTimeout(() => {a({body: "Bố lại sợ mày quá cơ" })}, 40000);
setTimeout(() => {a({body: "Mày sợ đ dám seen tn à" })}, 41000);
setTimeout(() => {a({body: "Mở cái mồm ra , nói gì xem nào" })}, 70000);
setTimeout(() => {a({body: "Sủa con cặc, tao địt từ lỗ lồn đến lỗ nhị m nha con lồn" })}, 75000);
setTimeout(() => {a({body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy , gớm vl" })}, 80000);
setTimeout(() => {a({body: "Tao địt chắc 5 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu" })}, 85000);
setTimeout(() => {a({body: "Tao mệt rồi đéo chửi nữa"})} , 90000);
setTimeout(() => {a({body: "Nào ông chủ update lyric thì chửi tiếp nhé" })}, 95000);
setTimeout(() => {a({body: "Cảm ơn bạn đã nghe mình chửi nha" })}, 100000);
setTimeout(() => {a({body: "Xin chào và hẹn gặp lại bạn ở chương trình lần sau" })}, 105000);
setTimeout(() => {a({body: "Chào tạm biệt 🥺 \nupdate lyric gửi về cho ông chủ bằng lệnh /callad +[text]"})} , 115000);




  
  }
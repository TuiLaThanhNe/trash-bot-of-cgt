module.exports.config = {
    name: "taglientuc",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "VanHung & Dựa trên demo của NTKhang ", //đi war
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "Nhóm",
    usages: "taglientuc [@tag]",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn gọi hồn", event.threadID);
    var name = (await Users.getData(mention)).name
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu tag !");
setTimeout(() => {a({body: "Alo con lợn"+" "+name, mentions: arraytag}, )} , 3000);
setTimeout(() => {a({body: "Alo alo"+" "+name, mentions: arraytag}, )} , 5000);
setTimeout(() => {a({body: "Hiện hồn"+" "+name, mentions: arraytag}, )} , 7000);
setTimeout(() => {a({body: "Ai tìm mày kìa aloo"+" "+name, mentions: arraytag}, )} , 9000);
setTimeout(() => {a({body: "Dậy đi bạn ơi"+" "+name, mentions: arraytag}, )} , 12000);
setTimeout(() => {a({body: "Hiện hồn đi con lợn này"+" "+name, mentions: arraytag}, )} , 15000);
setTimeout(() => {a({body: "Hiện hồn nhanh không người ta đốt nhà mày giờ"+" "+name, mentions: arraytag}, )} , 17000);
setTimeout(() => {a({body: "Mày đâu rồi có người tìm gấp kìa"+" "+name, mentions: arraytag}, )} , 20000);
setTimeout(() => {a({body: "Aloooooooooo trả lời đi alo alo"+" "+name, mentions: arraytag}, )} , 23000);
setTimeout(() => {a({body: "Trời tối r còn ngủ chưa dậy à"+" "+name, mentions: arraytag}, )} , 25000);
setTimeout(() => {a({body: "Kh gọi nữa mệt rồi, pai pai"+" "+name, mentions: arraytag}, )} , 28500);
setTimeout(() => {a({body: "Dỗi , dậy r thì rep tn đi"+" "+name, mentions: arraytag}, )} , 31000);
setTimeout(() => {a({body: "END."+" "+name, mentions: arraytag}, )} , 36000);
  
  }
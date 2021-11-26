module.exports.config = {
    name: "master",
    version: "1.0.0", 
    hasPermssion: 0,
    credits: "HungCatMoi",
    description: "Lien he vs Admin bot",
    commandCategory: "Info", 
    usages: "master [key]", 
    cooldowns: 0,
    dependencies: {} 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
    if (args.join() == "") {api.sendMessage("Bot hiện đang có  2 Master\n👉Sử dụng .master 1 để xem tt master 1\n👉Sử dụng .master 2 để xem tt master 2",event.threadID, event.messageID);
    }
    if (args[0] == "1") {
        return api.sendMessage("==== master 1 ====\nTên: Công Thành\nLiên hệ:\nhttps://www.facebook.com/congthanh.nhims2809", event.threadID, event.messageID);
    }
    else if (args[0] == "2") {
       return api.sendMessage("==== master 2 ====\nTên: đây là pò\n\n ahihi :3", event.threadID, event.messageID);
    }
}
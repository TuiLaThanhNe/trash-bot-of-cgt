module.exports.config = {
    name: "boxid",
    version: "1.0.0", 
    hasPermssion: 0,
    credits: "LTChi",
    description: "Lấy id box", 
    commandCategory: "group",
    usages: "boxid",
    cooldowns: 5, 
    dependencies: '',
};

module.exports.run = async function({ api, event }) {
  api.sendMessage(event.threadID, event.threadID);
};
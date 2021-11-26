module.exports.config = {
  name: "offbot",
  version: "1.0.0",
  hasPermssion: 2,
  credits: ".",
  description: "Tắt Bot.",
  commandCategory: "system",
  cooldowns: 0
         };
 module.exports.run = ({event, api}) =>api.sendMessage("Tạm biệt mọi người",event.threadID, () =>process.exit(0))
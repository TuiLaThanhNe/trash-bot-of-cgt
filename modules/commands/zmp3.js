module.exports.config = {
	name: "zmp4",	version: "1.0.0", 
	hasPermssion: 0,
	credits: "NTKhang",
	description: "tải nhạc chất lượng 320 từ Zing MP3", 
	commandCategory: "media",
	usages: "zmp3 [link]",
	cooldowns: 5, 
	dependencies: '',
};

module.exports.run = async function({ api, args, event, handleReply }) {
 const axios = require("axios");
 const fs = require("fs-extra");
 var cont = args.join(" ");
 var idmusic = cont.slice(cont.lastIndexOf("/")+1,cont.lastIndexOf("."));
  if(cont.indexOf("video-clip") == -1 && cont.indexOf("bai-hat") == -1) {api.sendMessage("Vui lòng nhập link bài hát hoặc MV của Zingmp3", event.threadID, event.messageID)};                                                    
    var getms = (await axios.get("http://api.mp3.zing.vn/api/streaming/audio/"+idmusic+"/320", {responseType: "arraybuffer"})).data;
  
    fs.writeFileSync(__dirname + "/cache/zingmp3.mp3", Buffer.from(getms, "utf-8"));
  
  api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/zingmp3.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/zingmp3.mp3"), event.messageID);
  
  
  }






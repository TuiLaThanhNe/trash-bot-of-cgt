module.exports.config = {
  name: "tiktok",
  version: "1.0.0",
  credits: "NTKhang", //pls don't edit credis
  hasPermssion: 0,
  description: "Tik Tok",
  commandCategory: "media",
  usages: " [trend] or [user] or [help]",
  cooldowns: 5,
  dependencies: {"tiktok-scraper":""},
  info: [
    {
      key: "trend",
      prompt: "test đi r biết",
      example: ".tik trend"
		},
    {
      key: "user",
      prompt: "xem thông tin user tiktok",
      example: ".tiktok user abc"
		},
    
  ]
};
module.exports.run = async function ({
  api,
  event,
  client,
  args
}) {
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  var tik = global.nodemodule["tiktok-scraper"];
  const options = {
    number: 10,
    sessionList: ['sid_tt=6345313a6662ac58966d62ea6ea22233'],
  };
  switch(args[0])
  {
  case "help":{
    var msg = "";
    var help = this.config.info;
    for(let i of help) {
      msg += `•Key: ${i.key}\n•Tác dụng: ${i.prompt}\n•Ví dụ: ${i.example}\n\n`
    }
    api.sendMessage(msg, event.threadID, event.messageID);
    break;
  }
  case "trend": {
    const posts = await tik.trend(args[1], options);
    var a = "";
    for(let i = 0; i < 10; i++) {
      a += posts.collector[i].webVideoUrl + "\n\n"
    }
    api.sendMessage(a, event.threadID, event.messageID);
    break;
  }
  case "user": {
    const user = await tik.getUserProfileInfo(args[1], options);
    try {
      var biolink = user.user.bioLink.link
    }
    catch (err) {
      var biolink = "Không có"
    };
    var linkavt = user.user.avatarLarger;
    var getavt = (await axios.get(linkavt, {
        responseType: "arraybuffer"
      })).data;
    fs.writeFileSync(__dirname + "/cache/avttik.png", Buffer.from(getavt, "utf-8"));
    api.sendMessage({
      body: `Nickname: ${user.user.nickname}
Link: https://tiktok.com/@${user.user.uniqueId}
😳Đang follow: ${user.stats.followingCount}
🥺Follower: ${user.stats.followerCount}
🤑Video đã đăng: ${user.stats.videoCount}
😎Lượt tim: ${user.stats.heart}
😳Đã tim: ${user.stats.diggCount} video
🐧-Tiểu sử: ${user.user.signature}
👻-Bio link: ${biolink}`,
      attachment: fs.createReadStream(__dirname + "/cache/avttik.png")
    }, event.threadID, (e, info) => fs.unlinkSync(__dirname + "/cache/avttik."), event.messageID);
    break;
  }
  default: {
    api.sendMessage(`Sai cú pháp! sử dụng ${global.config.PREFIX}help tiktok để xem cách dùng`, event.threadID);
    break;
  }
  // case ""
  }
};

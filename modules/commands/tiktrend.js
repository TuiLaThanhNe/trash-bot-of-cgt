  
module.exports.config = {
  name: "tiktrend",
  version: "1.0.0",
  credits: "NTKhang", //pls don't edit credis
  hasPermssion: 0,
  description: "Tik Tok",
  commandCategory: "media",
  usages: "[trend] or [user]",
  cooldowns: 5,
  dependencies: {
    "tiktok-scraper": "",
    "tiktok-scraper-without-watermark": ""
  },
  info: [
        {
key: "trend",
prompt: "test đi r biết",
type: "",
example: ",tik trend"

        },

    {

key: "user",

prompt: "xem thông tin user tiktok",

type: "",

example: ",tik user ntkhang09"

        },
    
  ]
};
module.exports.run = async function({ api, event, client, args }) {
  const fs = global.nodemodule["fs-extra"]; 
  const axios = global.nodemodule["axios"]; 
  var tik = global.nodemodule["tiktok-scraper"];
  var tik2 = global.nodemodule["tiktok-scraper-without-watermark"];
  
  
  let { body } = event,
    content = body;
  var mainchat = content.slice(5);
  //link
  var keyword = mainchat.slice(mainchat.indexOf(" ")+1);
 
  const options = {
    number: 10,
    sessionList: ['sid_tt=6345313a6662ac58966d62ea6ea22233'],
    };
  switch (args[0]) 
  {
    case "trend": {
      
      const posts = await tik.trend(keyword,options);
      var a = "";
      for(let i = 0;i < 10; i ++){
  a += posts.collector[i].webVideoUrl +"\n\n"
      }
api.sendMessage(a, event.threadID, event.messageID);
                break;
      
                }
    case "user": {
      const user = await tik.getUserProfileInfo(keyword,options);
      
try{var biolink = user.user.bioLink.link}
catch(err){var biolink = "Không có"};
 var linkavt = user.user.avatarLarger;

  var getavt = (await axios.get(linkavt, {responseType: "arraybuffer"})).data;

  

    fs.writeFileSync(__dirname + "/cache/avttik.png", Buffer.from(getavt, "utf-8")); 
      
      
api.sendMessage({body: `Nickname: ${user.user.nickname}
Link: https://tiktok.com/@${user.user.uniqueId}
Đang follow: ${user.stats.followingCount}
Follower: ${user.stats.followerCount}
Video đã đăng: ${user.stats.videoCount}
Lượt tim: ${user.stats.heart}
Đã tim: ${user.stats.diggCount} video
-Tiểu sử: ${user.user.signature}
-Bio link: ${biolink}`, attachment: fs.createReadStream(__dirname+"/cache/avttik.png")}, event.threadID, event.messageID);
      
                break;
    } 
      case "dl": {
 
const link = await tik2.ssstik(keyword);
    var linkmp4 = link.videonowm2;
  linkmp4().then(function(mp4link) {
   // console.log(linkmp4) 
        api.sendMessage(linkmp4, event.threadID)
  })
 
        
/*var getms = (await axios.get(linkmp4, {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + "/cache/tiktok.mp4", Buffer.from(getms, "utf-8"));
        
api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/tiktok.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tiktok.mp4"), event.messageID)*/;
        
        break;}
      
      
    default: {
  api.sendMessage("Sai cú pháp! sử dụng .help tik để xem", event.threadID);
      break;
    }
   // case ""
                
  }
};


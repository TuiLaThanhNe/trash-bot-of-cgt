  module.exports.config = {
  name: "toi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DinhPhuc",
  description: "Random ảnh night",
  commandCategory: "random-img",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
	var link = ["https://i.pinimg.com/originals/f8/0d/c3/f80dc37af0c07f7a3afe809a1243bf3a.jpg",
            "https://i.pinimg.com/originals/9f/e8/ff/9fe8ffa8674c276fafc05dd249523ae5.jpg",
            "https://i.pinimg.com/originals/8b/f2/18/8bf2187d7280c782990e65cebea806b0.jpg",
            "https://i.pinimg.com/originals/e0/a8/c7/e0a8c7f0b1d9556ea0ae8a79a12a0b0a.jpg",
            "https://i.pinimg.com/originals/2a/02/99/2a0299329fd7cad746e287d99a6c5bf2.jpg",
           "https://i.pinimg.com/originals/7f/85/1c/7f851c445ecd40310b12ec1f310d24d5.jpg",
            "https://i.pinimg.com/originals/42/ed/6a/42ed6ad1b19b177465a3dbb0903daa05.jpg",
            "https://i.pinimg.com/originals/ad/3c/98/ad3c98b3d6002dea9552da44aae33401.jpg",
            "https://i.pinimg.com/originals/15/ff/e8/15ffe80275c7de1234abf47ffb29d43c.jpg",
            "https://s199.imacdn.com/ta/2019/04/20/d6e8b7db0329839d_a158a94ad46fb5fb_15247015557163522154671.jpg",
            "https://i.pinimg.com/originals/f5/b6/a8/f5b6a8e1b33b68522ebaa7dfdc3b7268.jpg",
            "https://img4.thuthuatphanmem.vn/uploads/2020/08/04/hoa-anh-dao-anime-buoi-dem_102150285.jpg",
            "https://i.pinimg.com/originals/db/68/ed/db68ed9d76cf885a05a5c2017d03d01c.jpg",
            "https://a-static.besthdwallpaper.com/thanh-pho-ve-dem-hinh-nen-2400x1350-25174_50.jpg"
 ];
	 var callback = () => api.sendMessage({body:`Ảnh buổi tối\nSố ảnh hiện có: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
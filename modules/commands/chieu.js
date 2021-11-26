  module.exports.config = {
  name: "chieu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DinhPhuc",
  description: "Random ảnh apternoon",
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
	var link = ["https://i.pinimg.com/originals/1e/42/04/1e4204d637896940bfba410485068024.jpg",
            "https://i.pinimg.com/originals/7b/a6/61/7ba661c7a00180853a719641712d8bbc.jpg",
            "https://i.pinimg.com/236x/32/1d/fc/321dfc3269e26e48614442c0d66f2575.jpg",
            "https://i.pinimg.com/236x/8d/95/b1/8d95b17703bce864d84ce874181004bd.jpg",
           "https://i.pinimg.com/originals/31/74/f2/3174f2707eb706b45524d34826d9db73.jpg",
            "https://i.pinimg.com/originals/c4/6e/14/c46e14a00339f9d6288bcf80ca4cc64d.jpg",
            "https://i.pinimg.com/originals/75/1f/e3/751fe387da11d5d83d3301d2d28001fb.jpg",
            "https://i.pinimg.com/originals/fa/60/d7/fa60d7fe3837bd8222c581d1548af7be.jpg",
            "https://i.pinimg.com/originals/58/d3/38/58d338d8a18a958d5ad6491e753a0fd7.png",
            "https://i.pinimg.com/originals/fa/76/d6/fa76d647a7a534c69dc4cce13afea563.jpg"
 ];
	 var callback = () => api.sendMessage({body:`Ảnh buổi chiều\nSố ảnh hiện có: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
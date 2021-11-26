  module.exports.config = {
  name: "sáng",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DinhPhuc",
  description: "Random ảnh morning",
  commandCategory: "random-img",
  usages: "sáng",
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
	var link = ["https://i.pinimg.com/originals/3a/ec/ca/3aeccaca37b026fbdb982f9f52ac202a.jpg",
           "https://i.pinimg.com/originals/a3/06/7d/a3067db8cc83e0ebc0cae5dc5b713d62.jpg",
           "https://i.pinimg.com/originals/11/f8/4f/11f84f85842b375b4694f1935b7d387a.jpg",
           "https://i.pinimg.com/originals/28/ad/39/28ad393f4497f2a22ab51398bc4662f1.jpg",
          "https://i.pinimg.com/originals/b3/70/8a/b3708a8569aca186de5b803c17862467.jpg",
           "https://i.pinimg.com/originals/5f/71/9e/5f719e32eee57622dfccd201d83a9cee.jpg",
           "https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-anime-phong-canh-hoa-anh-dao-dep.jpg",
           "https://i.pinimg.com/originals/c3/87/dd/c387dd8ece1fecfddddb66fb9b39c15f.jpg",
           "https://i.pinimg.com/originals/be/38/10/be381034b1f3ab8d3515374111ab1ac9.jpg",
           "https://i.pinimg.com/originals/85/01/99/85019951490fcb86fab550bab6a710e1.jpg",
            "https://i.pinimg.com/originals/bf/05/fd/bf05fd52238f462b5e61b3b7f8218616.jpg",
            "https://i.pinimg.com/originals/b2/e5/04/b2e50455f1e067d04db8c1c74b7e7e50.jpg",
            "https://i.pinimg.com/236x/cd/e3/5e/cde35eb0a926dfe4b7dd7522aad84a46.jpg",
            "https://i.pinimg.com/originals/04/9f/fa/049ffad57b5110a6348ded84f745cc59.jpg",
            "https://i.pinimg.com/originals/fd/45/ef/fd45efc95933b635687fb5742b28e77d.jpg",
 ];
	 var callback = () => api.sendMessage({body:`Ảnh buổi sáng\nSố ảnh hiện có: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
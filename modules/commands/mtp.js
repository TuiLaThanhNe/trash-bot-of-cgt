const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "sontung",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Ảnh Sơn Tùng",
  commandCategory: "Hình Ảnh",
  usages: "sontung",
  cooldowns: 5,
  dependencies: ["request","fs","axios"]
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = ["https://2.pik.vn/20210856e7fc-dc88-4bcf-96dd-b46c6a77868b.jpg",
"https://2.pik.vn/20213073dca8-cd46-40d3-b39f-3686ef9a551d.jpg",
"https://2.pik.vn/20214b4e737c-aae7-4fe7-bbea-a5a6af0f8bbd.jpg",
"https://2.pik.vn/2021ede35415-5b91-403c-9895-5bbaef71cd0f.jpg",
"https://2.pik.vn/20215e4e1d88-30b0-4029-85ee-815f2c42db46.jpg",
"https://2.pik.vn/20217c53b5a3-95a5-4f73-97a6-628e38d268ea.jpg",
"https://2.pik.vn/20219b2a66c1-9f44-4438-94e5-107a09061c4e.jpg",
"https://2.pik.vn/2021a6fcf9ca-24d5-431d-88dd-598622240b0d.jpg",
"https://2.pik.vn/2021371932b0-7195-490e-b02e-c8a01d131af5.jpg",
"https://2.pik.vn/20213fa1d448-0ecc-4dd6-b08c-b7b82767dd16.jpg",
"https://2.pik.vn/2021c9cca475-c54a-4371-b2ed-9c45a40d2f28.jpg",
"https://2.pik.vn/2021ec952020-bea3-4b9b-86c3-ff186427fd8b.jpg",
"https://2.pik.vn/202177e4c123-028e-4ffc-9695-bdfd2331c1fb.png",
"https://2.pik.vn/2021d65563ec-b48a-4a71-842e-7dd0fb662d23.png",
"https://2.pik.vn/2021ac06737c-281d-40b3-9899-7efc4f37ff2b.jpg",
"https://2.pik.vn/20216712c21a-4a4b-4fa7-af33-e432e274dce3.jpg",
"https://2.pik.vn/2021e8758508-b6f8-42d8-bcae-252b82ad4fcc.png",];
  var callback = () => api.sendMessage({body:`DATA\nPhotos: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/28.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/28.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/28.jpg")).on("close",() => callback());
   };
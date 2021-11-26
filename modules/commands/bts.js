const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "bts",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Ảnh BTS",
  commandCategory: "Hình Ảnh",
  usages: "bts",
  cooldowns: 5,
  dependencies: ["request","fs","axios"]
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = ["https://2.pik.vn/2021b052bcd0-8031-4868-8b61-5fc63d29f1be.jpg",
"https://2.pik.vn/20210d7db329-0330-4cff-8e82-54a9a6c71d7a.jpg",
"https://2.pik.vn/20215d7bd5d4-1191-4d22-a1f2-a503eff6e035.jpg",
"https://2.pik.vn/202147acdf8d-ad5a-4bb8-adca-e556072fccde.jpg",
"https://2.pik.vn/20214687237e-a2fc-4e80-aae1-e13870835937.jpg",
"https://2.pik.vn/20214e55cb05-75f7-442d-b338-ba727016197c.jpg",
"https://2.pik.vn/2021a7af92e9-cb77-4907-96c5-6f284378597f.jpg",
"https://2.pik.vn/20216b1933ab-de77-4635-8775-997e41e7fd15.jpg",
"https://2.pik.vn/2021746fbe6e-2aa3-425a-95fb-c4c1e2e1fb4a.jpg",
"https://2.pik.vn/20217b82c864-f7d9-4086-87b0-7051576f6b99.jpg",
"https://2.pik.vn/202127970fde-1f2b-4493-a2e5-2e76e58fc402.jpg",
"https://2.pik.vn/2021cf77edea-2853-48c6-a1c0-a09fbaac1965.jpg",
"https://2.pik.vn/2021cbea23e4-8f66-4175-b24f-820324427b9a.jpg",
"https://2.pik.vn/2021e4bd9047-b70d-4020-a7eb-a654638fc311.jpg",
"https://2.pik.vn/20216e4073ca-8748-4c87-aec4-2c31e1765310.jpg",
"https://2.pik.vn/20213c675ed3-f4a1-4a86-ba99-6202550170ca.jpg",
"https://2.pik.vn/20213b21f9b2-2fa7-493b-8118-3520cf6a33c4.jpg",
"https://2.pik.vn/20213077bba3-5551-452b-8f16-133bc6a49bbe.jpg",
"https://2.pik.vn/20210b2472e0-0c37-43ec-81b1-6b62af0b3b6f.jpg",
"https://2.pik.vn/2021d033a648-d5cc-41f1-be89-7edba71ca911.jpg",
"https://2.pik.vn/202121d41b26-126d-41da-9a5d-d28a0403cd41.jpg",
"https://2.pik.vn/2021d39227de-f39d-419b-a5d1-876f2e3d24db.jpg",
"https://2.pik.vn/2021d1e4d0d9-8516-47dc-879b-bbf7d9582cf3.jpg",
"https://2.pik.vn/20215fd7cd24-466e-4d31-aee7-a57353d93aaa.jpg",
"https://2.pik.vn/202162e10a08-cbc4-476c-bb92-88deb19fe361.jpg",
"https://2.pik.vn/20218c7e82a8-1957-4b7f-9349-708d9c79b19c.jpg",
"https://2.pik.vn/20215bcbaae1-7cfe-41d3-9b8f-1987242ccb75.jpg",
"https://2.pik.vn/2021ef311a31-0df7-4d31-9714-73fca9001611.jpg",
"https://2.pik.vn/2021ad951db6-d010-4867-9f26-605f8dd7a5b4.jpg",
"https://2.pik.vn/20210732b2aa-ca07-4f41-becb-702e299da8dd.jpg",
"https://2.pik.vn/2021ea61ea5e-9636-4f16-b12c-8ee6f756fcfe.jpg",
"https://2.pik.vn/20213617a12e-2baf-4d43-9886-3bc9c4793267.jpg",];
  var callback = () => api.sendMessage({body:`DATA\nPhotos: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/28.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/28.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/28.jpg")).on("close",() => callback());
   };
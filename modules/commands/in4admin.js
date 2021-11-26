const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "in4admin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HelyT",
  description: "Kiểm tra thông tin ngơời dùng.",
  commandCategory: "Info",
  usages: "in4admin",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({api,event,args,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
  {body:`ADMIN
  \n👀 Tên:trần duy công thành <owner>
  \n❎ Tuổi: 17
  \n👤 😶 Giới tính: Nam
  \n💫 stk :0501 1633 2385 <<sacombank>>
  \n💘 momo :0987664301
  \n😎 paypal :congthanh28924@gmail.com
  \n🤔 gmail:congthanh28924@gmail.com
  \n👫 zalo:0987664301
  \n🌸 <<<ĐỪNG TOXIC VỚI PÒ NHA>>> 
  \nFacebook : https://www.facebook.com/congthanh.nhims2809`,
 };
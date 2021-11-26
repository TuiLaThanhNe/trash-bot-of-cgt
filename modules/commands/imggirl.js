module.exports.config = {
  name: "imggirl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JustGon", //Giữ Credit tôn trọng thằng làm ra
  description: "request ảnh",
  commandCategory: "random-img",
  usages: "[tag]",
  cooldowns: 5,
  dependencies: {
    "axios": "",
  }
};
module.exports.run = async function ({ event, api, args }) {
  const { threadID, messageID } = event;
  //chatfuel là dạng [{"type":"girl","data":"https://i.ibb.co/dL83x1T/cj-14.jpg"}] có ngoặc [ ]


  var reply = {
    body: "Gái xinh Việt Nam <3",
    attachment: (await global.nodemodule["axios"]({
      url: (await global.nodemodule["axios"]('https://api.ditlolichapfbi.tk/image?type=girl')).data.data, //Nếu api dạng chatfuel thì là .data[0].data '-'
      method: "GET",
      responseType: "stream"
    })).data

  }
  return api.sendMessage(reply, threadID, messageID);

}
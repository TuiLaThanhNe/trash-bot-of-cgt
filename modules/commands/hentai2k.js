const axios = require('axios');
const request = require('request');
const fs = require('fs')

module.exports.config = {
  name: "hentai2k",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "haonam",
  description: "hentai <3",
  commandCategory: "Hình ảnh",
  usages: "hentai2k",
  cooldowns: 5,
  dependencies: ["axios","fs","request"]
};

module.exports.run = function({api,event,args,client,__GLOBAL
}) {
  	var request = require("request");
var options = {
  'method': 'GET',
  'url': 'https://api.vodaybubuoi.tk/hentai.php/',
  'headers': {
  }
}
request(options, function (error, response) {
	if (error) throw new Error(error);
  var a =JSON.parse(response.body).url;
    var callback = () => api.sendMessage({
      attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
    return request(encodeURI(`${a}`)).pipe(fs.createWriteStream(__dirname + '/cache/1.png')).on('close', () => callback());
    console.log(rq)
  });
}

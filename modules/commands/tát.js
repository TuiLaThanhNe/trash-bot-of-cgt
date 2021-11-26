const request = require("request");
const fs = require("fs")
module.exports.config = {
  name: "tát",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hoàng 🥀",
  description: "Địt người bạn tag",
  commandCategory: "general",
  usages: "tát [tag người bạn cần tát]",
  cooldowns: 5,
};

module.exports.run = function({

  api,

  event,

  args,

  client,

  __GLOBAL

}) {

  var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);

  if (!args.join(" ")) return out("Bạn chưa tag một người nào đó");

  else

  return request('https://nekos.life/api/v2/img/slap', (err, response, body) => {

    let picData = JSON.parse(body);

    var mention = Object.keys(event.mentions)[0];

    let getURL = picData.url;

    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);

    let tag = event.mentions[mention].replace("@", "");

    let callback = function() {

      api.sendMessage({

        body: tag + " 𝐁𝐢̣ 𝐓𝐚́𝐭 Đ𝐚𝐮 𝐊𝐡𝐨̂𝐧𝐠 😡",

        mentions: [{

          tag: tag,

          id: Object.keys(event.mentions)[0]

        }],

        attachment: fs.createReadStream(__dirname + `/cache/anime.${ext}`)

      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anime.${ext}`), event.messageID);

    };

    request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/anime.${ext}`)).on("close", callback);

  });

}
module.exports.config = {
    name: "cadao",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "VanHung",
    description: "Ca Dao Việt Nam",
    commandCategory: "News",
    usages: "thopoem",
    cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const res = (await axios.get(`https://4boxvn.com/api/cadao`)).data;

const anh = await axios.get(`https://4boxvn.com/api/gai.php`);
var gai = anh.data.url.substring(anh.data.url.lastIndexOf(".") + 1);
let callback = async function () {
             api.sendMessage({
                body: `★ℭɑ ɗɑ❍ ҩ¡ệζ ղɑლ★:\n﹤ ${res.data} ﹥`,
                attachment: fs.createReadStream(__dirname + `/cache/gaicadao.${gai}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gaicadao.${gai}`), event.messageID);
            };
            request(anh.data.url).pipe(fs.createWriteStream(__dirname + `/cache/gaicadao.${gai}`)).on("close", callback);
}
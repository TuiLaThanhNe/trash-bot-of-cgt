module.exports.config = {
    name: "poke",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie(ké cái credit MhTuanng:))",
    description: "Xem thông tin của 1 pokemon bất kì",
    commandCategory: "Tiện ích",
    usages: "[namePoke]",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, utils  })  {
const axios = global.nodemodule['axios'];  
const request = global.nodemodule["request"];	
const namePoke = args.join(" ");
if (!namePoke) return api.sendMessage('🌻Vui lòng nhập tên 1 loài pokemon!!!', event.threadID, event.messageID)
try {
const res = await axios.get(`https://some-random-api.ml/pokedex?pokemon=${namePoke}`);
const data = res.data;
const stt = data.stats
return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=vi&dt=t&q=${data.description}`), (err, response, body) => {
        if (err) return api.sendMessage("Đã có lỗi xảy ra!", event.threadID, event.messageID);
        var retrieve = JSON.parse(body);
        var text = '';
        retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
        var fromLang = (retrieve[2] === retrieve[8][0][0]) ? retrieve[2] : retrieve[8][0][0]
return api.sendMessage(`
🦄 Tên: ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}
🍀 Hệ: ${data.type}
🍁 Thế hệ: ${data.generation}
🤍 Loài: ${data.species.join(', ')}
🖤 Nhóm trứng: ${data.egg_groups.join(', ')}
💚 Khả năng: ${data.abilities.join(', ')}
💛 Chiều cao: ${data.height}
🧡 Cân nặng: ${data.weight}
💜 Trạng thái: HP ${stt.hp}, ATK: ${stt.attack}, DEF: ${stt.defense}, Speed: ${stt.speed}
💙 Tiến hóa: ${data.family.evolutionLine.join(' => ')}
🤎 Mô tả: ${text}`, event.threadID, event.messageID)
})
} catch {
            return api.sendMessage('🌻Không tìm thấy tên pokemon!!!', event.threadID, event.messageID);
        }
}
module.exports.config = {
	name: "sinhnhatthanh",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Cthanh",
	description: "Đếm ngược tới ngày sinh nhật của admin",
	commandCategory: "other",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("sep 28, 2022 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`💚💜𝑺𝒂̆́𝒑 𝒕𝒐̛́𝒊 𝒔𝒊𝒏𝒉 𝒏𝒉𝒂̣̂𝒕 𝒕𝒖𝒊 𝒓𝒖̀𝒊 𝒏𝒆̀💜💚\n${days} 𝒏𝒈𝒂̀𝒚\n${hours} 𝒕𝒊𝒆̂́𝒏𝒈\n${minutes} 𝒑𝒉𝒖́𝒕\n${seconds} 𝒈𝒊𝒂̂𝒚 `, event.threadID, event.messageID);
}
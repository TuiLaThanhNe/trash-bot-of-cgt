//module cho mấy thằng lười đăng ký api
module.exports.config = {
    name: "covid",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "JustGon", //Giữ Credit tôn trọng thằng làm ra
    description: "Lấy thông tin tình hình dịch covid",
    commandCategory: "covid",
    usages: "[country]",
    cooldowns: 5,
    dependencies: {
    }
};
module.exports.run = async function ({ event, api, args }) {
    var axios = require("axios");
    var fs = require("fs")
    var request = require("request")
    if (!args[0]) {
    let { data } = await axios.get('https://disease.sh/v3/covid-19/countries/vietnam')
    var nhiemvn = data.cases,
        chetvn = data.deaths,
        khoibenh = data.recovered,
        xetnhiem = data.tests
        danso = data.population,
        chauluc = data.continent
        flag = data.countryInfo.flag
        api.sendMessage({
            body: '❄𝓥𝓲𝓮̣̂𝓽 𝓝𝓪𝓶❄\n' + `🤍𝑵𝒉𝒊𝒆̂̃𝒎: ${nhiemvn}\n` + `💜𝑻𝒖̛̉ 𝒗𝒐𝒏𝒈: ${chetvn}\n` + `💙𝑲𝒉𝒐̉𝒊 𝒃𝒆̣̂𝒏𝒉: ${khoibenh}\n` + `💚𝑿𝒆́𝒕 𝒏𝒈𝒉𝒊𝒆̣̂𝒎: ${xetnhiem}\n` + `💛𝑫𝒂̂𝒏 𝒔𝒐̂́: ${danso}\n` + `🧡𝑪𝒉𝒂̂𝒖 𝑳𝒖̣𝒄: ${chauluc}\n`,
            attachment: (await axios({
                url: flag,
                method: "GET", 
                responseType: "stream"
            })).data
        }, event.threadID ,event.messageID);
    } else {
    try {
        var location = args.join(" ")
        let { data } = await axios.get(`https://disease.sh/v3/covid-19/countries/${location}`)
        var nhiemvn = data.cases,
        chetvn = data.deaths,
        khoibenh = data.recovered,
        xetnhiem = data.tests
        danso = data.population,
        chauluc = data.continent
        flag = data.countryInfo.flag
        api.sendMessage({
            body: `❄${data.country}❄\n` + `🤍𝑵𝒉𝒊𝒆̂̃𝒎 ${nhiemvn}\n` + `💜𝑻𝒖̛̉ 𝒗𝒐𝒏𝒈 ${chetvn}\n` + `💙𝑲𝒉𝒐̉𝒊 𝒃𝒆̣̂𝒏𝒉: ${khoibenh}\n` + `💚𝑿𝒆́𝒕 𝒏𝒈𝒉𝒊𝒆̣̂𝒎: ${xetnhiem}\n` + `💛𝑫𝒂̂𝒏 𝒔𝒐̂́: ${danso}\n` + `🧡𝑪𝒉𝒂̂𝒖 𝑳𝒖̣𝒄: ${chauluc}\n`,
            attachment: (await axios({
                url: flag,
                method: "GET", 
                responseType: "stream"
            })).data
        }, event.threadID ,event.messageID);
    } catch {
    api.sendMessage("𝑪𝒐𝒖𝒏𝒕𝒓𝒚 𝒏𝒐𝒕 𝒇𝒐𝒖𝒏𝒅 𝒐𝒓 𝒅𝒐𝒆𝒔𝒏'𝒕 𝒉𝒂𝒗𝒆 𝒂𝒏𝒚 𝒄𝒂𝒔𝒆𝒔", event.threadID, event.messageID)
    }
    }
}


/*
* @Module made by DuyVuong
* @No edit credits
* @Ban user edit credits
*/
module.exports.config = {
  name: "baucuasource",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "DuyVuong",
  description: "Game bầu cua có đặt cược </> Coder by DuyVuong",
  commandCategory: "economy",
  usages: "<[gà/tôm/bầu/cua/cá/nai] hoặc[🐓/🦞/🍐/🦀/🐟/🦌]> <Số tiền cược (lưu ý phải trên 50$)>",
  cooldowns: 0
};

module.exports.run = async function({ api, event, args, Currencies, getText, permssion }) {
  try {
    const { threadID, messageID, senderID } = event;
    const { getData, increaseMoney, decreaseMoney } = Currencies;
    const request = require('request');
    const axios = require('axios');
    if (this.config.credits != 'DuyVuong') {
      return api.sendMessage('[ WARN ] Phát hiện người điều hành bot ' + global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"', event.threadID, event.messageID);
    }
    const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream } = require("fs-extra");
    const slotItems = ["gà", "tôm", "bầu", "cua", "cá", "nai"];
    const money = (await getData(senderID)).money;
    if (isNaN(args[1]) == true) return api.sendMessage('𝑵𝒐̣̂𝒊 𝒅𝒖𝒏𝒈 "𝑺𝒐̂́ 𝒕𝒊𝒆̂̀𝒏 𝒄𝒖̛𝒐̛̣𝒄" 𝒎𝒂̀ 𝒃𝒂̣𝒏 𝒏𝒉𝒂̣̂𝒑 𝒌𝒉𝒐̂𝒏𝒈 𝒑𝒉𝒂̉𝒊 1 𝒄𝒐𝒏 𝒔𝒐̂́ 𝒉𝒐̛̣𝒑 𝒍𝒆̣̂!', threadID, messageID)
    else {
    var moneyBet = parseInt(args[1]);
    if (isNaN(moneyBet) || moneyBet <= 50) return api.sendMessage('𝑺𝒐̂́ 𝒕𝒊𝒆̂̀𝒏 đ𝒂̣̆𝒕 𝒄𝒖̛𝒐̛̣𝒄 𝒌𝒉𝒐̂𝒏𝒈 𝒅𝒖̛𝒐̛́𝒊 50$', threadID, messageID);
    if (moneyBet > money) return api.sendMessage('𝑻𝒂̀𝒊 𝒌𝒉𝒐𝒂̉𝒏 𝒄𝒖̉𝒂 𝒃𝒂̣𝒏 𝒑𝒉𝒂̉𝒊 𝒏𝒉𝒊𝒆̂̀𝒖 𝒉𝒐̛𝒏 𝒔𝒐̂́ 𝒕𝒊𝒆̂̀𝒏 𝒄𝒖̛𝒐̛̣𝒄', threadID, messageID);
    var number = [], list = [], listimg = [], win = false;
    var baucua1 = slotItems[Math.floor(Math.random() * slotItems.length)];
    var baucua2 = slotItems[Math.floor(Math.random() * slotItems.length)];
    var baucua3 = slotItems[Math.floor(Math.random() * slotItems.length)];
    // ARGS
    let content = args[0];
    var content1;
    if (content == 'gà' || content == '🐓') {
      content1 = 'ga';
    }
    else if (content == 'tôm' || content == '🦞') {
      content1 = 'tom';
    }
    else if (content == 'bầu' || content == '🍐') {
      content1 == 'bau';
    }
    else if (content == 'cua' || content == '🦀') {
      content1 = 'cua';
    }
    else if (content == 'cá' || content == '🐟') {
      content1 = 'ca';
    }
    else if (content == 'nai' || content == '🦌') {
      content1 = 'nai';
    }
    else {
      return api.sendMessage(`Sai định dạng\n${global.config.PREFIX}${this.config.name} <[gà/tôm/bầu/cua/cá/nai] hoặc[🐓/🦞/🍐/🦀/🐟/🦌]> <Số tiền cược (lưu ý phải trên 50$)>`, threadID, messageID);
    }
    // request
    if (!existsSync(__dirname + '/cache/ga.jpg')) {
      request('https://i.imgur.com/lqVSFSi.jpg').pipe(createWriteStream(__dirname + '/cache/ga.jpg'));
    }
    if (!existsSync(__dirname + '/cache/tom.jpg')) {
      request('https://i.imgur.com/Maw3xlB.jpg').pipe(createWriteStream(__dirname + '/cache/tom.jpg'));
    }
    if (!existsSync(__dirname + '/cache/bau.jpg')) {
      request('https://i.imgur.com/m5I7bMw.jpg').pipe(createWriteStream(__dirname + '/cache/bau.jpg'));
    }
    if (!existsSync(__dirname + '/cache/cua.jpg')) {
      request('https://i.imgur.com/dZ3lwyV.jpg').pipe(createWriteStream(__dirname + '/cache/cua.jpg'));
    }
    if (!existsSync(__dirname + '/cache/ca.jpg')) {
      request('https://i.imgur.com/GrkpDYt.jpg').pipe(createWriteStream(__dirname + '/cache/ca.jpg'));
    }
    if (!existsSync(__dirname + '/cache/nai.jpg')) {
      request('https://i.imgur.com/yOrp8Pz.jpg').pipe(createWriteStream(__dirname + '/cache/nai.jpg'));
    }
    if (!existsSync(__dirname + '/cache/baucua.gif')) {
      request('https://i.imgur.com/BZ211jO.gif').pipe(createWriteStream(__dirname + '/cache/baucua.gif'));
    }
    // baucua 1
    if (baucua1 == 'gà') {
      var bau1 = 'ga';
      var bau_1 = __dirname + '/cache/ga.jpg';
    }
    else if (baucua1 == 'tôm') {
      var bau1 = 'tom';
      var bau_1 = __dirname + '/cache/tom.jpg';
    }
    else if (baucua1 == 'bầu') {
      var bau1 = 'bau';
      var bau_1 = __dirname + '/cache/bau.jpg';
    }
    else if (baucua1 == 'cua') {
      var bau1 = 'cua';
      var bau_1 = __dirname + '/cache/cua.jpg';
    }
    else if (baucua1 == 'cá') {
      var bau1 = 'ca';
      var bau_1 = __dirname + '/cache/ca.jpg';
    }
    else if (baucua1 == 'nai') {
      var bau1 = 'nai';
      var bau_1 = __dirname + '/cache/nai.jpg';
    }
    // baucua 2
    if (baucua2 == 'gà') {
      var bau2 = 'ga';
      var bau_2 = __dirname + '/cache/ga.jpg';
    }
    else if (baucua2 == 'tôm') {
      var bau2 = 'tom';
      var bau_2 = __dirname + '/cache/tom.jpg';
    }
    else if (baucua2 == 'bầu') {
      var bau2 = 'bau';
      var bau_2 = __dirname + '/cache/bau.jpg';
    }
    else if (baucua2 == 'cua') {
      var bau2 = 'cua';
      var bau_2 = __dirname + '/cache/cua.jpg';
    }
    else if (baucua2 == 'cá') {
      var bau2 = 'ca';
      var bau_2 = __dirname + '/cache/ca.jpg';
    }
    else if (baucua2 == 'nai') {
      var bau2 = 'nai';
      var bau_2 = __dirname + '/cache/nai.jpg';
    }
    // baucua 3
    if (baucua3 == 'gà') {
      var bau3 = 'ga';
      var bau_3 = __dirname + '/cache/ga.jpg';
    }
    else if (baucua3 == 'tôm') {
      var bau3 = 'tom';
      var bau_3 = __dirname + '/cache/tom.jpg';
    }
    else if (baucua3 == 'bầu') {
      var bau3 = 'bau';
      var bau_3 = __dirname + '/cache/bau.jpg';
    }
    else if (baucua3 == 'cua') {
      var bau3 = 'cua';
      var bau_3 = __dirname + '/cache/cua.jpg';
    }
    else if (baucua3 == 'cá') {
      var bau3 = 'ca';
      var bau_3 = __dirname + '/cache/ca.jpg';
    }
    else if (baucua3 == 'nai') {
      var bau3 = 'nai';
      var bau_3 = __dirname + '/cache/nai.jpg';
    }
    // array baucua
    list.push(bau1);
    list.push(bau2);
    list.push(bau3);
    // array img
    listimg.push(createReadStream(__dirname + '/cache/' + bau1 + '.jpg'))
    listimg.push(createReadStream(__dirname + '/cache/' + bau2 + '.jpg'))
    listimg.push(createReadStream(__dirname + '/cache/' + bau3 + '.jpg'))
    // ICON
    // icon 1
    if (bau1 == 'ga') {
      var icon1 = '🐓';
    }
    else if (bau1 == 'tom') {
      var icon1 = '🦞'
    }
    else if (bau1 == 'bau') {
      var icon1 = '🍐';
    }
    else if (bau1 == 'cua') {
      var icon1 = '🦀';
    }
    else if (bau1 == 'ca') {
      var icon1 = '🐟';
    }
    else if (bau1 == 'nai') {
      var icon1 = '🦌';
    }
    // icon 2
    if (bau2 == 'ga') {
      var icon2 = '🐓';
    }
    else if (bau2 == 'tom') {
      var icon2 = '🦞'
    }
    else if (bau2 == 'bau') {
      var icon2 = '🍐';
    }
    else if (bau2 == 'cua') {
      var icon2 = '🦀';
    }
    else if (bau2 == 'ca') {
      var icon2 = '🐟';
    }
    else if (bau2 == 'nai') {
      var icon2 = '🦌';
    }
    // icon 3
    if (bau3 == 'ga') {
      var icon3 = '🐓';
    }
    else if (bau3 == 'tom') {
      var icon3 = '🦞'
    }
    else if (bau3 == 'bau') {
      var icon3 = '🍐';
    }
    else if (bau3 == 'cua') {
      var icon3 = '🦀';
    }
    else if (bau3 == 'ca') {
      var icon3 = '🐟';
    }
    else if (bau3 == 'nai') {
      var icon3 = '🦌';
    }
    // sendMessage
    api.sendMessage({
      body: '💫𝑨𝒍𝒐 𝑨𝒍𝒐 𝒄𝒐𝒏 𝒔𝒐̂́ 𝒈𝒊̀ 𝒓𝒂 𝒄𝒐𝒏 𝒔𝒐̂́ 𝒈𝒊̀ 𝒓𝒂',
      attachment: createReadStream(__dirname + '/cache/baucua.gif')
    }, threadID, (err, info) => {
      if (err) return api.sendMessage(err, threadID, messageID);
      setTimeout(() => {
        api.unsendMessage(info.messageID);
        var check = list.findIndex(i => i.toString() == content1);
        var check2 = list.includes(content1);
        //console.log(check);
        //console.log(icon1 + icon2 + icon3);
        if (check >= 0 || check2 == true) {
          return api.sendMessage({
            body: `🎇》𝑹𝒆𝒔𝒖𝒍𝒕 : ${icon1} | ${icon2} | ${icon3}\n👉𝑩𝒂̣𝒏 𝒕𝒉𝒂̆́𝒏𝒈 𝒗𝒂̀ 𝒏𝒉𝒂̣̂𝒏 đ𝒖̛𝒐̛̣𝒄 ${moneyBet * 3}$`,
            attachment: listimg
          }, threadID, () => Currencies.increaseMoney(senderID, moneyBet * 3), messageID);
        }
        else if (check < 0 || check2 == false) {
          return api.sendMessage({
            body: `🎇》𝑹𝒆𝒔𝒖𝒍𝒕 : ${icon1} | ${icon2} | ${icon3}\n👉 𝑩𝒂̣𝒏 𝒕𝒉𝒖𝒂 𝒗𝒂̀ 𝒃𝒊̣ 𝒕𝒓𝒖̛̀ ${moneyBet}$`,
            attachment: listimg
          }, threadID, () => Currencies.decreaseMoney(senderID, moneyBet), messageID);
        }
        else {
          return api.sendMessage('𝑿𝒂̉𝒚 𝒓𝒂 𝒍𝒐̂̃𝒊. 𝑻𝒉𝒖̛̉ 𝒍𝒂̣𝒊 𝒔𝒂𝒖 5𝒔', threadID, messageID);
        }
      }, 3000);
    }, messageID);
  }
}
  catch (err) {
    console.error(err);
    return api.sendMessage(err, event.threadID, event.messageID);
  }
}
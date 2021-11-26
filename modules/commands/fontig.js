module.exports.config = {
  name: "fontig",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝑪𝒐̂𝒏𝒈 𝑻𝒉𝒂̀𝒏𝒉",
  description: "𝑐ℎ𝑢𝑦𝑒̂̉𝑛 𝑓𝑜𝑛𝑡 𝑐ℎ𝑢̛̃ ( 𝑘ℎ𝑜̂𝑛𝑔 𝑑𝑎̂́𝑢 )",
  commandCategory: "game",
  usages: "fontig <nội dung>",
  cooldowns: 5
};

module.exports.run = async ({ event, api, args }) => {
 var text = args.join("");
     text = text;
       text = text.replace(/ /g, ` `)
.replace(/a/g, `𝚊`)
.replace(/b/g, `𝚋`)
.replace(/c/g, `𝚌`)
.replace(/d/g, `𝚍`)
.replace(/e/g, `𝚎`)
.replace(/f/g, `𝚏`)
.replace(/g/g, `𝚐`)
.replace(/h/g, `𝚑`)
.replace(/i/g, `𝚒`)
.replace(/j/g, `𝚓`)
.replace(/k/g, `𝚔`)
.replace(/l/g, `𝚕`)
.replace(/m/g, `𝚖`)
.replace(/n/g, `𝚗`)
.replace(/o/g, `𝚘`)
.replace(/p/g, `𝚙`)
.replace(/q/g, `𝚚`)
.replace(/r/g, `𝚛`)
.replace(/s/g, `𝚜`)
.replace(/t/g, `𝚝`)
.replace(/u/g, `𝚞`)
.replace(/v/g, `𝚟`)
.replace(/x/g, `𝚡`)
.replace(/y/g, `𝚢`)
.replace(/w/g, `𝚠`)
.replace(/z/g, `𝚣`)
.replace(/Q/g, `𝚀`)
.replace(/W/g, `𝚆`)
.replace(/E/g, `𝙴`)
.replace(/R/g, `𝚁`)
.replace(/T/g, `𝚃`)
.replace(/Y/g, `𝚈`)
.replace(/U/g, `𝚄`)
.replace(/I/g, `𝙸`)
.replace(/O/g, `𝙾`)
.replace(/P/g, `𝙿`)
.replace(/A/g, `𝙰`)
.replace(/S/g, `𝚂`)
.replace(/D/g, `𝙳`)
.replace(/F/g, `𝙵`)
.replace(/G/g, `𝙶`)
.replace(/H/g, `𝙷`)
.replace(/J/g, `𝙹`)
.replace(/K/g, `𝙺`)
.replace(/L/g, `𝙻`)
.replace(/Z/g, `𝚉`)
.replace(/X/g, `𝚇`)
.replace(/C/g, `𝙲`)
.replace(/V/g, `𝚅`)
.replace(/B/g, `𝙱`)
.replace(/N/g, `𝙽`)
.replace(/M/g, `𝙼`)
.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, " ");
var arr = text.replace("\n", "").split("\n").filter(item => item.length != 0);
var num = (arr.length/6)-1;
var main = arr.slice(0,6);
var extra = arr.splice(6);
var msg = "";
var mainlength = main.length;
for(let i = 0; i < mainlength; i++) {
  var txt = main[i];
  for(let o = 0; o < num; o++) {
    txt += extra[i+(o*6)];
  }
  msg += txt+"\n";
}
return api.sendMessage(msg+""+"🦄💜 𝑪𝒐̂𝒏𝒈 𝑻𝒉𝒂̀𝒏𝒉 💜🦄", event.threadID, event.messageID);
}
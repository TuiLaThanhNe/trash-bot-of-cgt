module.exports.config = {
    name: "bannerbw",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "HĐGN convert từ Goat",
    description: "<name> | <facebook> | <phone> | <mail> | <location> | [<link ảnh/reply>",
    commandCategory: "Tiện ích",
    usages: "",
    cooldowns: 5,
    envConfig: {
        APIKEY: "ntkhang" 
    }
};

module.exports.run = async function ({
    api,
    event,
    args
}) {
const _0xfb2ebe=_0x4c04;(function(_0x21b989,_0x26fe35){const _0x42fd50=_0x4c04,_0x1ed3a0=_0x21b989();while(!![]){try{const _0x44b657=-parseInt(_0x42fd50(0xea))/0x1+parseInt(_0x42fd50(0xe6))/0x2+-parseInt(_0x42fd50(0xd7))/0x3+-parseInt(_0x42fd50(0xd2))/0x4+-parseInt(_0x42fd50(0xe5))/0x5*(parseInt(_0x42fd50(0xe4))/0x6)+parseInt(_0x42fd50(0xe1))/0x7+-parseInt(_0x42fd50(0xdc))/0x8*(-parseInt(_0x42fd50(0xd5))/0x9);if(_0x44b657===_0x26fe35)break;else _0x1ed3a0['push'](_0x1ed3a0['shift']());}catch(_0x3a3e24){_0x1ed3a0['push'](_0x1ed3a0['shift']());}}}(_0x3f57,0x56419));const {APIKEY}=global[_0xfb2ebe(0xd9)]['bannerbw'],axios=global['nodemodule'][_0xfb2ebe(0xd6)],fs=global[_0xfb2ebe(0xcc)][_0xfb2ebe(0xd3)],{threadID,messageID}=event,senderID='4',content=args[_0xfb2ebe(0xe9)]('\x20')[_0xfb2ebe(0xed)]()[_0xfb2ebe(0xe2)](/\s+/g,'\x20')[_0xfb2ebe(0xe2)](/(\s+\|)/g,'|')['replace'](/\|\s+/g,'|')[_0xfb2ebe(0xca)]('|'),apikey=APIKEY,name=content[0x0],facebook=content[0x1],phone=content[0x2],mail=content[0x3],location=content[0x4],avatarurl=event[_0xfb2ebe(0xcf)]['attachments'][0x0][_0xfb2ebe(0xdb)]||content[0x6];function _0x3f57(){const _0x55dcb1=['Vui\x20lòng\x20reply\x20hoặc\x20nhập\x20link\x20hình\x20ảnh','messageReply','parse','createReadStream','2444492KCHpfe','fs-extra','Đang\x20khởi\x20tạo\x20hình\x20ảnh,\x20vui\x20lòng\x20chờ\x20trong\x20giây\x20lát','81ALDxbR','axios','1940919pWxPpK','threadID','configModule','sendMessage','url','1395920jwkkVV','from','get','arraybuffer','now','4072649UbMgYa','replace','.jpg','1038dUMGum','1680auApxA','19412bhfKoX','unlinkSync','error','join','492394NfnngQ','response','data','trim','then','Banner\x20<3','split','writeFileSync','nodemodule','/cache/banner2'];_0x3f57=function(){return _0x55dcb1;};return _0x3f57();}if(!avatarurl)return api[_0xfb2ebe(0xda)](_0xfb2ebe(0xce),event[_0xfb2ebe(0xd8)]);function _0x4c04(_0xfde9eb,_0x2389c9){const _0x3f575e=_0x3f57();return _0x4c04=function(_0x4c0484,_0x2ac0a0){_0x4c0484=_0x4c0484-0xc9;let _0x2b100a=_0x3f575e[_0x4c0484];return _0x2b100a;},_0x4c04(_0xfde9eb,_0x2389c9);}const params={'apikey':apikey,'name':name,'facebook':facebook,'phone':phone,'mail':mail,'location':location,'avatarurl':avatarurl};for(let i in params)if(!params[i])return api[_0xfb2ebe(0xda)](SyntaxError(),event[_0xfb2ebe(0xd8)]);api[_0xfb2ebe(0xda)](_0xfb2ebe(0xd4),event[_0xfb2ebe(0xd8)]);const pathsave=__dirname+(_0xfb2ebe(0xcd)+Date[_0xfb2ebe(0xe0)]()+_0xfb2ebe(0xe3));let imageBuffer;axios[_0xfb2ebe(0xde)]('https://goatbot.tk/taoanhdep/banner-black-white',{'params':params,'responseType':_0xfb2ebe(0xdf)})[_0xfb2ebe(0xee)](_0x5b7f93=>{const _0x1830d2=_0xfb2ebe,_0x3f4a68=_0x5b7f93[_0x1830d2(0xec)];fs[_0x1830d2(0xcb)](pathsave,Buffer[_0x1830d2(0xdd)](_0x3f4a68)),api[_0x1830d2(0xda)]({'body':_0x1830d2(0xc9),'attachment':fs[_0x1830d2(0xd1)](pathsave)},event[_0x1830d2(0xd8)],()=>fs[_0x1830d2(0xe7)](pathsave),event['messageID']);})['catch'](_0x25764d=>{const _0x8ee057=_0xfb2ebe,_0x34b316=JSON[_0x8ee057(0xd0)](_0x25764d[_0x8ee057(0xeb)][_0x8ee057(0xec)]['toString']());return api[_0x8ee057(0xda)]('Đã\x20xảy\x20ra\x20lỗi\x20'+_0x34b316[_0x8ee057(0xe8)]+'\x20'+_0x34b316['message'],event[_0x8ee057(0xd8)]);});
}

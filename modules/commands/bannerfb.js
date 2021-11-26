module.exports.config = {
    name: "bannerfb",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "D-Jukie convert từ Goat",
    description: "Tạo banner",
    commandCategory: "Tiện ích",
    usages: "<facebook> | <zalo> | <phone> | <momo> | <title> | <subtitle> | <titlefacebook> | <info> | [<link ảnh/reply>",
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
 const _0x4361e7=_0x3759;(function(_0xf892e7,_0x13bd1d){const _0x368c84=_0x3759,_0x5d0f15=_0xf892e7();while(!![]){try{const _0x51db45=-parseInt(_0x368c84(0xe2))/0x1*(-parseInt(_0x368c84(0xc6))/0x2)+parseInt(_0x368c84(0xd5))/0x3*(parseInt(_0x368c84(0xd0))/0x4)+parseInt(_0x368c84(0xd1))/0x5+-parseInt(_0x368c84(0xc0))/0x6*(parseInt(_0x368c84(0xbd))/0x7)+parseInt(_0x368c84(0xc4))/0x8*(parseInt(_0x368c84(0xc5))/0x9)+-parseInt(_0x368c84(0xbb))/0xa*(-parseInt(_0x368c84(0xdb))/0xb)+-parseInt(_0x368c84(0xcc))/0xc;if(_0x51db45===_0x13bd1d)break;else _0x5d0f15['push'](_0x5d0f15['shift']());}catch(_0x103fe6){_0x5d0f15['push'](_0x5d0f15['shift']());}}}(_0x5c0a,0xab97a));const {APIKEY}=global[_0x4361e7(0xcd)][_0x4361e7(0xd9)],axios=global[_0x4361e7(0xc8)]['axios'],fs=global[_0x4361e7(0xc8)][_0x4361e7(0xd4)],{threadID,messageID}=event,senderID='4',content=args[_0x4361e7(0xdd)]('\x20')[_0x4361e7(0xcb)]()[_0x4361e7(0xd7)](/\s+/g,'\x20')['replace'](/(\s+\|)/g,'|')['replace'](/\|\s+/g,'|')[_0x4361e7(0xde)]('|'),apikey=APIKEY,facebook=content[0x0],zalo=content[0x1],phone=content[0x2],momo=content[0x3],title=content[0x4],subtitle=content[0x5],titlefacebook=content[0x6],info=content[0x7],avatarurl=event[_0x4361e7(0xce)][_0x4361e7(0xcf)][0x0][_0x4361e7(0xd3)]||content[0x8];function _0x5c0a(){const _0x16b3b3=['data','log','23032qiVEvg','2637NngcBX','2ReyoMJ','utf-8','nodemodule','sendMessage','message','trim','20909832Bujnbz','configModule','messageReply','attachments','4BpeiCK','4146630gqlgsh','parse','url','fs-extra','992544iVHKwA','/cache/banner','replace','.jpg','banner','messageID','11ukrKtV','threadID','join','split','unlinkSync','Banner\x20<3','response','204014kiKYcl','12639180uHUcPA','Vui\x20lòng\x20reply\x20hoặc\x20nhập\x20link\x20hình\x20ảnh','7bmPUjF','Đang\x20khởi\x20tạo\x20hình\x20ảnh,\x20vui\x20lòng\x20chờ\x20trong\x20giây\x20lát','Đã\x20xảy\x20ra\x20lỗi\x20','6157950tvfQib','arraybuffer'];_0x5c0a=function(){return _0x16b3b3;};return _0x5c0a();}if(!avatarurl)return api[_0x4361e7(0xc9)](_0x4361e7(0xbc),event[_0x4361e7(0xdc)]);const params={'facebook':facebook,'zalo':zalo,'phone':phone,'momo':momo,'title':title,'subtitle':subtitle,'titlefacebook':titlefacebook,'info':info,'avatarurl':avatarurl,'apikey':apikey};for(let i in params)if(!params[i])return api['sendMessage'](SyntaxError(),event[_0x4361e7(0xdc)]);function _0x3759(_0x415cca,_0x4de18c){const _0x5c0a54=_0x5c0a();return _0x3759=function(_0x375956,_0xa45d62){_0x375956=_0x375956-0xbb;let _0x3fd7be=_0x5c0a54[_0x375956];return _0x3fd7be;},_0x3759(_0x415cca,_0x4de18c);}api['sendMessage'](_0x4361e7(0xbe),event[_0x4361e7(0xdc)]);const pathsave=__dirname+(_0x4361e7(0xd6)+event['threadID']+_0x4361e7(0xd8));let imageBuffer;try{const response=await axios['get']('https://goatbot.tk/taoanhdep/banner1',{'params':params,'responseType':_0x4361e7(0xc1)});imageBuffer=response[_0x4361e7(0xc2)];}catch(_0x155e3a){console[_0x4361e7(0xc3)](_0x155e3a);const err=JSON[_0x4361e7(0xd2)](_0x155e3a[_0x4361e7(0xe1)][_0x4361e7(0xc2)]['toString']());return api[_0x4361e7(0xc9)](_0x4361e7(0xbf)+err['error']+'\x20'+err[_0x4361e7(0xca)],event[_0x4361e7(0xdc)]);}fs['writeFileSync'](pathsave,Buffer['from'](imageBuffer,_0x4361e7(0xc7))),api['sendMessage']({'body':_0x4361e7(0xe0),'attachment':fs['createReadStream'](pathsave)},event[_0x4361e7(0xdc)],()=>fs[_0x4361e7(0xdf)](pathsave),event[_0x4361e7(0xda)]);
}

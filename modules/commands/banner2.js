module.exports.config = {
    name: "banner2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie convert từ Goat",
    description: "Tạo banner",
    commandCategory: "Tiện ích",
    usages: "<description> | <facebook> | <instagram> | <phone> | <location> | <info> | [<link ảnh/reply>",
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
const _0x4f3425=_0x1763;(function(_0xd8a95d,_0x19fc47){const _0x32702d=_0x1763,_0x38c7c4=_0xd8a95d();while(!![]){try{const _0x243f55=parseInt(_0x32702d(0x203))/0x1+parseInt(_0x32702d(0x1f4))/0x2*(parseInt(_0x32702d(0x1ee))/0x3)+parseInt(_0x32702d(0x1f5))/0x4+parseInt(_0x32702d(0x1ed))/0x5*(parseInt(_0x32702d(0x200))/0x6)+parseInt(_0x32702d(0x205))/0x7*(parseInt(_0x32702d(0x1f8))/0x8)+-parseInt(_0x32702d(0x1e4))/0x9*(-parseInt(_0x32702d(0x207))/0xa)+-parseInt(_0x32702d(0x1e0))/0xb;if(_0x243f55===_0x19fc47)break;else _0x38c7c4['push'](_0x38c7c4['shift']());}catch(_0x4c2837){_0x38c7c4['push'](_0x38c7c4['shift']());}}}(_0x40ca,0xe75dd));function _0x1763(_0x45b96d,_0x59d4d3){const _0x40ca81=_0x40ca();return _0x1763=function(_0x17635d,_0xb96f37){_0x17635d=_0x17635d-0x1de;let _0x92df4f=_0x40ca81[_0x17635d];return _0x92df4f;},_0x1763(_0x45b96d,_0x59d4d3);}const {APIKEY}=global['configModule'][_0x4f3425(0x1e6)],axios=global[_0x4f3425(0x1fe)][_0x4f3425(0x201)],fs=global[_0x4f3425(0x1fe)]['fs-extra'],{threadID,messageID}=event,senderID='4',content=args[_0x4f3425(0x1fc)]('\x20')[_0x4f3425(0x1f0)]()[_0x4f3425(0x1e3)](/\s+/g,'\x20')[_0x4f3425(0x1e3)](/(\s+\|)/g,'|')[_0x4f3425(0x1e3)](/\|\s+/g,'|')[_0x4f3425(0x1f6)]('|'),apikey=APIKEY,name=content[0x0],description=content[0x1],facebook=content[0x2],instagram=content[0x3],phone=content[0x4],location=content[0x5],avatarurl=event[_0x4f3425(0x202)][_0x4f3425(0x1e1)][0x0][_0x4f3425(0x206)]||content[0x6];if(!avatarurl)return api[_0x4f3425(0x1e9)](_0x4f3425(0x1fd),event[_0x4f3425(0x1de)]);const params={'apikey':apikey,'name':name,'description':description,'facebook':facebook,'instagram':instagram,'phone':phone,'location':location,'avatarurl':avatarurl};for(let i in params)if(!params[i])return api[_0x4f3425(0x1e9)](SyntaxError(),event['threadID']);api[_0x4f3425(0x1e9)](_0x4f3425(0x1ea),event[_0x4f3425(0x1de)]);const pathsave=__dirname+(_0x4f3425(0x1ef)+Date[_0x4f3425(0x204)]()+_0x4f3425(0x1f9));function _0x40ca(){const _0x516913=['data','then','join','Vui\x20lòng\x20reply\x20hoặc\x20nhập\x20link\x20hình\x20ảnh','nodemodule','get','18eiLbWI','axios','messageReply','1828280VOTYNb','now','1855hmIUhq','url','10nNJVip','threadID','response','67475705YreVuE','attachments','createReadStream','replace','3679713FiWCys','https://goatbot.tk/taoanhdep/banner2','banner2','unlinkSync','Đã\x20xảy\x20ra\x20lỗi\x20','sendMessage','Đang\x20khởi\x20tạo\x20hình\x20ảnh,\x20vui\x20lòng\x20chờ\x20trong\x20giây\x20lát','message','toString','3055770cxXHiO','2546436KiDeXu','/cache/banner2','trim','Banner\x20<3','messageID','from','2Iztzuo','6422624HXpRUc','split','error','16808cDyhaO','.png'];_0x40ca=function(){return _0x516913;};return _0x40ca();}let imageBuffer;axios[_0x4f3425(0x1ff)](_0x4f3425(0x1e5),{'params':params,'responseType':'arraybuffer'})[_0x4f3425(0x1fb)](_0xd434af=>{const _0x125b39=_0x4f3425,_0x4636de=_0xd434af[_0x125b39(0x1fa)];fs['writeFileSync'](pathsave,Buffer[_0x125b39(0x1f3)](_0x4636de)),api[_0x125b39(0x1e9)]({'body':_0x125b39(0x1f1),'attachment':fs[_0x125b39(0x1e2)](pathsave)},event['threadID'],()=>fs[_0x125b39(0x1e7)](pathsave),event[_0x125b39(0x1f2)]);})['catch'](_0x540884=>{const _0x5eba92=_0x4f3425,_0x258caf=JSON['parse'](_0x540884[_0x5eba92(0x1df)]['data'][_0x5eba92(0x1ec)]());return api['sendMessage'](_0x5eba92(0x1e8)+_0x258caf[_0x5eba92(0x1f7)]+'\x20'+_0x258caf[_0x5eba92(0x1eb)],event[_0x5eba92(0x1de)]);});
}

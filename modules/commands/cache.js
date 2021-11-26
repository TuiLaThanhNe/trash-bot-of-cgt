module.exports.config = {
	name: "cache",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "NTKhang",
	description: "Xóa file trong thư mục cache",
	commandCategory: "Admin",
	usages: "\ncache start <text>\ncache ext <text>\ncache <text>\ncache [để trống]\ncache help\nNOTE: <text> là ký tự bạn điền vào tùy ý",
	cooldowns: 5,
};

module.exports.handleReply = ({ global, api, event, args, handleReply }) => {
	const fs = require("fs-extra");
	if(event.senderID != handleReply.author) return; 
  var arrnum = event.body.split(" ");
  var msg = "";
  var nums = arrnum.map(n => parseInt(n));

  for(let num of nums) {
  	fs.unlinkSync(__dirname+"/cache/"+handleReply.files[num-1]);
  	msg += handleReply.files[num-1]+"\n";
  }
  api.sendMessage("Đã xóa các file sau trong thư mục cache:\n\n"+msg, event.threadID, event.messageID);
}
module.exports.run = async function({ api, event, args, Threads }) {
  const fs = require("fs-extra");
  var files = fs.readdirSync(__dirname+"/cache") || [];
  var msg = "", i = 1;
  //tên file bắt đầu là...... 
  if(args[0] == "help") {
  	var info = [
		{
			key: 'start <text>',
			type: 'Lọc ra file cần xóa có ký tự bắt đầu tùy chọn',
			example: 'cache start rank'
		},
		{
			key: 'ext <text>',
			type: 'Lọc ra file cần xóa có đuôi tùy chọn',
			example: 'cache ext png'
		},
		{
			key: 'text <text>',
			type: 'lọc ra các file trong tên có text tùy chỉnh',

			example: "cache a"
		},
		{
			key: 'để trống',
			type: 'lọc ra tất cả các file trong cache',
                        example: "cache"
		},
		{
			key: 'help',
			type: 'xem cách dùng lệnh',
                        example: "cache help"
		}
	]
	var msg = "";
	info.forEach(help => msg += `•Key: ${help.key}\n•Tác dụng: ${help.type}\n•Ví dụ: ${help.example}\n\n`);
	//❎ko edit tên tác giả❎
	return api.sendMessage("👉Module code by NTKhang👈\nCách dùng lệnh:\ncache start <text>\ncache ext <text>\ncache <text>\ncache [để trống]\ncache help\nNOTE: <text> là ký tự bạn điền vào tùy ý\n"+msg, event.threadID, event.messageID);
  }
  else if(args[0] == "start" && args[1]) {
  	var word = args.slice(1).join(" ");
  	var files = files.filter(file => file.startsWith(word));
    files.forEach(file => msg += (i++)+'. '+file+'\n');
    if(!msg) return api.sendMessage(`Không có file nào trong cache có ký tự bắt đầu bằng: ${word}`, event.threadID ,event. messageID);
    var key = `Có ${files.length} file có ký tự bắt đầu là: ${word}\n`;
  }
  //đuôi file là..... 
  else if(args[0] == "ext") {
  	var ext = args[1];
  	var files = files.filter(file => file.endsWith(ext));
  	files.forEach(file => msg += (i++)+'. '+file+'\n');
  	if(!msg) return api.sendMessage(`Không có file nào trong cache có ký tự kết thúc bằng: ${ext}`, event.threadID ,event. messageID);
  	var key = `Có ${files.length} file có đuôi là: ${ext}\n`;
  }
  //all file
  else if (!args[0]) {
  files.forEach(file => msg += (i++)+'. '+file+'\n');
  if(!msg) return api.sendMessage("", event.threadID ,event. messageID);
  var key = "Tất cả các file trong cache:";
  }
  //trong tên có ký tự.....
  else {
  	var word = args.slice(0).join(" ");
  	var files = files.filter(file => file.includes(word));
  	files.forEach(file => msg += (i++)+'. '+file+'\n');
  	if(!msg) return api.sendMessage(`Không có file nào trong cache trong tên có ký tự: ${word}`, event.threadID ,event. messageID);
  	var key = `Có ${files.length} file trong tên có ký tự: ${word}`;
  }
  	
     api.sendMessage(`Reply tin nhắn bằng số để xóa file tương ứng, có thể rep nhiều số, cách nhau bằng dấu cách.\n${key}\n`+msg, event.threadID, (e, info) => global.client.handleReply.push({
  	name: this.config.name,
  	messageID: info.messageID,
        author: event.senderID,
  	files
  }))
 
}
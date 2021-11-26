module.exports.config = {
	name: "load",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "NTKhang",
	description: "load",
	commandCategory: "system",
	usages: "x",
	cooldowns: 5
};

module.exports.run = ({api, event}) => {
	try {
		
  var a = require("./autobanthread.js");
  console.log(a);
  global.client.commands.set(a.name, a);
  
	} catch(ee) {
		console.log(ee.stack);
	}
};

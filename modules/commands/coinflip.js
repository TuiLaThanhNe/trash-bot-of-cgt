module.exports.config = {
	name: "coinflip",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Sunii",
	description: "Tung đồng xu may rủi",
	commandCategory: "games",
	usages: "coinflip t 500",
	cooldowns: 10
};
module.exports.run = async function({ api, event, args, Currencies, utils }) {
        const { threadID, senderID, messageID } = event;
        let money = (await Currencies.getData(event.senderID)).money;
        var content = args.join(" ");
        if (!content) return api.sendMessage("Bạn chưa nhập thông tin đặt cược!", threadID, messageID);
        var xu = args[0];
		var moneys = args[args.length -1];
        if (isNaN(moneys) || moneys.indexOf("-") !== -1) return api.sendMessage("Số tiền đặt cược của bạn không phải là một con số, vui lòng xem lại cách sử dụng tại help cf", threadID, messageID);
				if (!moneys || !xu) return api.sendMessage("Sai format", threadID, messageID);
				if (moneys > money) return api.sendMessage("Số tiền của bạn không đủ", threadID, messageID);
				if (moneys < 50) return api.sendMessage("Số tiền đặt cược của bạn quá nhỏ, tối thiểu là 50 coin", threadID, messageID);
				var check = (num) => (num == 0) ? 'heads' : (num % 0 == 1 != 1) ? 'tails' : (num % 1 == 0 != 0);
				let random = Math.random() < 0.5;
                if (xu == "h" || xu == "heads") xu = 0;
				else if (xu == "t" || xu == "tails") xu = 1;
				else return api.sendMessage("Bạn chưa nhập thông tin cá cược!, <heads/tails>", threadID, messageID);
       if (xu == 0 && check(random) == 'heads') api.sendMessage(`Bạn đã chọn heads, bạn đã thắng với số tiền: ${moneys * 2} RP`, threadID, () => Currencies.increaseMoney(senderID, parseInt(moneys * 2)), messageID);
			 else if (xu == 1 && check(random) == 'tails') api.sendMessage(`Bạn đã chọn tails, bạn đã thắng với số tiền: ${moneys * 2} RP`, threadID, () => Currencies.increaseMoney(senderID, parseInt(moneys * 2)), messageID);
			 else api.sendMessage(`Đồng xu ra mặt ${check(random)}\nBạn đã thua và bị trừ: ${moneys} RP`, threadID, () => Currencies.decreaseMoney(senderID, money), messageID)
		};
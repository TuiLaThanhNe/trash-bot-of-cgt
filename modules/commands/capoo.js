module.exports.config = {
    name: "Capoo",
        version: "1.0.1",
        hasPermssion: 0,
        credits: "congthanh",
        description: "Capoo",
        commandCategory: "Không cần dấu lệnh",
        usages: "noprefix",
        cooldowns: 5,
    };
    module.exports.handleEvent = function({ api, event }) {
        const fs = global.nodemodule["fs-extra"];
        var { threadID, messageID } = event;
        if (event.body.indexOf("Capoo")==0 || (event.body.indexOf("capoo")==0)) {
            var msg = {
                    body: "Con mèo xanh nè :3",
                    attachment: fs.createReadStream(__dirname + `/cache/capoo/`+Math.floor(Math.random()*(3 - 1)) + 1 )
                }
                return api.sendMessage(msg, threadID, messageID);
            }
        }
        module.exports.run = function({ api, event, client, global }) {
    
    }
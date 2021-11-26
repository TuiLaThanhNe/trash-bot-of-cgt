module.exports.config = {
  name: "console",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "ManhG",
  description: "Bật tắt console",
  commandCategory: "admin",
  depndencies: { "chalk": "" },
  usages: "[on/off]",
  cooldowns: 2
};

module.exports.handleEvent = async ({ event, api, Users, Threads }) => {
  const chalk = global.nodemodule["chalk"];
  const thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["console"] !== "undefined" && thread["console"] == true) return;
  if (event.senderID == global.data.botID) return;
    var nameUser = await Users.getNameUser(event.senderID);
    var names = chalk.rgb(121,205,205)(nameUser);
    var body = event.body || "image,video or another special character";
    var red = chalk.rgb(255,106,106)("|");
    console.log(chalk.rgb(0,250,154)("Tên: ") + names + red + body)
};

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "console thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "console success!",
  }
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["console"] == "undefined" || data["console"] == true) data["console"] = false;
  else data["console"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["console"] == false) ? getText("on") : getText("off")} ${getText("successText")}`, threadID, messageID);
}
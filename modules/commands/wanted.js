module.exports.config = {
  name: "wanted",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "D-Jukie",
  description: "wanted",
  commandCategory: "Giải trí",
  usages: "",
  cooldowns: 10,
  dependencies: {
    canvas: "",
    axios: "",
    "fs-extra": "",
  },
};


module.exports.run = async function ({ api, event, args, Users }) {
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  let pathImg = __dirname + "/cache/wanted.png";
  let pathAva = __dirname + "/cache/avt.png";
  if (!args[0]) { var uid = senderID}
  if(event.type == "message_reply") { uid = event.messageReply.senderID }
  if (args.join().indexOf('@') !== -1){ var uid = Object.keys(event.mentions) } 
  let Avatar = (
    await axios.get(
      `https://graph.facebook.com/${uid}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathAva, Buffer.from(Avatar, "utf-8"));
  let getWanted = (
    await axios.get(`https://api.popcat.xyz/wanted?image=https://1.bp.blogspot.com/-nj8ADXnM8Ec/X0Ht4-TFU9I/AAAAAAAAw8k/lcoTu5I8alQra8zvzHIaRpA5pQ3La3i7ACLcBGAsYHQ/s1600/Hinh-Nen-Den%2B%252818%2529.jpg`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(getWanted, "utf-8"));
  let baseImage = await loadImage(pathImg);
  let baseAva = await loadImage(pathAva);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAva, 144, 281, 448, 448);
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAva);
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};

const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Hungcho (remake by Cthanh)",
  description: "goibot",
  commandCategory: "Không cần dấu lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  var tl = ["chào bạn tôi là bot của Thành", "Gọi tui có gì hong", "Shao zạ", "Hi, chào cậu :3", "Shao nè", "Sử dụng /callad để liên lạc với admin!", "Em là bot cute nhất hành tinh", "Nói gì thế con lợn", "Em đây~~~~", "hello...", "What'up bro", "Sao thế công chúa", "Ahihi chào cậu", "Trả 5 chục", "Cậu có cô đơn hong , có thì kệ mie cậu đồ kh có ngiu :>>", "Cho mượn 5 chục đi", "bot dthw như chủ của bot ạ", "Gì zạ" ,"Chuyện gì đó", "Đừng spam Pò nha :<<","", "Pòooooooooooooooooo", "get low , get low", "Spam cút đy", "Mệt -,-", "Nói đi , sao?"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "bot cùi")) {
    return api.sendMessage("Thành viên đã cố ý chửi bot, do đó đã vi phạm luật bot nên bot sẽ out và muốn add lại thì xin liên hệ qua admin qua Fb:https://www.facebook.com/congthanh.nhism2809 để được hỗ trợ", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "bot out")) {
    return api.sendMessage("Tạm biệt mng ><", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

   if ((event.body.toLowerCase() == "bot cút")) {
    return api.sendMessage("À ừ vậy thôi tao đi cảm ơn bọn mày trong thời gian qua cùng tao vui vẻ....vậy thôi tao đi pp ☺😊", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "/bot ngu")) {
    return api.sendMessage("Thành viên đã cố ý chửi bot, do đó đã vi phạm luật bot nên bot sẽ out và muốn add lại thì xin liên hệ qua admin qua Fb: Công Thành để được hỗ trợ\nLink fb nè: https://www.facebook.com/congthanh.nhism2809", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "bot óc chó")) {
    return api.sendMessage("Thành viên đã cố ý chửi bot, do đó đã vi phạm luật bot nên bot sẽ out và muốn add lại thì xin liên hệ qua admin qua Fb: Công Thành để được hỗ trợ\nLink fb nè:https://www.facebook.com/congthanh.nhism2809 ", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "chó") || (event.body.toLowerCase() == "dog")) {
    return api.sendMessage("Chó cute của mn đây 🐶", threadID);
  };

  if ((event.body.toLowerCase() == "ôi") || (event.body.toLowerCase() == "oi")) {
    return api.sendMessage("Ôi bạn ơi , sao đấy? ", threadID);
  };

  if ((event.body.toLowerCase() == "úi") || (event.body.toLowerCase() == "ui")) {
    return api.sendMessage("Úi gì zạ", threadID);
  };

  if ((event.body.toLowerCase() == "ơi") || (event.body.toLowerCase() == "oi")) {
    return api.sendMessage("sao nèk", threadID);
  };

  if ((event.body.toLowerCase() == "ừ") || (event.body.toLowerCase() == "u")) {
    return api.sendMessage("cục súc zạ, hong đc ừ :<<", threadID);
  };

  if ((event.body.toLowerCase() == "ừa") || (event.body.toLowerCase() == "ua")) {
    return api.sendMessage("UwU", threadID);
  };

  if ((event.body.toLowerCase() == "uk") || (event.body.toLowerCase() == "uk")) {
    return api.sendMessage("sao tke", threadID);
  };

  if ((event.body.toLowerCase() == "dạ") || (event.body.toLowerCase() == "da")) {
    return api.sendMessage("Bạn zạ cute wa' , bạn xứng đáng có 10 ng iu :3", threadID);
  };

  if ((event.body.toLowerCase() == "yêu") || (event.body.toLowerCase() == "yeu")) {
    return api.sendMessage("cho mượn 5 chục đi iu liền nè", threadID);
  };

  if ((event.body.toLowerCase() == "đmm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("Bất hiếu vậy bạn ơi cha mẹ đẻ ra mà nói thế là hỏng r\n🚬🐧 ", threadID);
  };

  if ((event.body.toLowerCase() == "đm bot") || (event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage("VĂn minh lên nào bạn eey \n🚬🐧", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cmm") || (event.body.toLowerCase() == "chui cmm")) {
    return api.sendMessage("??", threadID);
  };

  if ((event.body.toLowerCase() == "cmm bot") || (event.body.toLowerCase() == "cmm bot")) {
    return api.sendMessage("Tôi đã làm gì bạn chưa :)", threadID);
  };

  if ((event.body.toLowerCase() == "địt") || (event.body.toLowerCase() == "dit")) {
    return api.sendMessage("Ng văn minh kh ai nói thế :)", threadID);
  };

  if ((event.body.toLowerCase() == "địt cc") || (event.body.toLowerCase() == "dit cc")) {
    return api.sendMessage("Bạn im đc rồi đấy", threadID);
  };

  if ((event.body.toLowerCase() == "sủa") || (event.body.toLowerCase() == "sua")) {
    return api.sendMessage("Nói ai vậy bạn?", threadID);
  };

  if ((event.body.toLowerCase() == "gáy") || (event.body.toLowerCase() == "gay")) {
    return api.sendMessage("Gáy to lên bạn ơi , nhỏ vậy , bạn bị viêm họng à\n🚬🐧", threadID);
  };

  if ((event.body.toLowerCase() == "Công thành") || (event.body.toLowerCase() == "Thành")) {
    return api.sendMessage("Gọi daddy có gì hong zạ ", threadID);
  };

  if ((event.body.toLowerCase() == "@Công Thành") || (event.body.toLowerCase() == "@Thành Công")) {
    return api.sendMessage("Daddy đi ngủ r còn tôi thôi \n🚬🐧", threadID);
  };

  if ((event.body.toLowerCase() == "bot ơi") ||  (event.body.toLowerCase() == "bot ơi")) {
    return api.sendMessage("Nói lẹ đy nào, tui phải phục vụ các box khác nữa :<<", threadID);
  };

  if ((event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "yeu bot")) {
    return api.sendMessage("Hmm... Bot ngại lắm thôi yêu admin của bot nhé :))", threadID);
  };

   if ((event.body.toLowerCase() == "yêu anh") || (event.body.toLowerCase() == "yeu anh")) {
    return api.sendMessage("Yêu với chả đương, làm bài tập xong chưa đấy \n🚬🐧", threadID);
  };

  if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hi")) {
    return api.sendMessage("Chào bạn cute gì đó nha, chúc bạn một ngày mới vui vẻ nè 🦄", threadID);
  };

  if ((event.body.toLowerCase() == "hí") || (event.body.toLowerCase() == "hi")) {
    return api.sendMessage("chào bạn nè", threadID);
  };

  if ((event.body.toLowerCase() == "chào") || (event.body.toLowerCase() == "chào")) {
    return api.sendMessage("Hello bạn , chúc bạn ngày mới vui vẻ nha 🐼", threadID);
  };

  if ((event.body.toLowerCase() == "hi mn") || (event.body.toLowerCase() == "hi mn")) {
    return api.sendMessage("Hi bạn iu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hi mng") || (event.body.toLowerCase() == "hi mng")) {
    return api.sendMessage("Hi baby, chúc baby một ngày mới tràn đầy năng lượng 🐹", threadID);
  };

  if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "hello")) {
    return api.sendMessage("Chào bạn iu, chúc bạn một ngày mới nhiều may mắn ❤️", threadID);
  };

 if ((event.body.toLowerCase() == "bsvv nha mng") || (event.body.toLowerCase() == "bsvv nha mng")) {
    return api.sendMessage("Chào bạn , chúc bạn một ngày mới vui vẻ nha", threadID);
  };

  if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
    return api.sendMessage("Chào bạn , chúc bạn một ngày mới vui vẻ nha", threadID);
  };

  if ((event.body.toLowerCase() == "btvv nha mng") || (event.body.toLowerCase() == "btvv nha mng")) {
    return api.sendMessage("Chào bạn , chúc bạn một ngày mới vui vẻ nha", threadID);
  };

  if ((event.body.toLowerCase() == "hí ae") || (event.body.toLowerCase() == "hi ae")) {
    return api.sendMessage("Chào bạn , chúc bạn một ngày mới vui vẻ nha ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "chào cậu") || (event.body.toLowerCase() == "chao cau")) {
    return api.sendMessage("Hí chào bạn <3", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cc") || (event.body.toLowerCase() == "chui cc")) {
    return api.sendMessage("️Matday quá đi bạn à ><, cái này phải bị phat. :3", threadID);
  };

  if ((event.body.toLowerCase() == "hentai") || (event.body.toLowerCase() == "hentai")) {
    return api.sendMessage("Thôi ông ơi , suy giảm giống nòi ng việt đấy ", threadID);
  };

  if ((event.body.toLowerCase() == "cc cút") || (event.body.toLowerCase() == "cc cút")) {
    return api.sendMessage("Sao mày ko cút? Mà bảo tao :) mệt lồn ghê :>", threadID);
  };

  if ((event.body.toLowerCase() == "vãi") || (event.body.toLowerCase() == "vai")) {
    return api.sendMessage("Vãi gì ", threadID);
  };

  if ((event.body.toLowerCase() == "Alo") || (event.body.toLowerCase() == "alo")) {
    return api.sendMessage("Đây bạn ơi...", threadID);
  };

  if ((event.body.toLowerCase() == "Aloo") || (event.body.toLowerCase() == "aloo")) {
    return api.sendMessage("Sao bạn êyyyyyyy", threadID);
  };

  if ((event.body.toLowerCase() == "link") || (event.body.toLowerCase() == "link")) {
    return api.sendMessage("Link bao nhiêu phút á cho e xem với nào 🤤", threadID);
  };

  if ((event.body.toLowerCase() == "cứu") || (event.body.toLowerCase() == "cuu")) {
    return api.sendMessage("Cúu cái gì, ngu thì chết khôn thì sống cậu chủ bảo tao thế <3", threadID);
  };

  if ((event.body.toLowerCase() == "gây war à") || (event.body.toLowerCase() == "gay war a")) {
    return api.sendMessage("Thế chiến thứ 3 kìa :))", threadID);
  };

  if ((event.body.toLowerCase() == "war không") || (event.body.toLowerCase() == "war khong")) {
    return api.sendMessage("War cái gì ?\n có tao ở đây mà làm loạn hả \n🚬🐧", threadID);
  };

  if ((event.body.toLowerCase() == "thích gây war à") || (event.body.toLowerCase() == "thich gay war a")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };  

  if ((event.body.toLowerCase() == "hát đi mng") || (event.body.toLowerCase() == "hat di mng")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi") || (event.body.toLowerCase() == "hat di")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };  

  if ((event.body.toLowerCase() == "bot hát đi") || (event.body.toLowerCase() == "bot hat di")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi nào") || (event.body.toLowerCase() == "hát đi nào")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi bot") || (event.body.toLowerCase() == "hat di bot")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mng") || (event.body.toLowerCase() == "tt đi mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi nào mng") || (event.body.toLowerCase() == "tt di nao mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt mng ơi") || (event.body.toLowerCase() == "tt mng oi")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
    return api.sendMessage("️Ngủ ngon ạ <3 Chúc mọi người mơ siêu đẹp <3", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai v bot") || (event.body.toLowerCase() == "admin m la ai v bot")) {
    return api.sendMessage("️Admin tui là Thành CgT có gì dùng lệnh /ad để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "chán quá") || (event.body.toLowerCase() == "chan qua")) {
    return api.sendMessage("️k sao mà , có tui đây", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mn") || (event.body.toLowerCase() == "tt đi mn")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "flop quá") || (event.body.toLowerCase() == "flop qua")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "con cặc") || (event.body.toLowerCase() == "con cac")) {
    return api.sendMessage("️Trái ớt khoe ai v bạn :)))", threadID);
  };

  if ((event.body.toLowerCase() == "cái lồn") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️Nói chuyện sạch sẽ tý bạn ơi :)))", threadID);
  };

  if ((event.body.toLowerCase() == "cl") || (event.body.toLowerCase() == "loz")) {
    return api.sendMessage("️bẩn vừa thôi bạn :)))", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
    return api.sendMessage("️Bớt xàm giúp tôi bạn ơi", threadID);
  };

  if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
    return api.sendMessage("️Tự ngậm mồm hay để tôi khóa mõm ?", threadID);
  };

  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
    return api.sendMessage("️Bớt đi bạn ơi 🐡", threadID);
  };

  if ((event.body.toLowerCase() == "cặc") || (event.body.toLowerCase() == "cặc")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "ông Thành") || (event.body.toLowerCase() == "ong Thành")) {
    return api.sendMessage("️Kêu chủ của tôi gì á :)?", threadID);
  };

  if ((event.body.toLowerCase() == "Bạn thành") || (event.body.toLowerCase() == "bạn thành")) {
    return api.sendMessage("️Sao nói gì admin tôi đấy ?", threadID);
  };

  if ((event.body.toLowerCase() == "cute quá") || (event.body.toLowerCase() == "cute qua")) {
    return api.sendMessage("️dạ quá khen ạ hihi :>", threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "haha")) {
    return api.sendMessage("️Haha dui thiệc đó :>>", threadID);
  };

  if ((event.body.toLowerCase() == "kkk") || (event.body.toLowerCase() == "kkk")) {
    return api.sendMessage("️Haha dui quá ha :>>", threadID);
  };

  if ((event.body.toLowerCase() == "con cặc") || (event.body.toLowerCase() == "con cặc")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "cái lồn") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "lồn") || (event.body.toLowerCase() == "lồn")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "đm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "đm bot") || (event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage("️Chửi cc gì đấy sủa lại bố mày nghe nào :) nít ranh mà cứ thích sồn :)", threadID);
  };

  if ((event.body.toLowerCase() == "lozz") || (event.body.toLowerCase() == "cloz")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "clmm") || (event.body.toLowerCase() == "clmm")) {
    return api.sendMessage("️Bớt chửi thề cho nên người đi bạn êi :)", threadID);
  };

  if ((event.body.toLowerCase() == "ko ai thương t hết") || (event.body.toLowerCase() == "ko ai thuong t het")) {
    return api.sendMessage("️Thôi ngoan nào tui thương bạn mà <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "có yêu em không") || (event.body.toLowerCase() == "co yeu em khong")) {
    return api.sendMessage("tui yêu em hơn cả ny em cơ, thế nên iu tui đi <3", threadID);
  };

  if ((event.body.toLowerCase() == "có yêu admin bot không") || (event.body.toLowerCase() == "co yeu admin bot khong")) {
    return api.sendMessage("KHÔNG, bạn nữ nào có nhu cầu thì cho lun đó", threadID);
  };

  if ((event.body.toLowerCase() == "có người yêu chưa") || (event.body.toLowerCase() == "co nguoi yeu chua")) {
    return api.sendMessage("Rồi ạ, là cậu đấy <3", threadID);
  };

  if ((event.body.toLowerCase() == "im đi") || (event.body.toLowerCase() == "im di")) {
    return api.sendMessage("Ủa rồi bạn lấy quyên gì bắt ngta im thế 🚬🐧" , threadID);
  };

  if ((event.body.toLowerCase() == "cút đi") || (event.body.toLowerCase() == "cut di")) {
    return api.sendMessage("Mình cút hay kh cũng kh tới lượt bạn lên tiếng 🚬🐧", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cái lon gì") || (event.body.toLowerCase() == "chui cai lon gi")) {
    return api.sendMessage("Chửi mày đấy, nhục thế còn hỏi :>", threadID);
  };

  if ((event.body.toLowerCase() == "có buồn ko") || (event.body.toLowerCase() == "co buon ko")) {
    return api.sendMessage("Có mọi người sao bé buồn đc <3 yêu lắm <3", threadID);
  };

  if ((event.body.toLowerCase() == "có yêu t ko") || (event.body.toLowerCase() == "co yeu t ko")) {
    return api.sendMessage("Dạ có yêu cậu và mọi người nhiều lắm", threadID);
  };

  if ((event.body.toLowerCase() == "đi ngủ đi") || (event.body.toLowerCase() == "di ngu di")) {
    return api.sendMessage("Tớ ngủ rùi,h cậu mới là người nên cần đi ngủ nè , nhớ giữ sức khỏe đó <3", threadID);
  };

  if ((event.body.toLowerCase() == "ăn cơm chưa") || (event.body.toLowerCase() == "an com chua")) {
    return api.sendMessage("Mình nhìn cậu ăn là thấy no rồi <3", threadID);
  };

  if ((event.body.toLowerCase() == "nihao") || (event.body.toLowerCase() == "ni hảo")) {
    return api.sendMessage("Nói tiếng việt đi tr", threadID);
  };

  if ((event.body.toLowerCase() == "Có thương t ko") || (event.body.toLowerCase() == "co thuong t ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "Có link fb của admin ko") || (event.body.toLowerCase() == "co link fb của admin ko")) {
    return api.sendMessage("Dĩ nhiên rồi có gì liên hệ anh ấy nha <3\nLink fb nè: https://www.facebook.com/congthanh.nhism2809/", threadID);
  };

  if ((event.body.toLowerCase() == "làm thơ đi") ||  (event.body.toLowerCase() == "lam tho di")) {
    return api.sendMessage("Em là cục cứt trôi sông ,\n anh là con chó đứng trông bên bờ \n mây trôi nước chảy hững hờ \n, con cầy cục cứt bao giờ gặp nhau", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot lồn") ||  (event.body.toLowerCase() == "clmm bot lon")) {
    return api.sendMessage("Mày chửi gì đấy nói rõ lên bố mày nghe lại xem nào :))", threadID);
  };

  if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "cc")) {
    return api.sendMessage("Ai dạy bạn ăn nói kiểu đó z", threadID);
  };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
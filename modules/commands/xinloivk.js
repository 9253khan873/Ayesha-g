module.exports.config = {
    name: "xinloivk",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "NTKhang fix by Jukie",
    description: "Sorry dear wife 😢🥺",
    commandCategory: "Love",
    usages: " @tag or noprefix: sorry vk iu @tag",
    cooldowns: 5,
    dependencies: {"fs-extra": "","axios": ""}
  }
    module.exports.run = async function ({ api, args, event, client,Users }) {
      function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));};
      const fs = global.nodemodule["fs-extra"];
      const axios = global.nodemodule["axios"];
      var mention = Object.keys(event.mentions)[0];
      if(!mention) return api.sendMessage("Tag someone you want to suyo with mahal mwuah.", event.threadID);
    var emoji = ["♥️","❤️","💛","💚","💙","💜","🖤","💖","💝","💓","💘","💍","🎁","💋","💎","💠","🌈","🌍","🌕","☀️","💑","💞","💗"];
    var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];
    let Avatar = (await axios.get( `https://graph.facebook.com/${mention}/picture?width=height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
      fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );
    let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
      fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );
      
      var imglove = [];
                  imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
                  imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
    
  
  var _0x8416=["\x6E\x61\x6D\x65","\x73\x65\x6E\x64\x65\x72\x49\x44","\x67\x65\x74\x44\x61\x74\x61"];var name_1=( await Users[_0x8416[2]](event[_0x8416[1]]))[_0x8416[0]];var name_2=( await Users[_0x8416[2]](mention))[_0x8416[0]]
    
    var arraytag = [];
      arraytag.push({id: event.senderID, tag: name_1});
      arraytag.push({id: mention, tag: name_2});
      var a = function (a) { api.sendMessage(a, event.threadID); }
      a("Mahal kita ❤️");
      await delay(2000);
      a("Oh aking sinta 🥺");
      await delay(2000);
      a("wag kana magalit sorry na 🥺🥺");
      await delay(2000);
      a("Teka aking sinta may regalo ako sayo ☘️☘️☘️");
      await delay(2000);
      a("Sorry na!!eto oh chocolate at flowers💐🍫");
      await delay(2000);
      a({body: name_1+" "+"💓"+" "+name_2, mentions: arraytag, attachment: imglove});
      fs.unlinkSync(__dirname+'/cache/avt.png');
      fs.unlinkSync(__dirname+'/cache/avt2.png');
    };
    
  module.exports.handleEvent = async function({ api, args, event, client,Users }) {
    if(!event.body) return;
    const fs = global.nodemodule["fs-extra"];
    const axios = global.nodemodule["axios"];
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));};
    let {body} = event;
     body = body.toLowerCase();
    var indexOf = function(value) {return body.indexOf(value) != -1};
    if(indexOf("sorry mahal") || indexOf("sorry vk love") || indexOf("sorry dear gf") || indexOf("sorry na dear mahal")) {
      var mention = Object.keys(event.mentions)[0];
      if(!mention) return api.sendMessage("Tag someone you want to suyo mwuah", event.threadID);
    var emoji = ["♥️","❤️","💛","💚","💙","💜","🖤","💖","💝","💓","💘","💍","🎁","💋","💎","💠","🌈","🌍","🌕","☀️","💑","💞","💗"];
    var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];
    let Avatar = (await axios.get( `https://graph.facebook.com/${mention}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: "arraybuffer" } )).data;
      fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );
    let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: "arraybuffer" } )).data;
      fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );
      
      var imglove = [];
    imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
    imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
    
  var _0x8416=["\x6E\x61\x6D\x65","\x73\x65\x6E\x64\x65\x72\x49\x44","\x67\x65\x74\x44\x61\x74\x61"];var name_1=( await Users[_0x8416[2]](event[_0x8416[1]]))[_0x8416[0]];var name_2=( await Users[_0x8416[2]](mention))[_0x8416[0]]
    
    
    var arraytag = [];
      arraytag.push({id: event.senderID, tag: name_1});
      arraytag.push({id: mention, tag: name_2});
      var a = function (a) { api.sendMessage(a, event.threadID); }
      a("Mahal kita mwuah ❤️");
      await delay(2000);
      a("Pasensya kana ngunit ako'y medjo tanga 🥺");
      await delay(2000);
      a("Magmahalan tayo ng lubos 🥺🥺");
      await delay(2000);
      a("Wag kana magalit sobra mahal kita mwuah ☘️☘️☘️");
      await delay(2000);
      a("Oh dika na tinuyo tama na!! 🥺");
      await delay(2000);
      a({body: name_1+" "+"💓"+" "+name_2, mentions: arraytag, attachment: imglove});
      fs.unlinkSync(__dirname+'/cache/avt.png');
      fs.unlinkSync(__dirname+'/cache/avt2.png');
    }
  
  }
  
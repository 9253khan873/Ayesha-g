module.exports.config = {
 name: "ok",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "Thoả",
 description: "Make the bot return the audio file ",
 commandCategory: "Music with prefix",
 usages: "",
 cooldowns: 30,
};

module.exports.run = function({ api, event, args }) {
 const request = require("request");
 const fs = require("fs-extra");
 return request(`https://vietup.net/files/8fd9c05c20c61c52f755f9487262a734/2ec994dc183c76e9c18e5fe88d77b1d3/ok.mp3`).pipe(fs.createWriteStream(__dirname+'/cache/say.mp3')).on('close',() => api.sendMessage({body: "", attachment: fs.createReadStream(__dirname + "/cache/say.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/say.mp3")));
}
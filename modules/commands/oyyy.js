const fs = require("fs");
module.exports.config = {
	name: "oyyy",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Choru tiktokers",
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Hoyy")==0 || (event.body.indexOf("oyyy")==0 || (event.body.indexOf("hoyy")==0 || (event.body.indexOf("Oyyy")==0)))) {
		var msg = {
				body: "mgabata.",
				attachment: fs.createReadStream(__dirname + `/noprefix/oyyy.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤬", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                       }
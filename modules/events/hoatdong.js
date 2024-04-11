module.exports.config = {
	name: "log",
	eventType: ["log:unsubscribe","log:subscribe","log:thread-name"],
	version: "1.0.0",
	credits: "Mirai Team",
	description: "Ghi lại thông báo các hoạt đông của bot!",
    envConfig: {
        enable: true
    }
};

module.exports.run = async function({ api, event, Threads, args, Users }) {
	
	 var datathread = await api.getThreadInfo(event.threadID);
     var namethread = datathread.name;
	 
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
	
    const logger = require("../../utils/log");
    if (!global.configModule[this.config.name].enable) return;
    var formReport =  "💌 Bot Notification 💟" +
	                "\n\n» 💭id Box: " + `${namethread}` +
                        "\n» 💭Id Box: " + event.threadID +
                        "\n» 🕺sumayaw: {task}" +
                        "\n» 🙄id: " + (await Users.getData(event.author)).name +
                        "\n» 🏃‍♂️tumakbo lalaki  : \n» " + event.author + " «" +
                        "\n» " + Date.now() +" «" +
			"\n\n-----------------------\n" +
			`⚡Time: ${gio}`,
						
	   task = "";
	
    switch (event.logMessageType) {
        case "log:thread-name": {
            const oldName = (await Threads.getData(event.threadID)).name || "Tên không tồn tại",
                    newName = event.logMessageData.name || "Walang pangalan";
            task = "Binago ng user ang pangalan ng grupo mula sa: '" + oldName + "' depensa '" + newName + "'";
            await Threads.setData(event.threadID, {name: newName});
            break;
        }
        case "log:subscribe": {
            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) task = "added by group!";
            break;
        }
        case "log:unsubscribe": {
            if (event.logMessageData.leftParticipantFbId== api.getCurrentUserID()) task = "Si Bot ay pinaalis na sa grupo!"
            break;
        }
        default: 
            break;
    }

    if (task.length == 0) return;

    formReport = formReport
    .replace(/\{task}/g, task);

    return api.sendMessage(formReport, global.config.ADMINBOT[0], (error, info) => {
        if (error) return logger(formReport, "[ Logging Event ]");
    });
}
var ys = module.exports = {};

ys.update = {}

ys.logger = function(log) {console.log(log)};

ys.warn = function(log) {console.warn(log)};

ys.send = function(channel, msg, other, filename) {
  try {
    if (!channel) return ys.logger('ERROR! : Need a channel.')
    if (!msg&&(other||filename)) msg = '';
    if (other && toString.call(other) === "[object Object]") { return channel.sendMessage(msg, other) }
    else if (other) { return channel.sendFile(other, filename) }
    else { return channel.sendMessage(msg) }
  } catch(err) {
    console.log(err);
  }
};

ys.uptime = function(now, start) {
  var stats = (now)-(start);
  var stats_day = Math.floor((stats)/1000/60/60/24);
  var stats_hour = Math.floor((stats-(stats_day*24*60*60*1000))/1000/60/60);
  var stats_minute = Math.floor((stats-(stats_hour*60*60*1000))/1000/60);
  var stats_second = Math.floor((stats-(stats_minute*60*1000))/1000);
  return stats_day+"d "+stats_hour+"h "+stats_minute+"m "+stats_second+"s";
};

ys.update.command = function() {
  var commands = [];
  var files = fs.readdirSync("./commands/");

  files.forEach(function(file) {
		var cmd = require("./commands/"+file)
    if (ys.permission(cmd.permissions)[1] !== "DEV") {
      commands.push({name: '$|'+file.replace(".js", ""), args: cmd.args, help: cmd.help, permission: ys.permission(cmd.permissions)[0]});
    }
	});
  return commands;
}

ys.permission = function(permission) {
  var table = {
    "1":["Nothing.", false],
    "2":["NSFW channel.", "NSFW"],
    "3":["Owner only.", "OWNER"],
    "4":["Create instant invite.", "CREATE_INSTANT_INVITE"],
    "5":["Kick members.", "KICK_MEMBERS"],
    "6":["Ban members.","BAN_MEMBERS"],
    "7":["Administrator.", "ADMINISTRATOR"],
    "8":["Manage channels.", "MANAGE_CHANNELS"],
    "9":["Manage guild.", "MANAGE_GUILD"],
    "10":["Add reaction.", "ADD_REACTIONS"],
    "11":["Read messages.", "READ_MESSAGES"],
    "12":["Send messages.", "SEND_MESSAGES"],
    "13":["Send TTS messages.", "SEND_TTS_MESSAGES"],
    "14":["Manage messages.", "MANAGE_MESSAGES"],
    "15":["Embed links.", "EMBED_LINKS"],
    "16":["Attach files.", "ATTACH_FILES"],
    "17":["Read message history.", "READ_MESSAGE_HISTORY"],
    "18":["Mention everyone.", "MENTION_EVERYONE"],
    "19":["Use external emojis.", "EXTERNAL_EMOJIS"],
    "20":["Connect.", "CONNECT"],
    "21":["Speak.", "SPEAK"],
    "22":["Mute members.", "MUTE_MEMBERS"],
    "23":["Deafen members.", "DEAFEN_MEMBERS"],
    "24":["Move members.", "MOVE_MEMBERS"],
    "25":["Use VAD.", "USE_VAD"],
    "26":["Change nickname.", "CHANGE_NICKNAME"],
    "27":["Manage nickanmes.", "MANAGE_NICKNAMES"],
    "28":["Manage roles.", "MANAGE_ROLES_OR_PERMISSIONS"],
    "29":["Manage webhooks.", "MANAGE_WEBHOOKS"],
    "30":["Manage emojis.", "MANAGE_EMOJIS"],
    "31":["Wolver developpers only.", "DEV"]
  }
  return table[permission];
}

ys.getUser = function(message, search) {
  let members = message.guild.members.filter(m => {
    if (m.user.username.toLowerCase().includes(search.toLowerCase())) return true;
    if (m.nickname && m.nickname.toLowerCase().includes(search.toLowerCase())) return true;
    if (m.id == search) return true;
    return false;
  });

  if(members.first()) return members.first();
  return false;
}

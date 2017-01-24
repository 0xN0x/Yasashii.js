var ys = module.exports = {};

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

wolver.uptime = function(now, start) {
  var stats = (now)-(start);
  var stats_day = Math.floor((stats)/1000/60/60/24);
  var stats_hour = Math.floor((stats-(stats_day*24*60*60*1000))/1000/60/60);
  var stats_minute = Math.floor((stats-(stats_hour*60*60*1000))/1000/60);
  var stats_second = Math.floor((stats-(stats_minute*60*1000))/1000);
  return stats_day+"d "+stats_hour+"h "+stats_minute+"m "+stats_second+"s";
};

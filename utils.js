var ys = module.exports = {};

ys.logger = function(log) {
  console.log(log);
};

ys.send = function(channel, msg, other) {
  try {
    if (!channel) return ys.logger('ERROR! : Need a channel.')
    if (!msg) msg = '';
    if (other && toString.call(other) === "[object Object]") { return channel.sendMessage(msg, other) }
    else if (other) { return channel.sendFile(msg, other) } 
    else { return channel.sendMessage(msg) }
  } catch(err) {
    console.log(err);
  }
};

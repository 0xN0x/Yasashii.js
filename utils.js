var ys = module.exports = {};

ys.logger = function(log) {
  console.log(log);
};

ys.send = function(channel, msg, other, filename) {
  try {
    if (!channel) return ys.logger('ERROR! : Need a channel.')
    if (!msg) msg = '';
    if (other && toString.call(other) === "[object Object]") { return channel.sendMessage(msg, other) }
    else if (other) { return channel.sendFile(other, filename) }
    else { return channel.sendMessage(msg) }
  } catch(err) {
    console.log(err);
  }
};

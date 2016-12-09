var ys = module.exports = {};

ys.logger = function(log) {
  console.log(log);
};

ys.send = function(channel, msg, file, embed) {
  try {
    if (!channel) return ys.logger('ERROR! : Need a channel.')
    if (!msg) msg = '';
    if (file) { return channel.sendMessage(msg, file) } 
    else if (toString.call(embed) === "[object Object]") { return channel.sendMessage(msg, embed) }
    else { return channel.sendMessage(msg) }
  } catch(err) {
    console.log(err);
  }
};

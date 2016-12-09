var ys = module.exports = {};

ys.logger = function(log) {
  console.log(log);
};

ys.send = function(channel, msg, file, embed) {
  try {
    if (!channel) return ys.logger('ERROR! : Need a channel.')
    if (!msg) msg = '';
    if (file) { channel.sendMessage(msg, file) } 
    else if (toString.call(embed) === "[object Object]") { channel.sendMessage(msg, embed) }
    else { channel.sendMessage(msg) }
  } catch(err) {
    console.log(err);
  }
};

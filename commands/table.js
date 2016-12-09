var cmd = module.exports = {};

cmd.type = "basic";
cmd.command = true;
cmd.help = "Help !";
cmd.args = '';

cmd.run = (msg) => {
  var args = msg.content.substring((bot.set.prefix).length+msg.content.split(" ")[0].replace(bot.set.prefix, "").length+1);
  msg.channel.sendMessage(args);
};

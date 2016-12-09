var cmd = module.exports = {};

cmd.type = "basic";
cmd.command = true;
cmd.help = "Help !";
cmd.args = '';

cmd.run = (msg) => {
  var args = m.content.substring((bot.set.prefix).length+m.content.split(" ")[0].replace(bot.set.prefix, "").length+1);
  m.channel.sendMessage(args);
};

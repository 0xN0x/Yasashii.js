var cmd = module.exports = {};

cmd.type = "basic";
cmd.command = true;
cmd.help = "Help !";
cmd.args = '';

cmd.run = (msg) => {
  msg.channel.sendMessage('test.');
};

var cmd = module.exports = {};

cmd.type = "basic";
cmd.command = true;
cmd.help = "Help !";
cmd.args = '';

cmd.run = (msg) => {
  ys.send(msg.channel, 'test.');
};

var e = module.exports = {};

a.type = "basic";
a.command = true;
a.help = "Help !";

a.run = (msg) => {
  msg.channel.sendMessage('test.');
};

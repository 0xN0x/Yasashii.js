var cmd = module.exports = {};

cmd.args = ``;
cmd.permission = 31;
cmd.type = 3;
cmd.command = true;
cmd.args = '';

cmd.run = (msg, args) => {
  let command = msg.content.split(' ').slice(1).join(' ');
  ys.send(msg.channel, "", {
		embed: {
			description: `${eval(command)}`,
			color: 0xE7A727
		}
	})
};

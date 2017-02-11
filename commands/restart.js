var cmd = module.exports = {};

cmd.args = ``;
cmd.permission = 31;
cmd.type = 3;
cmd.command = true;
cmd.args = '';

cmd.run = (msg) => {
  ys.send(msg.channel, `:white_check_mark: ${bot.user.username} was been restarted!`).then(setInterval(restart, 500))
	function restart() {
		bot.destroy();
		process.exit();
	}
};

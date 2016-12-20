var cmd = module.exports = {};

cmd.type = "admin";
cmd.command = true;
cmd.args = '';

cmd.run = (msg) => {
  msg.channel.sendMessage(`:white_check_mark: ${bot.user.username} was been restarted!`).then(setInterval(restart, 500))
	function restart() {
		bot.destroy();
		process.exit();
	}
};

var exec = require('child_process').exec;

var cmd = module.exports = {};

cmd.args = ``;
cmd.permission = 31;
cmd.type = 3;
cmd.command = true;
cmd.help = ``;

cmd.run = (msg, args) => {
	exec(suffix, function(err, stdout, stderr) {
		if (!err) {
      ys.send(msg.channel, "", {
    		embed: {
    			description: `${stdout}`,
    			color: 0xE7A727
    		}
    	})
		}
	});
}

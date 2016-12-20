var http = require('http');

var cmd = module.exports = {};

cmd.type = "basic";
cmd.command = true;
cmd.help = "Random cat pictures.";

cmd.run = (msg,args) => {
	var image;
	http.get('http://random.cat/meow', function (res) {
		var file = '';
		res.on('data', function (chunk) {
	   	file += chunk;
	  	});
		res.on('end', function () {
			image = JSON.parse(file);
		  	ys.send(msg.channel, '', image.file);
		});
	});
};

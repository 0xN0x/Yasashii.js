var mod = {
	"": "0",
	"basic": "0",
	"taiko": "1",
	"CTB": "2",
	"mania": "3"
}

var cmd = module.exports = {};

cmd.args = ``;
cmd.permission = 0;
cmd.type = 1;
cmd.command = true;
cmd.help = "Get osu account informations. ex: .osu <username> <basic|taiko|CTB|mania>";

cmd.run = (msg, args) => {
	ys.send(msg.channel, '', 'http://lemmmy.pw/osusig/sig.php?colour=hexffcc22&uname='+args.split(' ')[0]+'&mode='+mod[args.split(' ')[1]]+'&pp=0&flagshadow&flagstroke&darkheader&avatarrounding=4&onlineindicator=2&xpbar', 'osu.png')
};

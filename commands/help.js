var cmd = module.exports = {};

cmd.type = "basic";
cmd.command = true;
cmd.help = "Help !";
cmd.args = '';

cmd.run = (msg, args) => {
  function format(file, help) {
    var line = '.'+file.replace(".js", "")+"  = "+help+"";
    return line;
  }
  var files = fs.readdirSync("./commands/");
  var lines = ['**```css','[ Commands ]'];
  files.forEach(function(file) {
    if(file.indexOf(".js")) {
      var cmd = require("./"+file)
      lines.push(format(file, cmd.help));
    }
  });
  lines.push('```**');
  var message = lines.join("\n");
  ys.send(m.author, message);
  ys.send(m.channel, 'All commands have been sent, look in your DM.');
};

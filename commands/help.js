var fs = require('fs');

var cmd = module.exports = {};

cmd.args = ``;
cmd.permission = 1;
cmd.type = 1;
cmd.command = true;
cmd.help = "Help !";

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
      if (cmd.type === 1) {
        lines.push(format(file, cmd.help));
      }
    }
  });
  lines.push('```**');
  var message = lines.join("\n");
  ys.send(msg.author, message);
  ys.send(msg.channel, 'All commands have been sent, look in your DM.');
};

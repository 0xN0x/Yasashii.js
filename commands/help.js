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
  var files = fs.readdirSync("./Modules/commands/");
  var lines = ['**```css','[ Commands ]'];
  files.forEach(function(file) {
    var cmd = require("./"+file)
    lines.push(format(file, cmd.help));
  });
  lines.push('```**');
  var message = lines.join("\n");
  m.author.sendMessage(message);
  m.channel.sendMessage('All commands have been sent, look in your DM.');
};

var Table = require('cli-table');

var cmd = module.exports = {};

cmd.args = ``;
cmd.permission = 1;
cmd.type = 1;
cmd.command = true;
cmd.help = "Show the stats of the bot.";

cmd.run = (msg,args) => {

  var table = new Table({
  chars: { 'top': '-' , 'top-mid': '+' , 'top-left': '+' , 'top-right': '+'
         , 'bottom': '-' , 'bottom-mid': '+' , 'bottom-left': '+' , 'bottom-right': '+'
         , 'left': '|' , 'left-mid': '+' , 'mid': '-' , 'mid-mid': '+'
         , 'right': '|' , 'right-mid': '+' , 'middle': '|' }
  });
  table.push(
    ['guilds', bot.guilds.size]
  , ['channels', bot.channels.size]
  , ['users', bot.users.size]
  );
  ys.send(msg.channel, '```\n'+table.toString().split('[39m').join('').split('[90m').join('')+'```');
};

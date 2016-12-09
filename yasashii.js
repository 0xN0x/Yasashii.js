const moment = require('moment');
const Discord = require('discord.js');
const fs = require('fs')
const bot = new Discord.Client();

bot.set = require(__dirname+'/bot.json');
bot.commands = fs.readdirSync(__dirname+'/commands/');

global.bot = bot;
global.ys = require(__dirname+'/utils.js');

bot.on('ready', function() {
  bot.user.setPresence({status: 'online', game:{name:`${bot.set.prefix}help - ${bot.guilds.size} Servers`}});
  console.log(`${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} servers`);
  bot.start = moment().valueOf();
});

bot.on('message', function(msg) {
  if (msg.author.bot === true) return;
	if (msg.channel.type === 'dm') return;

  if(msg.content.startsWith(bot.set.prefix)) {
    var command = msg.content.split(' ')[0].replace(bot.set.prefix, '');
    if (bot.commands.indexOf(command+'.js') > -1) {
      var cmd = reload(__dirname+'/commands/'+command+'.js');
      if (cmd) {
        try {
          if (cmd.type === 'basic') {
            cmd.run(m);
          } else if (cmd.type === 'admin') {
            if (bot.set.admins.indexOf(m.author.id) > -1) {
              cmd.run(m);
            }
          }
        } catch(err) {
          msg.channel.sendMessage(`⚠️ **ERROR:** ${err.message}`);
          console.log(err);
        }
      }
    }
  }
});

bot.login(bot.set.token);

const moment = require('moment');
var reload = require('require-reload')(require);
const Discord = require('discord.js');
const fs = require('fs')
const bot = new Discord.Client();
//const website = require('')

bot.set = require(__dirname+'/bot.json');

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
    var cmds = fs.readdirSync('./commands/');
    var command = msg.content.split(' ')[0].replace(bot.set.prefix, '');
    if (cmds.indexOf(command+'.js') > -1) {
      var cmd = reload(__dirname+'/commands/'+command+'.js');
      var args = msg.content.substring(bot.set.prefix.length+command.length+1);
      if (cmd) {
        try {
          if (cmd.type === 1) {
            cmd.run(msg, args);
          } else if (cmd.type === 3) {
            if (bot.set.admins.indexOf(msg.author.id) > -1) {
              cmd.run(msg, args);
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
process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: \n" + err.stack);
});

bot.login(bot.set.token);

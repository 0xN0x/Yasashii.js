const moment = require('moment');
const reload = require('require-reload')(require);
const Discord = require('discord.js');
const fs = require('fs')
const bot = new Discord.Client();
//const website = require('')

bot.set = require(__dirname+'/bot.json');

// Global vars
global.bot = bot;
global.ys = require(__dirname+'/utils.js');

// Ready event
bot.on('ready', function() {
  bot.user.setPresence({status: 'online', game:{name:`${bot.set.prefix}help - ${bot.guilds.size} Servers`}});
  console.log(`${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} servers`);
  bot.start = moment().valueOf();
});

// Message event
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
          if (ys.permission(cmd.permissions)[1] === false) { cmd.main(m,args) }
          else if (ys.permission(cmd.permissions)[1] === "DEV") { if (bot.set.admins.indexOf(msg.author.id) > -1) { cmd.main(m, args) }}
          else if (ys.permission(cmd.permissions)[1] === "OWNER") { if (m.guild.owner.id === m.author.id) { cmd.main(m, args) }}
          else if (m.member.hasPermission(ys.permission(cmd.permissions)[1])) { cmd.main(m, args) }
          else { cmd.error(m, args) }
        } catch(err) {
          ys.send(m.channel, `⚠️ **ERROR:** ${err.message}`);
          console.log(err);
        }
      }
    }
  }
});
process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: \n" + err.stack);
});

// Connect
bot.login(bot.set.token);

const moment = require('moment');
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.set = require(__dirname+'/bot.json');

global.bot = bot;
global.ys = require(__dirname+'util.js');

bot.on('ready', function() {
  bot.user.setPresence({status: 'online', game:{ name:`${bot.set.prefix}help - ${bot.guilds.size} Servers`}});
  console.log(`${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} servers`);
  bot.start = moment().valueOf();
});

bot.login(bot.set.token);

var cmd = module.exports = {};

cmd.type = "admin";
cmd.command = true;
cmd.args = '';

cmd.run = (msg) => {
  let command = msg.content.split(' ').slice(1).join(' ');
  msg.channel.sendMessage(
`\`\`\`ini
[ Yasashii Eval ]
(${command})

OUT = (${eval(command)})
\`\`\``);
};

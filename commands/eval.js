var cmd = module.exports = {};

cmd.args = ``;
cmd.permission = 0;
cmd.type = 3;
cmd.command = true;
cmd.args = '';

cmd.run = (msg) => {
  let command = msg.content.split(' ').slice(1).join(' ');
  ys.send(msg.channel, 
`\`\`\`ini
[ Yasashii Eval ]
(${command})

OUT = (${eval(command)})
\`\`\``);
};

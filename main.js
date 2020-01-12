const { Client } = require('discord.js');
const client = new Client({ disableEveryone: true });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') msg.reply('Pong !');
  if (msg.content === 'everyone') msg.channel.send('@everyone, Salut à tous !', { disableEveryone: false });
  if (msg.content === 'noteveryone') msg.channel.send('@everyone (noteveryone), Salut à tous !');
});

client.login("NjY1NzA1MDE2MDgyMDM4Nzg0.XhpgYw.IvYtCr6BD22AyL2lfEM4_bru-S4");
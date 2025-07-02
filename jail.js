const { PermissionFlagsBits } = require('discord.js');
const config = require('../config.json');

module.exports = {
  name: "jail",
  description: "Kullanıcıyı hapse atar",
  async execute(message, args, client) {
    if (!message.member.permissions.has(PermissionFlagsBits.ManageRoles)) return message.reply('Bu komutu kullanmak için `Rolleri Yönet` yetkisine sahip olmalısın.');
    client.settings = client.settings || {};
    const subcmd = args[0];
    if (subcmd === 'log') {
      const kanal = message.mentions.channels.first();
      if (!kanal) return message.reply('Bir kanal etiketle!');
      client.settings.jailLog = kanal.id;
      message.channel.send(`Jail log kanalı <#${kanal.id}> olarak ayarlandı.`);
    } else {
      const member = message.mentions.members.first();
      if (!member) return message.reply('Bir kullanıcı etiketle!');
      const jailRole = message.guild.roles.cache.find(r => r.name.toLowerCase().includes('jail'));
      if (!jailRole) return message.reply('Jail rolü bulunamadı!');
      await member.roles.add(jailRole);
      message.reply(`🔒 ${member.user.tag} hapse atıldı!`);
      if (client.settings?.jailLog) {
        const logChannel = message.guild.channels.cache.get(client.settings.jailLog);
        if (logChannel) logChannel.send(`🔒 ${member.user.tag} hapse atıldı!`);
      }
    }
  }
}; 
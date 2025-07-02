const warns = new Map();
const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "warn",
  description: "Kullanıcıya uyarı verir",
  async execute(message, args, client) {
    if (!message.member.permissions.has(PermissionFlagsBits.KickMembers)) return message.reply('Bu komutu kullanmak için `Üyeleri At` yetkisine sahip olmalısın.');
    client.settings = client.settings || {};
    const subcmd = args[0];
    if (subcmd === 'log') {
      const kanal = message.mentions.channels.first();
      if (!kanal) return message.reply('Bir kanal etiketle!');
      client.settings.warnLog = kanal.id;
      message.channel.send(`Warn log kanalı <#${kanal.id}> olarak ayarlandı.`);
    } else if (subcmd === 'geçmiş') {
      const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
      if (!user) return message.reply('Kullanıcı belirt!');
      const userWarns = warns.get(user.id) || [];
      const liste = userWarns.map((w, i) => `${i+1}. ${w.reason} - <@${w.moderator}> - ${new Date(w.date).toLocaleString()}`).join('\n') || 'Uyarı yok.';
      message.channel.send(`${user.user.tag} uyarı geçmişi:\n${liste}`);
    } else {
      const member = message.mentions.members.first();
      if (!member) return message.reply('Bir kullanıcı etiketle!');
      const reason = args.slice(1).join(' ') || 'Sebep belirtilmedi';
      message.client.uyarilar = message.client.uyarilar || {};
      if (!message.client.uyarilar[member.id]) message.client.uyarilar[member.id] = [];
      message.client.uyarilar[member.id].push(reason);
      message.reply(`⚠️ ${member.user.tag} kullanıcısına uyarı verildi! Sebep: ${reason}`);
      if (client.settings?.warnLog) {
        const logChannel = message.guild.channels.cache.get(client.settings.warnLog);
        if (logChannel) logChannel.send(`${member.user.tag} uyarıldı. Sebep: ${reason}`);
      }
    }
  }
}; 
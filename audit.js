const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "audit",
  description: "Sunucu denetim logu",
  async execute(message, args, client) {
    if (!message.member.permissions.has('Administrator')) return message.reply('Bu komutu kullanmak için `Yönetici` olmalısın.');
    client.settings = client.settings || {};
    const subcmd = args[0];
    if (subcmd === 'log') {
      const kanal = message.mentions.channels.first();
      if (!kanal) return message.reply('Bir kanal etiketle!');
      client.settings.auditLog = kanal.id;
      message.channel.send(`Audit log kanalı <#${kanal.id}> olarak ayarlandı.`);
    } else if (subcmd === 'göster') {
      const entries = await message.guild.fetchAuditLogs({ limit: 10 });
      const logs = entries.entries.map(e => `${e.action} - ${e.executor?.tag || 'Bilinmiyor'} - ${e.target?.id || 'Yok'}`).join('\n') || 'Kayıt yok.';
      message.channel.send(`Son 10 denetim kaydı:\n${logs}`);
    } else {
      message.reply('Kullanım: !audit log #kanal | göster');
    }
  }
}; 